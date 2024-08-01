import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;


// types.ts

export type Article = {
  website_name: string;
  title: string;
  date: string;
  gender_or_ethnicity: string;
  sector: string;
  url: string;
  location_or_provenance: string;
  language: string;
  reasoning_discrimination: string;
  reasoning_hateful: string;
};

export type NewsletterSummary = {
  summary: string;
  articles: Article[];
};

export type ReportContent = {
  newsletter_summary: NewsletterSummary;
  articles_list: Article[];
};

export type ReportData = {
  id: number;
  gender_ethnicity: string;
  starting_date: string;
  ending_date: string;
  language: string;
  area: string;
  sector: string;
  report_content: ReportContent;
  created_at: string;
};
