import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="EV Chargers"
      title="Ready for electric mobility."
      subtitle="Charging infrastructure for homes, workplaces, and fleets — with solar-ready design."
      image="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "EV charging is part of the energy future we are building. LiGHT Energy designs chargers that fit your electrical capacity and solar strategy.",
      ]}
      bullets={["AC workplace & home chargers", "Load management options", "Solar-first charging strategies"]}
    />
  );
}
