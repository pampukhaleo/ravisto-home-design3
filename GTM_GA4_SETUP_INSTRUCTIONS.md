# 📊 Google Tag Manager + Google Analytics 4 - Setup Instructions

## ✅ Що вже зроблено

Весь код для відстеження подій вже інтегровано в проект:
- ✅ GTM скрипти додано в `index.html`
- ✅ Утиліта для аналітики створена (`src/lib/analytics.ts`)
- ✅ Всі компоненти оновлено з tracking функціями
- ✅ TypeScript типізація додана

**Тепер потрібно налаштувати GTM та GA4 акаунти.**

---

## 📋 Крок 1: Створення Google Tag Manager акаунту

### 1.1 Створити GTM акаунт
1. Перейти на https://tagmanager.google.com
2. Натиснути **"Create Account"**
3. Заповнити форму:
   - **Account Name**: `Ravisto Bloom Home`
   - **Country**: Ukraine
   - **Container Name**: `home.ravisto.ua` (або ваш домен)
   - **Target platform**: **Web**
4. Прийняти Terms of Service
5. Натиснути **"Create"**

### 1.2 Отримати Container ID
Після створення контейнеру ви побачите Container ID у форматі: **GTM-XXXXXXX**

**⚠️ ВАЖЛИВО:** Скопіюйте цей ID!

---

## 📋 Крок 2: Оновити код з вашим GTM Container ID

### 2.1 Відкрити файл `index.html`

Знайти ДВА місця з коментарем:
```html
<!-- TODO: Replace GTM-XXXXXXX with your actual GTM Container ID -->
```

### 2.2 Замінити `GTM-XXXXXXX` на ваш Container ID

**Приклад:**
Якщо ваш Container ID: `GTM-ABCD123`

**Замініть:**
```html
<!-- БУЛО -->
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- СТАЛО -->
})(window,document,'script','dataLayer','GTM-ABCD123');</script>
```

**Та:**
```html
<!-- БУЛО -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"

<!-- СТАЛО -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ABCD123"
```

### 2.3 Зберегти файл та перезапустити сайт

---

## 📋 Крок 3: Створення Google Analytics 4 акаунту

### 3.1 Створити GA4 property
1. Перейти на https://analytics.google.com
2. Натиснути **"Admin"** (лівий нижній кут)
3. У колонці **Account** натиснути **"Create Account"**
4. Заповнити:
   - **Account name**: `Ravisto Bloom Home`
   - Прийняти умови
5. Натиснути **"Next"**

### 3.2 Налаштувати Property
1. **Property name**: `Ravisto Bloom Home Website`
2. **Time zone**: `(GMT+02:00) Kyiv`
3. **Currency**: `Ukrainian Hryvnia (₴)`
4. Натиснути **"Next"**

### 3.3 Заповнити Business Information
1. **Industry category**: `Retail`
2. **Business size**: виберіть відповідний розмір
3. Натиснути **"Next"**

### 3.4 Business Objectives
1. Виберіть цілі (наприклад, "Get baseline reports", "Measure customer engagement")
2. Натиснути **"Create"**
3. Прийняти Terms of Service

### 3.5 Отримати Measurement ID
1. Після створення property перейти в **"Data streams"**
2. Натиснути **"Add stream"** → **"Web"**
3. Заповнити:
   - **Website URL**: `https://home.ravisto.ua`
   - **Stream name**: `Ravisto Bloom Website`
4. Натиснути **"Create stream"**

**⚠️ ВАЖЛИВО:** Ви побачите **Measurement ID** у форматі: **G-XXXXXXXXXX**
Скопіюйте цей ID!

---

## 📋 Крок 4: Налаштування Google Tag Manager

Тепер повернемось до GTM для створення тегів, тригерів та змінних.

### 4.1 Створити змінні (Variables)

1. У GTM перейти в **Variables** (ліве меню)
2. У розділі **Built-In Variables** натиснути **"Configure"**
3. Включити наступні змінні:
   - ✅ Event
   - ✅ Page URL
   - ✅ Page Hostname
   - ✅ Page Path
   - ✅ Referrer
   - ✅ Click Element
   - ✅ Click Text

4. Створити **User-Defined Variables** (натиснути **"New"**):

**Змінна 1: form_name**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `form_name`
- Name: `DLV - form_name`

**Змінна 2: form_status**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `form_status`
- Name: `DLV - form_status`

**Змінна 3: error_message**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `error_message`
- Name: `DLV - error_message`

**Змінна 4: product_name**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `product_name`
- Name: `DLV - product_name`

**Змінна 5: product_action**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `product_action`
- Name: `DLV - product_action`

**Змінна 6: product_price**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `product_price`
- Name: `DLV - product_price`

**Змінна 7: button_name**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `button_name`
- Name: `DLV - button_name`

