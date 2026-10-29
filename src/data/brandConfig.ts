export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface BrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  contact: {
    whatsappNumber: string;
    whatsappMessage: string;
    email: string;
    phoneFormatted: string;
  };
  navigation: NavItem[];
  partnerLogos: {
    name: string;
    label: string;
    subtitle: string;
  }[];
}

export const brandConfig: BrandConfig = {
  name: "BrandSpective Services",
  shortName: "BrandSpective",
  tagline: "E-Commerce Growth & Performance Marketing",
  location: "Dehradun, Uttarakhand",
  contact: {
    whatsappNumber: "919876543210",
    whatsappMessage: "Hi BrandSpective team, I would like to explore growth advertising and marketplace scaling for our brand.",
    email: "contact@brandspective.in",
    phoneFormatted: "+91 (Dehradun HQ)",
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Company", href: "#company" },
    { label: "Work", href: "#work" },
    { label: "Pages", href: "#pages", hasDropdown: true },
  ],
  partnerLogos: [
    { name: "amazon", label: "Amazon Advertising", subtitle: "Sponsored & DSP" },
    { name: "flipkart", label: "Flipkart Ads", subtitle: "PLA & Brand Boost" },
    { name: "google", label: "Google Ads", subtitle: "Search, Shopping & PMax" },
    { name: "meta", label: "Meta Ads", subtitle: "Instagram & Facebook" },
    { name: "blinkit", label: "Blinkit Ads", subtitle: "Quick Commerce" },
    { name: "zepto", label: "Zepto Ads", subtitle: "Dark Store Network" },
    { name: "shopify", label: "Shopify", subtitle: "Conversion Storefronts" },
  ]
};
