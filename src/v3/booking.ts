import { LINKS } from './content';

type CalendlyApi = { initPopupWidget: (opts: { url: string }) => void };
const getCalendly = () => (window as unknown as { Calendly?: CalendlyApi }).Calendly;

const BOOKING_URL = `${LINKS.calendly}/15min?hide_gdpr_banner=1&background_color=181d24&text_color=ece8e1&primary_color=f0a33a`;

let loading: Promise<void> | null = null;

// Loads Calendly's popup widget on first use only, so nothing third-party runs on page load.
function loadCalendly(): Promise<void> {
  if (getCalendly()) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(css);
    const js = document.createElement('script');
    js.src = 'https://assets.calendly.com/assets/external/widget.js';
    js.async = true;
    js.onload = () => resolve();
    js.onerror = () => reject(new Error('Calendly failed to load'));
    document.body.appendChild(js);
  });
  return loading;
}

/** Opens the booking popup; falls back to Calendly in a new tab if the widget can't load. */
export function openBooking(e?: { preventDefault: () => void }) {
  e?.preventDefault();
  loadCalendly()
    .then(() => getCalendly()?.initPopupWidget({ url: BOOKING_URL }))
    .catch(() => window.open(LINKS.calendly, '_blank', 'noopener'));
}

/** Props for an <a> booking CTA: works without JS (plain link), opens the popup with JS. */
export const bookingLinkProps = {
  href: LINKS.calendly,
  target: '_blank',
  rel: 'noopener noreferrer',
  onClick: (e: { preventDefault: () => void }) => openBooking(e),
};
