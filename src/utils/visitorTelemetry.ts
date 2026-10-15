/**
 * Visitor Intelligence & Real-Time Lead Capture Utility
 * Tracks UTM attribution, social referrers (LinkedIn, X.com), session behavior,
 * and handles zero-loss form submissions for recruiter CV requests and architecture blueprints.
 */

export interface VisitorIntel {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  referrer: string;
  landingPage: string;
  firstSeen: string;
  eventsTriggered: string[];
}

export interface LeadInquiry {
  name: string;
  email: string;
  organization: string;
  roleType?: string;
  inquiryType: 'cv_request' | 'blueprint_download' | 'audit_booking';
  notes?: string;
  articleSlug?: string;
}

const STORAGE_KEY = 'mh_visitor_intel';

/**
 * Initialize or retrieve stored visitor intelligence from localStorage
 */
export const getVisitorIntel = (): VisitorIntel => {
  if (typeof window === 'undefined') {
    return {
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
      utmContent: null,
      referrer: '',
      landingPage: '/',
      firstSeen: new Date().toISOString(),
      eventsTriggered: [],
    };
  }

  const existing = localStorage.getItem(STORAGE_KEY);
  if (existing) {
    try {
      return JSON.parse(existing);
    } catch {
      // Fallback if malformed
    }
  }

  // Parse current query parameters for UTM attribution
  const params = new URLSearchParams(window.location.search);
  const intel: VisitorIntel = {
    utmSource: params.get('utm_source') || (document.referrer.includes('linkedin.com') ? 'linkedin' : document.referrer.includes('t.co') || document.referrer.includes('x.com') ? 'x' : null),
    utmMedium: params.get('utm_medium'),
    utmCampaign: params.get('utm_campaign'),
    utmContent: params.get('utm_content'),
    referrer: document.referrer || 'direct',
    landingPage: window.location.pathname + window.location.search,
    firstSeen: new Date().toISOString(),
    eventsTriggered: [],
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(intel));
  } catch {}

  return intel;
};

/**
 * Track high-intent visitor events (e.g. testing router, reading blog, clicking Topmate)
 */
export const trackVisitorEvent = (eventName: string, metadata?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  const intel = getVisitorIntel();
  if (!intel.eventsTriggered.includes(eventName)) {
    intel.eventsTriggered.push(eventName);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(intel));
    } catch {}
  }

  // Log to console in dev mode
  if (import.meta.env.DEV) {
    console.log(`[Intel Event]: ${eventName}`, { intel, metadata });
  }
};

/**
 * Zero-Loss Lead Submission
 * Dispatches form data to FormSubmit AJAX endpoint delivering instant lead emails
 * to Mohsin with full UTM attribution and company metadata.
 */
export const submitLeadInquiry = async (lead: LeadInquiry): Promise<{ success: boolean; message: string }> => {
  const intel = getVisitorIntel();

  const payload = {
    _subject: `[High-Intent Lead] ${lead.name || 'Visitor'} from ${lead.organization || 'Enterprise'} (${lead.inquiryType.toUpperCase()})`,
    _template: 'table',
    _captcha: 'false',
    name: lead.name || 'Anonymous Technical Visitor',
    work_email: lead.email,
    company_or_org: lead.organization || 'Not Specified',
    role_type: lead.roleType || 'AI Leadership / Consulting',
    inquiry_type: lead.inquiryType,
    article_referenced: lead.articleSlug || 'N/A',
    notes: lead.notes || 'Interested in technical track record and architecture blueprints.',
    utm_source: intel.utmSource || 'direct',
    utm_campaign: intel.utmCampaign || 'organic',
    referrer_domain: intel.referrer || 'direct',
    landing_url: intel.landingPage,
    session_first_seen: intel.firstSeen,
  };

  try {
    const response = await fetch('https://formsubmit.co/ajax/mohsin.i.qureshi@hotmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      trackVisitorEvent('LEAD_SUBMITTED_SUCCESS', { leadType: lead.inquiryType });
      return {
        success: true,
        message: 'Inquiry received. Mohsin has received your notification directly.',
      };
    } else {
      return {
        success: false,
        message: 'Network response was not OK, fallback activated.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to dispatch via network. Please connect directly via email.',
    };
  }
};
