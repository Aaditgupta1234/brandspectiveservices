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
    // Configurable contact details, unpublished until confirmed
    whatsappNumber: "919876543210",
    whatsappMessage: "Hi BrandSpective team, I would like to explore growth advertising and e-commerce scaling for our brand.",
    email: "contact@brandspective.in",
    phoneFormatted: "+91 (Dehradun HQ)",
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Marketplaces", href: "#marketplaces" },
    { label: "Solutions", href: "#solutions", hasDropdown: true },
  ],
  partnerLogos: [
    { name: "amazon", label: "Amazon Advertising", subtitle: "Sponsored & DSP" },
    { name: "flipkart", label: "Flipkart Commerce", subtitle: "PLA & Brand Days" },
    { name: "google", label: "Google Partner", subtitle: "PMax & Search" },
    { name: "meta", label: "Meta Business", subtitle: "Instagram & FB Ads" },
    { name: "blinkit", label: "Blinkit Quick-Ads", subtitle: "10-Min Commerce" },
    { name: "zepto", label: "Zepto Brand Boost", subtitle: "Dark Store Network" },
    { name: "shopify", label: "Shopify Ecosystem", subtitle: "Conversion Stores" },
  ]
};

