import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Inverters"
      title="The brain of a reliable power system."
      subtitle="Grid-tie, hybrid, and off-grid inverters engineered for efficiency and resilience."
      image="https://images.unsplash.com/photo-1558449028-b53a11dd43cb?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Choosing the right inverter defines system behaviour. We match topology, surge capacity, and communications to your loads.",
      ]}
      bullets={["Hybrid & off-grid platforms", "Smart monitoring", "Scalable multi-unit designs"]}
    />
  );
}
