import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RevengerSection from "@/components/home/RevengerSection";
import ChairSection from "@/components/home/ChairSection";
import PopularSection from "@/components/home/PopularSection";
import NewArrival from "@/components/home/NewArrival";
export default function Home() {
  return (
    <main>
      <Header />
      <NewArrival />
      <PopularSection />
      <ChairSection />
      <RevengerSection />
      <Footer />
    </main>
  );
}