**Змінна 8: button_location**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `button_location`
- Name: `DLV - button_location`

**Змінна 9: link_text**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `link_text`
- Name: `DLV - link_text`

**Змінна 10: link_destination**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `link_destination`
- Name: `DLV - link_destination`

**Змінна 11: social_platform**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `social_platform`
- Name: `DLV - social_platform`

**Змінна 12: click_location**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `click_location`
- Name: `DLV - click_location`

**Змінна 13: faq_question**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `faq_question`
- Name: `DLV - faq_question`

**Змінна 14: scroll_percentage**
- Variable Type: `Data Layer Variable`
- Data Layer Variable Name: `scroll_percentage`
- Name: `DLV - scroll_percentage`

---

### 4.2 Створити тригери (Triggers)

У розділі **Triggers** створити наступні Custom Event тригери:

**Тригер 1: Form Submission**
- Trigger Type: `Custom Event`
- Event name: `form_submission`
- Name: `CE - Form Submission`

**Тригер 2: Product Interaction**
- Trigger Type: `Custom Event`
- Event name: `product_interaction`
- Name: `CE - Product Interaction`

**Тригер 3: Button Click**
- Trigger Type: `Custom Event`
- Event name: `button_click`
- Name: `CE - Button Click`

**Тригер 4: Navigation Click**
- Trigger Type: `Custom Event`
- Event name: `navigation_click`
- Name: `CE - Navigation Click`

**Тригер 5: Social Click**
- Trigger Type: `Custom Event`
- Event name: `social_click`
- Name: `CE - Social Click`

**Тригер 6: FAQ Interaction**
- Trigger Type: `Custom Event`
- Event name: `faq_interaction`
- Name: `CE - FAQ Interaction`

**Тригер 7: Scroll Depth**
- Trigger Type: `Custom Event`
- Event name: `scroll_depth`
- Name: `CE - Scroll Depth`

---

### 4.3 Створити теги (Tags)

#### Тег 1: GA4 Configuration Tag (ГОЛОВНИЙ ТЕГ)

1. Натиснути **Tags** → **"New"**
2. Назва: `GA4 Configuration`
3. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Configuration`
   - **Measurement ID**: введіть ваш GA4 Measurement ID (G-XXXXXXXXXX)
4. Triggering:
   - Trigger: `All Pages`
5. **Save**

---

#### Тег 2: GA4 Event - Form Submission

1. Натиснути **Tags** → **"New"**
2. Назва: `GA4 Event - Form Submission`
3. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Event`
   - **Configuration Tag**: виберіть `GA4 Configuration`
   - **Event Name**: `form_submission`
   - **Event Parameters**:
     - Parameter Name: `form_name` → Value: `{{DLV - form_name}}`
     - Parameter Name: `form_status` → Value: `{{DLV - form_status}}`
     - Parameter Name: `error_message` → Value: `{{DLV - error_message}}`
4. Triggering:
   - Trigger: `CE - Form Submission`
5. **Save**

---

#### Тег 3: GA4 Event - Product Interaction

1. Назва: `GA4 Event - Product Interaction`
2. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Event`
   - **Configuration Tag**: `GA4 Configuration`
   - **Event Name**: `product_interaction`
   - **Event Parameters**:
     - `product_name` → `{{DLV - product_name}}`
     - `product_action` → `{{DLV - product_action}}`
     - `product_price` → `{{DLV - product_price}}`
3. Triggering: `CE - Product Interaction`
4. **Save**

---

#### Тег 4: GA4 Event - Button Click

1. Назва: `GA4 Event - Button Click`
2. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Event`
   - **Configuration Tag**: `GA4 Configuration`
   - **Event Name**: `button_click`
   - **Event Parameters**:
     - `button_name` → `{{DLV - button_name}}`
     - `button_location` → `{{DLV - button_location}}`
3. Triggering: `CE - Button Click`
4. **Save**

---

#### Тег 5: GA4 Event - Navigation Click

1. Назва: `GA4 Event - Navigation Click`
2. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Event`
   - **Configuration Tag**: `GA4 Configuration`
   - **Event Name**: `navigation_click`
   - **Event Parameters**:
     - `link_text` → `{{DLV - link_text}}`
     - `link_destination` → `{{DLV - link_destination}}`
3. Triggering: `CE - Navigation Click`
4. **Save**

---

#### Тег 6: GA4 Event - Social Click

1. Назва: `GA4 Event - Social Click`
2. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Event`
   - **Configuration Tag**: `GA4 Configuration`
   - **Event Name**: `social_click`
   - **Event Parameters**:
     - `social_platform` → `{{DLV - social_platform}}`
     - `click_location` → `{{DLV - click_location}}`
3. Triggering: `CE - Social Click`
4. **Save**

---

#### Тег 7: GA4 Event - FAQ Interaction

