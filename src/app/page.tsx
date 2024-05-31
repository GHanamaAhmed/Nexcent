import Pixelgrade from "./_components/Pixelgrade";
import Community from "./_components/community";
import HeroSection from "./_components/heroSection";
import OurClient from "./_components/ourClient";
import Design from "./_components/design";
import Business from "./_components/business";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <OurClient />
      <Community />
      <Pixelgrade />
      <Business/>
      <Design />
    </main>
  );
}
