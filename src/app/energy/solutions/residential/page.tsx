import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Residential"
      title="Backup power for the way you live."
      subtitle="From starter homes to large residences — sized to your appliances, with monitoring and dependable support."
      image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "LiGHT Energy designs residential solar and hybrid systems around real household demand — not inflated templates.",
        "Whether you need silent night-time backup or daytime bill reduction, we specify panels, inverters, and storage that fit your space and budget.",
      ]}
      bullets={[
        "Rooftop solar PV",
        "Hybrid inverter + battery systems",
        "App monitoring and aftercare",
        "Honest sizing from appliance loads",
      ]}
    />
  );
}
