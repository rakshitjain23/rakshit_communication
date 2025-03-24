import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import SpecialOffers from '@/components/SpecialOffers';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <SpecialOffers />
      <Footer />
    </main>
  );
}
