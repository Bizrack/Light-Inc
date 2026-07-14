import { ContentPage } from "@/components/energy/ContentPage";

export default function Page() {
  return (
    <ContentPage
      eyebrow="Hybrid Systems"
      title="Solar, storage, and generator — working as one."
      subtitle="Intelligent hybrid architectures that prioritize clean power and keep critical loads alive."
      image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80"
      paragraphs={[
        "Hybrid systems combine PV, batteries, and grid/generator sources so you run cleaner and spend smarter.",
        "We design control strategies that cut diesel hours while protecting sensitive equipment and critical circuits.",
      ]}
      bullets={[
        "PV + BESS + genset control",
        "Critical load prioritization",
        "Seamless changeover design",
        "Remote performance oversight",
      ]}
    />
  );
}