1. Назва: `GA4 Event - FAQ Interaction`
2. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Event`
   - **Configuration Tag**: `GA4 Configuration`
   - **Event Name**: `faq_interaction`
   - **Event Parameters**:
     - `faq_question` → `{{DLV - faq_question}}`
3. Triggering: `CE - FAQ Interaction`
4. **Save**

---

#### Тег 8: GA4 Event - Scroll Depth

1. Назва: `GA4 Event - Scroll Depth`
2. Tag Configuration:
   - Tag Type: `Google Analytics: GA4 Event`
   - **Configuration Tag**: `GA4 Configuration`
   - **Event Name**: `scroll_depth`
   - **Event Parameters**:
     - `scroll_percentage` → `{{DLV - scroll_percentage}}`
3. Triggering: `CE - Scroll Depth`
4. **Save**

---

## 📋 Крок 5: Тестування (КРИТИЧНО ВАЖЛИВО!)

### 5.1 Увімкнути Preview Mode в GTM

1. У GTM натиснути **"Preview"** (правий верхній кут)
2. Ввести URL вашого сайту: `https://home.ravisto.ua`
3. Натиснути **"Connect"**
4. Відкриється нова вкладка з вашим сайтом + Tag Assistant

### 5.2 Перевірити події

**Тестовий сценарій:**

1. ✅ **Page View**
   - Перевірити, що GTM завантажився
   - Перевірити, що спрацював тег `GA4 Configuration`

2. ✅ **Navigation Click**
   - Клікнути на "Товари" в меню
   - У Tag Assistant побачите подію `navigation_click`
   - Перевірити параметри: `link_text: "Товари"`, `link_destination: "products"`

3. ✅ **Product Interaction**
   - Клікнути на "Детальніше" для товару
   - Перевірити подію `product_interaction`
   - Параметри: `product_name`, `product_action: "order_click"`, `product_price`

4. ✅ **Social Click**
   - Клікнути на Instagram
   - Перевірити подію `social_click`
   - Параметри: `social_platform: "Instagram"`, `click_location: "header"`

5. ✅ **FAQ Interaction**
   - Відкрити будь-яке FAQ питання
   - Перевірити подію `faq_interaction`
   - Параметр: `faq_question`

6. ✅ **Scroll Depth**
   - Прокрутити сторінку до кінця
   - Повинні спрацювати події при 25%, 50%, 75%, 100%

7. ✅ **Form Submission**
   - Заповнити форму контакту
   - Відправити
   - Перевірити подію `form_submission`
   - Параметри: `form_name: "contact_form"`, `form_status: "success"`

### 5.3 Перевірити в GA4 DebugView

1. У GA4 перейти в **Admin** → **DebugView**
2. Або: **Reports** → **Realtime**
3. Повторити всі тести
4. Переконатись, що події з'являються в реальному часі

**⚠️ Якщо події НЕ з'являються:**
- Перевірити GTM Preview Mode (всі теги мають бути зеленими)
- Перевірити Console в браузері (F12) на наявність помилок
- Перевірити, що Measurement ID правильний
- Переконатись, що Container ID замінено в обох місцях в `index.html`

---

## 📋 Крок 6: Публікація GTM

Після успішного тестування:

1. У GTM натиснути **"Submit"** (правий верхній кут)
2. Заповнити:
   - **Version Name**: `Initial Setup - GTM + GA4 Integration`
   - **Version Description**: `Added tracking for forms, products, navigation, social, FAQ, scroll`
3. Натиснути **"Publish"**

**🎉 Вітаємо! GTM + GA4 налаштовано!**

---

## 📋 Крок 7: Налаштування конверсій в GA4

### 7.1 Відмітити події як конверсії

1. У GA4 перейти в **Admin** → **Events**
2. Знайти подію `form_submission`
3. Натиснути **"Mark as conversion"** (toggle)
4. Натиснути **"Save"**

### 7.2 Створити умовну конверсію для успішних форм

1. У GA4: **Admin** → **Conversions** → **"New conversion event"**
2. Налаштувати:
   - **Custom event name**: `successful_contact_form`
   - **Matching conditions**:
     - `event_name` equals `form_submission`
     - `form_status` equals `success`
3. **Save**

Тепер ви зможете відстежувати саме УСПІШНІ відправки форм як конверсії!

### 7.3 Створити конверсію для замовлень

1. **Admin** → **Conversions** → **"New conversion event"**
2. Налаштувати:
   - **Custom event name**: `product_order_intent`
   - **Matching conditions**:
     - `event_name` equals `product_interaction`
     - `product_action` equals `order_click`
3. **Save**

---

## 📋 Крок 8: Створення аудиторій (для ремаркетингу)

### Аудиторія 1: Користувачі, які переглянули товари

