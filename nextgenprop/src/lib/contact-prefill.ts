// Carries a tool's summary over to the Contact page's message box.
const KEY = 'contact-prefill';

export function setContactPrefill(message: string) {
  try {
    sessionStorage.setItem(KEY, message);
  } catch {
    // Storage can be blocked (private mode); the visitor just types the message themselves.
  }
}

export function takeContactPrefill(): string {
  try {
    const message = sessionStorage.getItem(KEY) ?? '';
    sessionStorage.removeItem(KEY);
    return message;
  } catch {
    return '';
  }
}
