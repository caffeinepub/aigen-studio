import { useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import type { GalleryItem } from '../App';

interface GallerySectionProps {
  items: GalleryItem[];
}

const GallerySection = ({ items }: GallerySectionProps) => {
  const [filter, setFilter] = useState('all');

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-glow">Gallery</h2>

          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] bg-card/50 border-border/50 focus:border-crimson focus:ring-crimson/20">
              <SelectValue placeholder="Filter style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              <SelectItem value="dramatic">Dramatic</SelectItem>
              <SelectItem value="cinematic">Cinematic</SelectItem>
              <SelectItem value="abstract">Abstract</SelectItem>
              <SelectItem value="moody">Moody</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm hover:border-crimson/50 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-foreground/90 line-clamp-2">{item.alt}</p>
              </div>

              {/* Focus Ring */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-focus-within:ring-crimson/50 transition-all" />
            </Card>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-16">
            <p className="text-foreground/50 text-lg">No images yet. Generate your first one!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
