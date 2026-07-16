import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Inverters"
      title="The brain of a reliable power system."
      subtitle="Grid-tie, hybrid, and off-grid inverters engineered for efficiency and resilience."
      image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Choosing the right inverter defines system behaviour. We match topology, surge capacity, and communications to your loads.",
      ]}
      bullets={["Hybrid & off-grid platforms", "Smart monitoring", "Scalable multi-unit designs"]}
    />
  );
}
