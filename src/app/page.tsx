import { HomeHeader } from '@/patterns/HomeHeader';
import { Footer } from '@/patterns/Footer';
import { Home as HomeScreen } from '@/screens/Home';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeScreen />
      <Footer />
    </>
  );
}
