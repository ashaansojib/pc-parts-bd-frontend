import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RevengerSection from "@/components/home/RevengerSection";
import ChairSection from "@/components/home/ChairSection";
export default function Home() {
  return (
    <main>
      <Header />
      <ChairSection />
      <RevengerSection />
      <Footer />
    </main>
  );
}
