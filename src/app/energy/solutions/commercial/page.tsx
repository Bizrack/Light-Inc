import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Commercial"
      title="Reliable power for offices, estates, and retail."
      subtitle="Cut diesel spend and keep operations running with solar, hybrid, and managed energy systems."
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Commercial sites need predictable uptime. LiGHT Energy delivers systems engineered for business continuity, tenant comfort, and measurable savings.",
        "From malls and offices to hospitality and healthcare campuses, we design for load profiles that actually match how your site operates.",
      ]}
      bullets={[
        "Rooftop and carport solar",
        "Diesel-hybrid integration",
        "Peak shaving and load management",
        "O&M and remote monitoring",
      ]}
    />
  );
}
