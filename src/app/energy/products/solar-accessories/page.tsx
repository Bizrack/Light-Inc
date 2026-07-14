import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Solar Accessories"
      title="The details that finish a reliable install."
      subtitle="Cabling, protection, connectors, and balance-of-system components."
      image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Great systems fail on poor accessories. We use certified DC/AC protection, connectors, and cabling that protect people and equipment.",
      ]}
      bullets={["MC4 & DC protection", "Earthing & surge devices", "Trunking and trunk cables"]}
    />
  );
}
