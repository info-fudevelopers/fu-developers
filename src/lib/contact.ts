import { SITE, waLink } from '../data/site';

export const EMAILJS_CONFIG = {
  serviceId: 'service_c0j8ooc',
  templateId: 'template_9ra6uxq',
  publicKey: '8eUF3R0vomkoFUL_m',
};

export type InquiryValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

export const EMPTY_INQUIRY: InquiryValues = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Website',
  budget: 'Not sure yet',
  message: '',
};

export async function sendProjectInquiry(
  v: InquiryValues
): Promise<'emailjs' | 'mailto'> {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (serviceId && templateId && publicKey) {
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: v,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('EmailJS request failed');
    }

    return 'emailjs';
  }

  const subject = 'Project Request - ' + v.projectType + ' - ' + v.name;

  const body = [
    'Name: ' + v.name,
    'Email: ' + v.email,
    'Phone / WhatsApp: ' + v.phone,
    'Project Type: ' + v.projectType,
    'Budget: ' + v.budget,
    '',
    'Project Details:',
    v.message,
  ].join('\n');

  window.location.href =
    'mailto:' +
    SITE.email +
    '?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);

  return 'mailto';
}

export function buildWhatsAppInquiry(v: InquiryValues): string {
  const text = [
    'Hi FU DEVELOPERS! My name is ' + (v.name || '—') + '.',
    'Project type: ' + v.projectType,
    'Budget: ' + v.budget,
    v.message
      ? 'Details: ' + v.message
      : "I'd like to discuss a project.",
  ].join('\n');

  return waLink(text);
}
