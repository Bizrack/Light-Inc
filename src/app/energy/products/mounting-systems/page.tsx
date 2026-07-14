import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Mounting Systems"
      title="Structures that keep arrays secure."
      subtitle="Roof, ground, and carport mounting engineered for wind, load, and longevity."
      image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Mounting is structural first. We specify rails, clamps, and foundations that keep panels true through weather and time.",
      ]}
      bullets={["Roof & ground mounts", "Aluminum & steel options", "Corrosion-conscious detailing"]}
    />
  );
}
