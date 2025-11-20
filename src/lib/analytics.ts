// Google Tag Manager Analytics Utility
// This file provides type-safe functions for tracking events through GTM

// Types for GTM events
export interface GTMEvent {
  event: string;
  [key: string]: any;
}

// Main function to push events to GTM dataLayer
export const pushToDataLayer = (data: GTMEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
    console.log('📊 GTM Event:', data); // For debugging - remove in production if needed
  }
};

// 1. Form submission tracking
export const trackFormSubmission = (
  formName: string,
  status: 'success' | 'error',
  errorMessage?: string
) => {
  pushToDataLayer({
    event: 'form_submission',
    form_name: formName,
    form_status: status,
    error_message: errorMessage || '',
  });
};

// 2. Navigation clicks tracking
export const trackNavigation = (linkText: string, destination: string) => {
  pushToDataLayer({
    event: 'navigation_click',
    link_text: linkText,
    link_destination: destination,
  });
};

// 3. Product interaction tracking
export const trackProductInteraction = (
  productName: string,
  action: 'view' | 'instagram_click' | 'order_click',
  price?: string
) => {
  pushToDataLayer({
    event: 'product_interaction',
    product_name: productName,
    product_action: action,
    product_price: price || '',
  });
};

// 4. Button clicks tracking
export const trackButtonClick = (
  buttonName: string,
  location: string
) => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: location,
  });
};

// 5. FAQ interaction tracking
export const trackFAQOpen = (question: string) => {
  pushToDataLayer({
    event: 'faq_interaction',
    faq_question: question,
  });
};

// 6. Social media clicks tracking
export const trackSocialClick = (platform: string, location: string) => {
  pushToDataLayer({
    event: 'social_click',
    social_platform: platform,
    click_location: location,
  });
};

// 7. Scroll depth tracking
export const trackScroll = (percentage: number) => {
  pushToDataLayer({
    event: 'scroll_depth',
    scroll_percentage: percentage,
  });
};

// TypeScript declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
