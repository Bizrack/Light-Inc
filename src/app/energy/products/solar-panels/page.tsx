import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Solar Panels"
      title="High-efficiency modules for every climate."
      subtitle="Bankable PV modules selected for performance, warranty, and local conditions."
      image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "We specify solar panels for yield, durability, and long-term bankability — matched to roof, ground, or carport applications.",
      ]}
      bullets={["Mono PERC & TOPCon options", "Strong warranty packages", "Verified flash-test data"]}
    />
  );
}
