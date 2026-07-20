export const COMPANY = {
  name: "LiGHT Incorporation",
  shortName: "LiGHT",
  tagline: "Beyond Greatness. Building Tomorrow, Today.",
  phone: "+234 905 891 1060",
  phoneTel: "+2349058911060",
  email: "support@lightincorporation.com",
  whatsapp: "https://wa.me/2349058911060",
  address: "Nigeria · Serving Africa & Beyond",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/our-companies", label: "Our Companies" },
  { href: "/contact", label: "Contact Us" },
  { href: "/partner", label: "Be a Partner" },
  { href: "/careers", label: "Careers" },
] as const;

export const SOCIAL_LINKS = [
  { label: "X (Twitter)", href: "https://x.com/LiGHTINCORP", network: "x" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lightincorporation?igsh=bDJudmpncGI3Z3Y3",
    network: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Bxvm8nnCE/",
    network: "facebook",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@lightincorporation",
    network: "threads",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lightincorporation?_r=1&_t=ZS-9822WIXFzBV",
    network: "tiktok",
  },
] as const;

export const INDUSTRIES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Agriculture",
  "Hospitality",
  "Government and Public Sector",
  "Real Estate",
  "Telecommunications",
  "Financial Institutions",
  "Non-Governmental Organizations (NGOs)",
] as const;

export type CompanySlug =
  | "energy"
  | "construction"
  | "farms"
  | "technology"
  | "real-estate"
  | "manufacturing"
  | "logistics"
  | "healthcare"
  | "academy"
  | "financial-services"
  | "oil-gas"
  | "fashion";

export type CompanyDivision = {
  slug: CompanySlug;
  name: string;
  short: string;
  blurb: string;
  image: string;
  services: string[];
  colorAccent: string;
};

