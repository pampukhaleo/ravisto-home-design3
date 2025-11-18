import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormData {
  name: string;
  phone: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, message }: FormData = await req.json();
    
    console.log('Received form data:', { name, phone, messageLength: message?.length });

    // Validate input data
    if (!name || name.trim().length === 0) {
      throw new Error('Ім\'я є обов\'язковим полем');
    }
    if (!phone || phone.trim().length === 0) {
      throw new Error('Телефон є обов\'язковим полем');
    }
    if (name.length > 100) {
      throw new Error('Ім\'я не може бути довшим за 100 символів');
    }
    if (phone.length > 20) {
      throw new Error('Телефон не може бути довшим за 20 символів');
    }
    if (message && message.length > 1000) {
      throw new Error('Повідомлення не може бути довшим за 1000 символів');
    }

    const botToken = Deno.env.get('RAVISTO_BLOOM_TELEGRAM_BOT_TOKEN');
    const chatId1 = Deno.env.get('RAVISTO_BLOOM_CHAT_ID_1');
    const chatId2 = Deno.env.get('RAVISTO_BLOOM_CHAT_ID_2');

    if (!botToken) {
      console.error('Missing RAVISTO_BLOOM_TELEGRAM_BOT_TOKEN');
      throw new Error('Налаштування бота не завершені');
    }
    if (!chatId1 || !chatId2) {
      console.error('Missing chat IDs');
      throw new Error('Налаштування чатів не завершені');
    }

    // Format message for Telegram
    const timestamp = new Date().toLocaleString('uk-UA', {
      timeZone: 'Europe/Kyiv',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const telegramMessage = `🏠 Нова заявка з Ravisto Bloom Home

👤 Ім'я: ${name.trim()}
📱 Телефон: ${phone.trim()}
${message ? `💬 Повідомлення: ${message.trim()}` : ''}

⏰ Час: ${timestamp}`;

    console.log('Sending to Telegram...');

    // Send to both chats simultaneously
    const sendToChat = async (chatId: string, chatNumber: number) => {
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        console.error(`Failed to send to chat ${chatNumber}:`, result);
        throw new Error(`Помилка відправки в чат ${chatNumber}`);
      }

      console.log(`Successfully sent to chat ${chatNumber}`);
      return result;
    };

    // Send to both chats in parallel
    const results = await Promise.all([
      sendToChat(chatId1, 1),
      sendToChat(chatId2, 2),
    ]);

    console.log('All messages sent successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Заявку успішно відправлено',
        results 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in ravisto-bloom-send-telegram:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Помилка відправки заявки';
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
