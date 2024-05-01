import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RevengerSection from "@/components/home/RevengerSection";
import ChairSection from "@/components/home/ChairSection";
import PopularSection from "@/components/home/PopularSection";
import NewArrival from "@/components/home/NewArrival";
import ShowCase from "@/components/home/ShowCase";
import FeaturedSection from "@/components/home/FeaturedSection";
import CustomerDeals from "@/components/home/CustomerDeals";
import HeroSection from "@/components/home/HeroSection";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CustomerDeals />
      <FeaturedSection />
      <ShowCase />
      <NewArrival />
      <PopularSection />
      <ChairSection />
      <RevengerSection />
      <Footer />
    </main>
  );
}
