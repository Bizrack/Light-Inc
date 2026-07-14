export type QuoteApplicant = "individual" | "business";
export type QuotePayment = "outright" | "instalment" | "payg";
export type QuoteDeposit = "20" | "30" | "40" | "50";
export type QuoteTariff = "day" | "extended" | "custom";

export type EnergyPackage = {
  id: string;
  name: string;
  tag: "RESIDENTIAL" | "COMMERCIAL";
  specs: string;
  description: string;
};

export const ENERGY_PACKAGES: EnergyPackage[] = [
  {
    id: "s1",
    name: "L1 Starter",
    tag: "RESIDENTIAL",
    specs: "6 kVA inverter · 16 kWh battery · 6 kWp solar",
    description:
      "1–2 bedroom flats; lights, TV, fridge, fans, a few sockets. No air conditioning.",
  },
  {
    id: "s2",
    name: "L2 Home",
    tag: "RESIDENTIAL",
    specs: "12 kVA inverter · 32 kWh battery · 13 kWp solar",
    description:
      "Typical 3-bedroom home with one air conditioner. Fridge, fans, lights, TVs, kitchen.",
  },
  {
    id: "s3",
    name: "L3 Pro Home",
    tag: "RESIDENTIAL",
    specs: "16 kVA inverter · 48 kWh battery · 20 kWp solar",
    description:
      "4–5 bedroom homes running two air conditioners plus the usual residential load mix.",
  },
  {
    id: "s4",
    name: "L4 Business",
    tag: "COMMERCIAL",
    specs: "30 kVA 3-phase HV inverter · 96 kWh battery · 40 kWp solar",
    description: "Small offices, SMEs, clinics, schools, or large homes with heavy loads.",
  },
  {
    id: "s5",
    name: "L5 Commercial",
    tag: "COMMERCIAL",
    specs: "50 kVA 3-phase HV inverter · 160 kWh battery · 75 kWp solar",
    description: "Medium businesses, factories, hotels, larger schools.",
  },
  {
    id: "s6",
    name: "L6 Industrial",
    tag: "COMMERCIAL",
    specs: "125 kVA 3-phase HV inverter · 256 kWh battery · 185 kWp solar",
    description: "Large industrial facilities, manufacturing plants, estates.",
  },
];
