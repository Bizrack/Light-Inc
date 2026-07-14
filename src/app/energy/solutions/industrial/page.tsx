import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Industrial"
      title="Industrial power infrastructure that scales."
      subtitle="Solar, hybrid, and electrical engineering for factories, warehouses, and process plants."
      image="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Industrial customers need systems that protect production and reduce energy cost without compromising safety.",
        "LiGHT Energy brings EPC discipline, power engineering, and long-term maintenance to industrial sites.",
      ]}
      bullets={[
        "Large-scale PV plants",
        "HV/MV integration support",
        "Process continuity planning",
        "Asset integrity & maintenance",
      ]}
    />
  );
}
