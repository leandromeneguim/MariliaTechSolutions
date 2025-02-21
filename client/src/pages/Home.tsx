import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import AssistantsDemo from "@/components/AssistantsDemo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <AssistantsDemo />
    </main>
  );
}