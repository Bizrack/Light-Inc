/** Products for sale under LiGHT Energy — Products Solutions */
export type EnergyProduct = {
  id: string;
  name: string;
  category: "Solar Panels" | "Inverters" | "Batteries" | "Mounting" | "Accessories" | "Monitoring" | "EV Chargers";
  href: string;
  image: string;
  blurb: string;
  specs: string[];
  priceLabel: string;
};

export const ENERGY_PRODUCTS: EnergyProduct[] = [
  {
    id: "panel-550",
    name: "550W Mono Solar Panel",
    category: "Solar Panels",
    href: "/energy/products/solar-panels",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    blurb: "High-efficiency monocrystalline module for rooftop and ground mounts.",
    specs: ["550W", "Tier-1", "25-yr performance warranty"],
    priceLabel: "Request price",
  },
  {
    id: "panel-450",
    name: "450W Residential Panel",
    category: "Solar Panels",
    href: "/energy/products/solar-panels",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    blurb: "Compact high-output panel sized for homes and small commercial roofs.",
    specs: ["450W", "Lightweight", "Easy install rails"],
    priceLabel: "Request price",
  },
  {
    id: "inv-hybrid-5",
    name: "5kW Hybrid Inverter",
    category: "Inverters",
    href: "/energy/products/inverters",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    blurb: "Solar + battery + grid/generator hybrid for reliable home backup.",
    specs: ["5kW", "Hybrid", "App monitoring"],
    priceLabel: "Request price",
  },
  {
    id: "inv-hybrid-10",
    name: "10kW Hybrid Inverter",
    category: "Inverters",
    href: "/energy/products/inverters",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    blurb: "Commercial-grade hybrid platform for larger homes and offices.",
    specs: ["10kW", "Parallel ready", "Fast changeover"],
    priceLabel: "Request price",
  },
  {
    id: "bat-5kwh",
    name: "5kWh LiFePO4 Battery",
    category: "Batteries",
    href: "/energy/products/batteries",
    image:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=900&q=80",
    blurb: "Modular lithium storage for night-time and outage backup.",
    specs: ["5kWh", "LiFePO4", "Expandable"],
    priceLabel: "Request price",
  },
  {
    id: "bat-10kwh",
    name: "10kWh LiFePO4 Battery",
    category: "Batteries",
    href: "/energy/products/batteries",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    blurb: "Higher capacity pack for longer autonomy and critical loads.",
    specs: ["10kWh", "BMS protected", "Rack / wall"],
    priceLabel: "Request price",
  },
  {
    id: "mount-roof",
    name: "Roof Mounting Kit",
    category: "Mounting",
    href: "/energy/products/mounting-systems",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    blurb: "Aluminium rails and clamps engineered for wind and longevity.",
    specs: ["Aluminium", "Roof & ground", "Corrosion resistant"],
    priceLabel: "Request price",
  },
  {
    id: "acc-bos",
    name: "DC Protection & Cable Kit",
    category: "Accessories",
    href: "/energy/products/solar-accessories",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    blurb: "MC4, surge protection, earthing and trunk cabling for clean installs.",
    specs: ["MC4", "SPD", "Certified cable"],
    priceLabel: "Request price",
  },
  {
    id: "mon-portal",
    name: "Site Monitoring System",
    category: "Monitoring",
    href: "/energy/products/monitoring-systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    blurb: "Live production, battery, and alarm portal for owners and engineers.",
    specs: ["Live dashboard", "Alerts", "Remote access"],
    priceLabel: "Request price",
  },
  {
    id: "ev-ac",
    name: "AC EV Charger",
    category: "EV Chargers",
    href: "/energy/products/ev-chargers",
    image:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=900&q=80",
    blurb: "Home and workplace charging designed to work with solar-first loads.",
    specs: ["AC wallbox", "Load manage", "Solar ready"],
    priceLabel: "Request price",
  },
];
