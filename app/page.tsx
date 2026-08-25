import { Footer } from '@/components/Footer';
import { SearchableHome } from '@/components/SearchableHome';

export default function HomePage() {
  return (
    <main className="wrap">
      <SearchableHome />
      <Footer />
    </main>
  );
}