1. У GA4: **Admin** → **Audiences** → **"New audience"**
2. Налаштування:
   - **Audience name**: `Product Viewers`
   - **Description**: `Users who viewed products`
   - **Condition**: `event_name` equals `product_interaction`
3. **Save**

### Аудиторія 2: Користувачі з високою залученістю

1. **New audience**
2. Налаштування:
   - **Audience name**: `Highly Engaged Users`
   - **Description**: `Users who scrolled 75%+`
   - **Condition**: `event_name` equals `scroll_depth` AND `scroll_percentage` >= 75
3. **Save**

### Аудиторія 3: Користувачі, які відправили форму

1. **New audience**
2. Налаштування:
   - **Audience name**: `Form Submitters`
   - **Description**: `Users who submitted contact form`
   - **Condition**: `event_name` equals `form_submission` AND `form_status` equals `success`
3. **Save**

---

## 📋 Крок 9: Налаштування звітів

### 9.1 Custom Reports

1. У GA4: **Explore** → **"Blank"**
2. Створити звіт "Product Performance":
   - **Dimensions**: `product_name`, `product_action`
   - **Metrics**: `Event count`, `Total users`
   - **Filters**: `event_name` equals `product_interaction`

### 9.2 Додати важливі метрики в Dashboard

1. **Reports** → **"Library"**
2. Створити власну колекцію звітів з:
   - Form Submissions (конверсії)
   - Product Interactions
   - Social Clicks
   - Scroll Depth
   - Navigation patterns

---

## 📋 Контрольний чеклист

Перед завершенням переконайтесь:

### Налаштування коду:
- [ ] GTM Container ID замінено в `index.html` (2 місця)
- [ ] GA4 Measurement ID додано в GTM Configuration Tag
- [ ] Сайт перезапущено після змін

### GTM налаштування:
- [ ] 14 Data Layer Variables створено
- [ ] 7 Custom Event Triggers створено
- [ ] 8 GA4 Tags створено (1 Configuration + 7 Event tags)
- [ ] Preview Mode пройдено успішно
- [ ] GTM Container опубліковано

### GA4 налаштування:
- [ ] GA4 Property створено
- [ ] Measurement ID отримано
- [ ] Конверсії налаштовано (мінімум 2)
- [ ] Аудиторії створено (мінімум 3)
- [ ] DebugView перевірено

### Тестування:
- [ ] Page View працює
- [ ] Form Submission працює (success + error)
- [ ] Product Interaction працює
- [ ] Navigation Click працює
- [ ] Social Click працює
- [ ] FAQ Interaction працює
- [ ] Scroll Depth працює (25%, 50%, 75%, 100%)
- [ ] Події відображаються в GA4 Realtime

---

## 🎯 Що ви зможете відстежувати

### 📊 Конверсії:
- Успішні відправки форми контакту
- Наміри замовлення товарів
- Переходи в Instagram

### 🛍️ Товари:
- Які товари найпопулярніші
- Скільки разів клікнули "Замовити"
- Скільки переглянули в Instagram

### 👥 Поведінка:
- Як користувачі навігують сайтом
- Які FAQ найчастіше відкривають
- Наскільки глибоко прокручують сторінку (engagement)

### 📱 Соціальні мережі:
- Кількість кліків на Instagram
- З яких місць переходять (header, products)

### 💰 ROI:
- Ефективність рекламних кампаній
- Джерела трафіку з найвищою конверсією
- Cost per acquisition (CPA)

---

## 🆘 Troubleshooting

### Проблема: Події не з'являються в GA4

**Рішення:**
1. Відкрити Developer Console (F12)
2. Перевірити, що `dataLayer` має події:
   ```javascript
   console.log(window.dataLayer);
   ```
3. Перевірити GTM Preview Mode - всі теги повинні бути зелені
4. Перевірити Measurement ID в GTM Configuration Tag
5. Почекати 5-10 хвилин (іноді GA4 має затримку)

### Проблема: GTM не завантажується

**Рішення:**
1. Перевірити Container ID в `index.html` (обидва місця)
2. Перевірити, що немає AdBlock
3. Перевірити Network tab в Developer Tools
4. Переконатись, що сайт доступний через HTTPS

### Проблема: Параметри подій порожні

**Рішення:**
1. Перевірити, що Data Layer Variables створено правильно
2. Перевірити назви змінних (case-sensitive!)
3. У GTM Preview Mode перевірити dataLayer при спрацюванні події
4. Переконатись, що імпорти в компонентах правильні

---

## 📚 Корисні ресурси

- [GTM Documentation](https://support.google.com/tagmanager)
- [GA4 Documentation](https://support.google.com/analytics)
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)
- [GTM Community Template Gallery](https://tagmanager.google.com/gallery/)

---

**🎉 Успіхів з аналітикою!**

Якщо у вас виникли питання, перевірте Developer Console та GTM Preview Mode - там є вся інформація для дебагу.
