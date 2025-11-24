/**
 * TypeScript type definitions
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  clientLogo: string;
  backgroundVideo?: string;
  backgroundImage?: string;
  isComingSoon?: boolean;
}

export interface NewsletterFormData {
  firstName?: string;
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface TimelineEntry {
  year: string;
  company: string;
  position: string;
  description?: string;
}

export interface Service {
  title: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}





