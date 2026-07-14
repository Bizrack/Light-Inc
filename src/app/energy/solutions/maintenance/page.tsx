import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Maintenance"
      title="We watch systems after the panels go up."
      subtitle="Operations, maintenance, and responsive call-outs that keep performance high for years."
      image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Most installers collect, mount, and disappear. LiGHT Energy stays — with preventive care, monitoring, and fast response when something dips.",
        "Maintenance plans protect your investment and keep warranties and performance guarantees meaningful.",
      ]}
      bullets={[
        "Preventive maintenance schedules",
        "Performance diagnostics",
        "Inverter & battery health checks",
        "Priority call-out support",
      ]}
    />
  );
}
