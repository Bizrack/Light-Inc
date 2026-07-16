import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Batteries"
      title="Storage that holds when the grid does not."
      subtitle="Lithium and advanced BESS options for homes, businesses, and industry."
      image="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Battery energy storage keeps critical loads online and unlocks solar after sunset. We size capacity to useful autonomy — not vanity numbers.",
      ]}
      bullets={["LiFePO4 chemistry focus", "Modular expansion paths", "BMS-protected installations"]}
    />
  );
}
