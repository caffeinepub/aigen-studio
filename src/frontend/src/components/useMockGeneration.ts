import { useState } from 'react';
import type { GalleryItem } from '../App';

export function useMockGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = async (prompt: string): Promise<GalleryItem> => {
    setIsGenerating(true);

    // Simulate generation time (0.5-1.5s)
    const delay = 500 + Math.random() * 1000;
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Cycle through available gallery images
    const imageIndex = (Math.floor(Math.random() * 6) + 1).toString().padStart(2, '0');
    const newItem: GalleryItem = {
      id: `generated-${Date.now()}`,
      src: `/assets/generated/gallery-${imageIndex}.dim_900x1200.png`,
      alt: `AI-generated image: ${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}`
    };

    setIsGenerating(false);
    return newItem;
  };

  return { isGenerating, generate };
}
