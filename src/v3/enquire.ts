// Prefills the enquiry form (Contact) and scrolls to it. Works from any page that renders <Contact />.
export interface EnquiryPrefill { topic?: string; message?: string }

export const enquire = (topic?: string, message?: string) => {
  window.dispatchEvent(new CustomEvent<EnquiryPrefill>('v3-enquire', { detail: { topic, message } }));
  const el = document.getElementById('enquiry');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else window.location.assign(`${import.meta.env.BASE_URL}#contact`);
};
