export interface NavItem {
  label: string;
  href: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  channels: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Marketplace & Commerce' | 'Performance & Brand' | 'Digital Experience';
  tagline: string;
  description: string;
  deliverables: string[];
  benefit: string;
}

export interface ApproachStage {
  step: string;
  title: string;
  timeline: string;
  summary: string;
  points: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  clientPlaceholder: string;
  summary: string;
  highlights: string[];
  scope: string[];
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
  practicalApplication: string;
}

export interface BrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  location: string;
  address: string;
  contact: {
    whatsappNumber: string;
    whatsappMessage: string;
    email: string;
    phoneFormatted: string;
  };
  navigation: NavItem[];
  platforms: PlatformItem[];
  serviceGroups: {
    groupName: 'Marketplace & Commerce' | 'Performance & Brand' | 'Digital Experience';
    leadText: string;
    services: ServiceItem[];
  }[];
  approach: ApproachStage[];
  projects: ProjectItem[];
  principles: PrincipleItem[];
}

export const brandConfig: BrandConfig = {
  name: "BrandSpective Services",
  shortName: "BrandSpective",
  tagline: "Digital Marketing & E-Commerce Growth Agency",
  subTagline: "Performance marketing, marketplace scale, and bespoke digital experiences for ambitious brands.",
  location: "Dehradun, Uttarakhand, India",
  address: "BrandSpective Services HQ, Dehradun, Uttarakhand 248001, India",
  contact: {
    whatsappNumber: "919876543210",
    whatsappMessage: "Hi BrandSpective team, I would like to discuss growth advertising and e-commerce scaling for our brand.",
    email: "contact@brandspective.in",
    phoneFormatted: "+91 (Dehradun HQ)",
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Why Us", href: "#why-us" },
    { label: "About", href: "#about" },
  ],
  platforms: [
    {
      id: "amazon",
      name: "Amazon Advertising",
      badge: "Marketplace",
      description: "Sponsored Products, Brand Storefronts, DSP display, and organic rank dominance.",
      channels: ["Sponsored Ads", "Amazon DSP", "A+ Content", "Listing Optimization"]
    },
    {
      id: "flipkart",
      name: "Flipkart Advertising",
      badge: "Commerce",
      description: "Product Listing Ads (PLA), Brand Days, and Big Billion Days promotional architecture.",
      channels: ["PLA Campaigns", "PCA Display", "Brand Days", "Search Share"]
    },
    {
      id: "google",
      name: "Google Ads",
      badge: "High-Intent",
      description: "Search campaigns, Performance Max (PMax), Shopping feeds, and YouTube conversion media.",
      channels: ["Google Search", "Performance Max", "Shopping", "YouTube Ads"]
    },
    {
      id: "meta",
      name: "Meta Ads",
      badge: "Paid Social",
      description: "Instagram & Facebook conversion funnels, dynamic creative testing, and retargeting systems.",
      channels: ["Instagram Feed & Reels", "Catalog Sales", "Creative Testing", "Advantage+"]
    },
    {
      id: "qcommerce",
      name: "Quick Commerce",
      badge: "10-Min Retail",
      description: "Blinkit, Zepto, and Instamart brand acceleration with inventory-aware ad placement.",
      channels: ["Blinkit Ads", "Zepto Brand Boost", "Instamart Placements", "Dark Store Push"]
    }
  ],
  serviceGroups: [
    {
      groupName: "Marketplace & Commerce",
      leadText: "Channel-specific engineering to capture purchase-ready shoppers where transactions actually happen.",
      services: [
        {
          id: "amazon-ads",
          title: "Amazon Advertising & Management",
          category: "Marketplace & Commerce",
          tagline: "Capture high-intent shoppers across India's largest marketplace.",
          description: "Full-funnel Amazon growth management integrating Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP. We engineer listing conversion rates, safeguard the Buy Box, and eliminate wasted ad spend through granular negative targeting.",
          deliverables: ["Full ad account restructuring", "Organic keyword indexing & listing copy", "A+ content & brand store design", "DSP programmatic targeting"],
          benefit: "Lower ACOS, increased blended sales velocity, and protected brand real-estate."
        },
        {
          id: "flipkart-ads",
          title: "Flipkart Advertising & PLA",
          category: "Marketplace & Commerce",
          tagline: "Drive high-volume discovery across Tier-1, Tier-2, and Tier-3 India.",
          description: "Structured campaigns designed specifically around Flipkart's algorithm and flagship commerce events. From day-to-day Product Listing Ads (PLA) to high-stakes Big Billion Days preparation, we balance visibility with gross margin health.",
          deliverables: ["PLA campaign segmentation", "PCA banner placements", "Festive season event planning", "Catalogue health audits"],
          benefit: "Maximized share of voice during key retail sales with predictable return on ad spend."
        },
        {
          id: "quick-commerce",
          title: "Quick Commerce Acceleration",
          category: "Marketplace & Commerce",
          tagline: "Capture rapid grocery & impulse demand in under 10 minutes.",
          description: "Strategic media planning for Blinkit, Zepto, and Instamart. We coordinate ad spend with dark store inventory levels, ensuring promotional campaigns run only where your SKUs are in stock and ready for immediate delivery.",
          deliverables: ["Platform search promotion", "Category banner activations", "Dark-store stock alignment audits", "Impulse purchase creative formats"],
          benefit: "Immediate consumer discovery in hyper-local, high-frequency buying windows."
        }
      ]
    },
    {
      groupName: "Performance & Brand",
      leadText: "Full-funnel digital demand generation connecting creative brand storytelling with commercial conversion.",
      services: [
        {
          id: "google-ads",
          title: "Google Ads & Performance Max",
          category: "Performance & Brand",
          tagline: "Capture immediate demand when buyers actively search for solutions.",
          description: "Structured Google Search, Shopping, Performance Max, and YouTube video funnels. Every rupee is routed through negative keyword filtering, strict audience exclusions, and first-party conversion tracking to protect margins.",
          deliverables: ["PMax asset group engineering", "High-intent search keyword harvesting", "Google Merchant Center feed optimization", "Server-side conversion tracking"],
          benefit: "Sustainable customer acquisition cost (CAC) with dependable conversion volume."
        },
        {
          id: "meta-ads",
          title: "Meta Advertising (Instagram & Facebook)",
          category: "Performance & Brand",
          tagline: "Turn attention into paying customers with relentless creative testing.",
          description: "Scalable customer acquisition systems on Instagram and Facebook. We build iterative creative testing funnels that test visual hooks, value propositions, and angles to unlock repeatable scale without ad fatigue.",
          deliverables: ["Full funnel prospecting & retargeting", "Dynamic creative testing (DCT)", "Advantage+ catalog campaigns", "Real-time blended ROAS monitoring"],
          benefit: "Predictable customer acquisition at profitable unit economics."
        },
        {
          id: "social-media",
          title: "Social Media Management & Strategy",
          category: "Performance & Brand",
          tagline: "Build a brand community that compounds in commercial value over time.",
          description: "Organic storytelling that positions your brand as an industry leader. From weekly editorial content calendars and short-form video concepts to thoughtful community interaction, we build consistent brand equity.",
          deliverables: ["Editorial calendar & visual guidelines", "Short-form video & reel concepts", "Brand community engagement", "Monthly audience analytics"],
          benefit: "Deepened customer retention and organic brand credibility that supports paid channels."
        },
        {
          id: "influencer-marketing",
          title: "Performance Influencer Marketing",
          category: "Performance & Brand",
          tagline: "Authentic creator endorsements tied directly to trackable sales.",
          description: "Curated influencer campaigns across micro, regional, and macro creators. We manage everything from contract negotiation and creative briefs to performance tracking codes, ensuring creator content produces tangible commercial return.",
          deliverables: ["Targeted creator vetting & matchmaking", "Detailed creative briefs & guidelines", "Discount code & UTM attribution tracking", "Whitelisting for paid ad amplification"],
          benefit: "Authentic social proof and high-converting UGC assets for ad accounts."
        }
      ]
    },
    {
      groupName: "Digital Experience",
      leadText: "Engineered web storefronts designed for speed, brand clarity, and frictionless checkout.",
      services: [
        {
          id: "website-dev",
          title: "E-Commerce Website Development",
          category: "Digital Experience",
          tagline: "Sub-second storefronts engineered for maximum conversion velocity.",
          description: "Custom Shopify stores and modern web applications built for speed, brand distinctiveness, and mobile checkout efficiency. We eliminate checkout friction, optimize Core Web Vitals, and build scalable foundations ready for paid ad traffic.",
          deliverables: ["Custom Shopify theme architecture", "Sub-second mobile speed optimization", "Seamless payment gateway integration (UPI, cards, COD)", "Integrated analytics & tracking pixels"],
          benefit: "Higher on-site conversion rates, lower bounce rates, and increased average order value."
        }
      ]
    }
  ],
  approach: [
    {
      step: "01",
      title: "Understand",
      timeline: "Days 1 – 14",
      summary: "Before spending a single rupee of your budget, we immerse ourselves in your business fundamentals.",
      points: [
        "Audit existing ad accounts, listing quality, and customer review sentiment",
        "Analyze true unit economics, contribution margins, and breakeven ROAS",
        "Map competitive market share across Amazon, Flipkart, and search channels",
        "Establish baseline conversion benchmarks and identify immediate margin leaks"
      ]
    },
    {
      step: "02",
      title: "Strategise",
      timeline: "Days 15 – 30",
      summary: "We design a customized 90-day growth roadmap aligned strictly with your commercial goals.",
      points: [
        "Select primary growth channels based on your product category dynamics",
        "Define ad budget allocation models across prospecting, search, and retention",
        "Design high-converting creative angles, hooks, and messaging hierarchies",
        "Configure clean conversion tracking, server-side events, and pixel attribution"
      ]
    },
    {
      step: "03",
      title: "Execute",
      timeline: "Month 2 Onwards",
      summary: "Disciplined implementation where campaigns are launched, monitored, and refined daily.",
      points: [
        "Deploy structured ad accounts with granular keyword and audience tiers",
        "Publish conversion-optimized product listings and brand storefronts",
        "Launch rapid creative testing cycles to discover scalable ad winning variations",
        "Synchronize ad pacing with actual warehouse and dark store inventory levels"
      ]
    },
    {
      step: "04",
      title: "Measure & Optimise",
      timeline: "Continuous / Weekly",
      summary: "Transparent communication and rigorous data calibration to scale winning vectors.",
      points: [
        "Weekly executive dashboard updates focusing on net revenue and blended ROAS",
        "Aggressive negative keyword harvesting to continually purge ad waste",
        "Scale winning ad creatives while methodically retiring fatigued assets",
        "Quarterly business reviews to align agency output with evolving brand milestones"
      ]
    }
  ],
  projects: [
    {
      id: "project-01",
      title: "Clean Nutrition & D2C Wellness",
      category: "Amazon Ads · Quick Commerce Scale",
      clientPlaceholder: "D2C Health & Wellness Brand",
      summary: "Restructured legacy Amazon ad accounts, expanded Sponsored Brand visibility, and launched dark-store ad synchronization across Blinkit and Zepto.",
      highlights: ["3.4x blended return on ad spend", "58% reduction in non-converting search spend", "Hyper-local availability push in 6 metros"],
      scope: ["Amazon Sponsored Ads", "A+ Content", "Blinkit Quick-Ads", "Negative Keyword Engine"],
      aspectRatio: "landscape"
    },
    {
      id: "project-02",
      title: "Contemporary Minimalist Apparel",
      category: "Meta Ads · Custom Shopify Storefront",
      clientPlaceholder: "Direct-to-Consumer Fashion Label",
      summary: "Engineered high-converting creative testing funnels on Instagram Reels paired with a sub-second custom Shopify theme built for frictionless mobile checkout.",
      highlights: ["42% improvement in mobile checkout completion", "6 distinct creative winning angles scaled", "Sub-800ms initial page load"],
      scope: ["Dynamic Creative Testing", "Shopify Storefront", "Conversion Rate Optimization", "Catalog Ads"],
      aspectRatio: "portrait"
    },
    {
      id: "project-03",
      title: "Heritage Consumer Home Goods",
      category: "Flipkart Advertising · Festive Campaign",
      clientPlaceholder: "Consumer Goods Manufacturer",
      summary: "Structured preparation for the Big Billion Days shopping festival, combining strategic PLA keyword dominance with high-impact product carousel banners.",
      highlights: ["Category top-3 search share during peak festive week", "Inventory sell-through completed 4 days early", "Protected profit margins"],
      scope: ["Flipkart PLA", "Big Billion Days Strategy", "Catalogue Health", "Bid Pacing Automation"],
      aspectRatio: "portrait"
    },
    {
      id: "project-04",
      title: "Artisanal Gourmet Roasters",
      category: "Google Ads · Performance Max · Retention",
      clientPlaceholder: "Specialty Coffee & Beverages",
      summary: "Captured commercial search intent through Google PMax and structured search campaigns, supplemented by an organic social content rhythm.",
      highlights: ["2.9x increase in first-order acquisition volume", "Repeat purchase rate increased by 24%", "Disciplined CAC guardrails"],
      scope: ["Google Search & PMax", "Merchant Center Feed", "Organic Social Strategy", "First-Party Attribution"],
      aspectRatio: "landscape"
    }
  ],
  principles: [
    {
      number: "01",
      title: "Strategy Before Execution",
      description: "We do not touch an ad dashboard until we understand your unit economics, inventory margins, and true break-even points. Growth is an economic discipline, not random creative experiments.",
      practicalApplication: "Every marketing rupee is tied to a specific financial hurdle rate before deployment."
    },
    {
      number: "02",
      title: "Collaborative Transparency",
      description: "You have direct access to the strategists managing your accounts — no junior account managers acting as telephone operators. Unvarnished weekly numbers with zero vanity metrics.",
      practicalApplication: "Weekly executive dashboard reviews and transparent Slack/WhatsApp communication channels."
    },
    {
      number: "03",
      title: "Decisions Informed by Data",
      description: "Creative instinct guides the hypothesis; empirical performance data determines what scales. We ruthlessly cut non-performing campaigns and double down on proven conversion vectors.",
      practicalApplication: "Structured A/B testing protocols and weekly negative keyword/audience purges."
    },
    {
      number: "04",
      title: "Creative Tied to Commercial Goals",
      description: "Our design and copy do not exist just to look pretty in an agency awards portfolio. Every asset is engineered to arrest thumb-stopping attention, communicate clear value, and drive conversion velocity.",
      practicalApplication: "Messaging architectures calibrated to real consumer purchase objections."
    }
  ]
};
