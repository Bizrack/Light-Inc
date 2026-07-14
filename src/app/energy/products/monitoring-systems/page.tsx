import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Monitoring Systems"
      title="See production, storage, and savings — live."
      subtitle="Portals and sensors that keep performance visible after commissioning."
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Monitoring turns installs into relationships. Track generation, battery state, and alarms so issues are caught early.",
      ]}
      bullets={["Site dashboards", "Alerting & reporting", "Installer & owner views"]}
    />
  );
}
