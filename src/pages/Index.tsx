import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import LastTournamentSection from "@/components/LastTournamentSection";
import TournamentsSection from "@/components/TournamentsSection";
import TournamentGallery from "@/components/TournamentGallery";
import LeaderboardSection from "@/components/LeaderboardSection";
import MembersSection from "@/components/MembersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TournamentUpdatesSection from "@/components/TournamentUpdatesSection";
import MembershipSection from "@/components/MembershipSection";
import JoinSection from "@/components/JoinSection";
import ClubGallery from "@/components/ClubGallery";
import ShopSection from "@/components/ShopSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <AboutSection />
      <ScheduleSection />
      <LastTournamentSection />
      <TournamentsSection />
      <TournamentGallery />
      <LeaderboardSection />
      <MembersSection />
      <TestimonialsSection />
      <TournamentUpdatesSection />
      <MembershipSection />
      <JoinSection />
      <ClubGallery />
      <ShopSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
};

export default Index;
