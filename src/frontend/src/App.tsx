import { useState } from 'react';
import TopNav from './components/TopNav';
import HeroSection from './components/HeroSection';
import PromptGenerator from './components/PromptGenerator';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
}

function App() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: '1',
      src: '/assets/generated/gallery-01.dim_900x1200.png',
      alt: 'Cinematic AI-generated abstract landscape with dramatic lighting'
    },
    {
      id: '2',
      src: '/assets/generated/gallery-02.dim_900x1200.png',
      alt: 'Moody futuristic scene with warm highlights and deep shadows'
    },
    {
      id: '3',
      src: '/assets/generated/gallery-03.dim_900x1200.png',
      alt: 'Abstract AI art with crimson glow and dark atmosphere'
    },
    {
      id: '4',
      src: '/assets/generated/gallery-04.dim_900x1200.png',
      alt: 'Dramatic cinematic composition with low-key lighting'
    },
    {
      id: '5',
      src: '/assets/generated/gallery-05.dim_900x1200.png',
      alt: 'Futuristic abstract scene with elegant color grading'
    },
    {
      id: '6',
      src: '/assets/generated/gallery-06.dim_900x1200.png',
      alt: 'AI-themed landscape with cinematic depth and atmosphere'
    }
  ]);

  const handleNewGeneration = (newItem: GalleryItem) => {
    setGalleryItems((prev) => [newItem, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main>
        <HeroSection />
        <PromptGenerator onGenerate={handleNewGeneration} />
        <GallerySection items={galleryItems} />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