export const COMPANIES: CompanyDivision[] = [
  {
    slug: "energy",
    name: "LiGHT ENERGY",
    short: "Energy",
    blurb:
      "Empowering homes, businesses, and industries with reliable renewable energy and power solutions.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#d4af37",
    services: [
      "Solar Photovoltaic (PV) Systems",
      "Battery Energy Storage Systems (BESS)",
      "Hybrid & Off-Grid Power Solutions",
      "Inverter & Backup Power Systems",
      "Energy Audits & Consultancy",
      "Operations & Maintenance",
      "Electrical Engineering Services",
      "EV Charging Infrastructure (Future)",
    ],
  },
  {
    slug: "construction",
    name: "LiGHT CONSTRUCTION",
    short: "Construction",
    blurb:
      "Delivering quality construction and engineering solutions that shape resilient infrastructure and thriving communities.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#c9a227",
    services: [
      "Building Construction",
      "Civil Engineering Works",
      "Project Management",
      "Renovation & Facility Upgrades",
      "Structural Engineering",
      "Infrastructure Development",
    ],
  },
  {
    slug: "farms",
    name: "LiGHT FARMS",
    short: "Farms",
    blurb:
      "Advancing sustainable agriculture through modern farming practices, technology, and efficient food production systems.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#b89b3e",
    services: [
      "Crop Production",
      "Livestock Farming",
      "Smart Agriculture",
      "Agribusiness Consultancy",
      "Agricultural Processing",
      "Food Supply & Distribution",
    ],
  },
  {
    slug: "technology",
    name: "LiGHT TECHNOLOGY",
    short: "Technology",
    blurb:
      "Driving digital transformation through innovative technologies that empower businesses, enhance productivity, and shape the future.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#d4af37",
    services: [
      "Software Development",
      "Artificial Intelligence (AI) Solutions",
      "Cloud Computing & Digital Transformation",
      "Cybersecurity Services",
      "IT Infrastructure & Networking",
      "Business Process Automation",
      "Data Analytics & Business Intelligence",
      "Smart Technologies & IoT Solutions",
    ],
  },
  {
    slug: "real-estate",
    name: "LiGHT REAL ESTATE",
    short: "Real Estate",
    blurb:
      "Creating exceptional residential, commercial, and mixed-use developments that combine quality, innovation, and long-term value.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#c4a035",
    services: [
      "To LET",
      "To LEASE",
      "For SALE",
      "Real Estate Development",
      "Property Sales & Leasing",
      "Property Management",
      "Facility Management",
      "Land Acquisition & Advisory",
      "Smart & Sustainable Housing",
      "Commercial Property Development",
      "Real Estate Investment Solutions",
    ],
  },
  {
    slug: "manufacturing",
    name: "LiGHT MANUFACTURING",
    short: "Manufacturing",
    blurb:
      "Producing high-quality products through modern manufacturing processes, innovation, and operational excellence to support industrial growth.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#b8942f",
    services: [
      "Product Manufacturing",
      "Industrial Fabrication",
      "Equipment Assembly",
      "Production Engineering",
      "Quality Assurance & Control",
      "Packaging Solutions",
      "Supply Chain Manufacturing",
      "Research & Product Development",
    ],
  },
  {
    slug: "logistics",
    name: "LiGHT LOGISTICS",
    short: "Logistics",
    blurb:
      "Delivering reliable logistics and supply chain solutions that connect businesses, improve efficiency, and ensure timely delivery.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#d4af37",
    services: [
      "Freight & Cargo Services",
      "Transportation Management",
      "Warehousing & Distribution",
      "Supply Chain Management",
      "Fleet Management",
      "Last-Mile Delivery",
      "Procurement & Sourcing",
      "Import & Export Logistics",
    ],
  },
  {
    slug: "healthcare",
    name: "LiGHT HEALTHCARE",
    short: "Healthcare",
    blurb:
      "Improving lives through accessible, innovative, and patient-centered healthcare solutions that promote healthier communities.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#c9a227",
    services: [
      "Healthcare Consultancy",
      "Medical Equipment Supply",
      "Diagnostic Services",
      "Occupational Health Services",
      "Hospital Management Solutions",
      "Telemedicine Services",
      "Health Technology Solutions",
      "Preventive Healthcare Programs",
    ],
  },
  {
    slug: "academy",
    name: "LiGHT ACADEMY",
    short: "Academy",
    blurb:
      "Empowering individuals and organizations through quality education, professional development, and practical skills training for lifelong success.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#d4af37",
    services: [
      "Professional Certification Programs",
      "Technical & Vocational Training",
      "Corporate Learning & Development",
      "Leadership & Management Training",
      "Digital Skills & Technology Programs",
      "Entrepreneurship Development",
      "STEM Education",
      "Research & Innovation Programs",
    ],
  },
  {
    slug: "financial-services",
    name: "LiGHT FINANCIAL SERVICES",
    short: "Financial Services",
    blurb:
      "Providing innovative financial solutions that empower individuals and businesses to achieve sustainable growth and long-term financial success.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#b89b3e",
    services: [
      "Financial Advisory",
      "Business Consulting",
      "Investment Solutions",
      "Wealth Management",
      "Insurance Advisory",
      "Digital Payment Solutions",
      "SME Financing Support",
      "Financial Planning & Risk Management",
    ],
  },
  {
    slug: "oil-gas",
    name: "LiGHT OIL & GAS",
    short: "Oil & Gas",
    blurb:
      "Supporting the energy industry with safe, efficient, and innovative solutions across upstream, midstream, and downstream operations.",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#a67c1a",
    services: [
      "Engineering Procurement & Construction (EPC)",
      "Oilfield Support Services",
      "Pipeline Engineering",
      "Equipment Supply & Maintenance",
      "Energy Infrastructure Development",
      "Industrial Automation",
      "HSE Consultancy",
      "Asset Integrity & Maintenance",
    ],
  },
  {
    slug: "fashion",
    name: "LiGHT FASHION",
    short: "Fashion",
    blurb:
      "Inspiring confidence and self-expression through premium fashion, timeless craftsmanship, and innovative lifestyle products.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
    colorAccent: "#d4af37",
    services: [
      "Bespoke Tailoring",
      "Ready-to-Wear Collections",
      "Corporate & Uniform Apparel",
      "Fashion Design & Production",
      "Luxury Accessories",
      "Personal Styling & Image Consulting",
      "Fashion Retail",
      "Brand Merchandise & Promotional Wear",
    ],
  },
];

export const ENERGY_NAV = {
  overview: "/energy",
  solutions: [
    { href: "/energy/solutions/residential", label: "Residential" },
    { href: "/energy/solutions/commercial", label: "Commercial" },
    { href: "/energy/solutions/industrial", label: "Industrial" },
    { href: "/energy/solutions/hybrid-systems", label: "Hybrid Systems" },
    { href: "/energy/solutions/maintenance", label: "Maintenance" },
  ],
  products: [
    { href: "/energy/products/solar-panels", label: "Solar Panels" },
    { href: "/energy/products/inverters", label: "Inverters" },
    { href: "/energy/products/batteries", label: "Batteries" },
    { href: "/energy/products/mounting-systems", label: "Mounting Systems" },
    { href: "/energy/products/solar-accessories", label: "Solar Accessories" },
    { href: "/energy/products/monitoring-systems", label: "Monitoring Systems" },
    { href: "/energy/products/ev-chargers", label: "EV Chargers" },
  ],
  brands: "/energy/brands",
  projects: "/energy/projects",
  quote: "/apply",
} as const;

export const HOME_GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    alt: "Solar installation on rooftop",
    label: "Renewable Energy",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    alt: "Business professionals in a modern office",
    label: "Professional Partnership",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern buildings",
    label: "Infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
    alt: "Agricultural fields",
    label: "Agribusiness",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    alt: "Healthcare facility",
    label: "Healthcare",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    alt: "Education setting",
    label: "Education",
  },
] as const;

export const PROJECTS = [
  {
    title: "Commercial Solar Array",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial Power Plant Support",
    location: "Port Harcourt",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Estate Hybrid System",
    location: "Abuja",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Community Infrastructure",
    location: "Ibadan",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
] as const;
