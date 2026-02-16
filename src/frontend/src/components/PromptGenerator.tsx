import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMockGeneration } from './useMockGeneration';
import type { GalleryItem } from '../App';

interface PromptGeneratorProps {
  onGenerate: (item: GalleryItem) => void;
}

const PromptGenerator = ({ onGenerate }: PromptGeneratorProps) => {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');
  const { isGenerating, generate } = useMockGeneration();

  const handleGenerate = async () => {
    setError('');

    if (!prompt.trim()) {
      setError('Please enter a description');
      return;
    }

    const newItem = await generate(prompt);
    onGenerate(newItem);
    setPrompt('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isGenerating) {
      handleGenerate();
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/panel-texture.dim_1600x900.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-glow">
            Enter your description here...
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Describe the image you want to create. Be as detailed or as simple as you like—our AI
            will bring your vision to life.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your description here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isGenerating}
              className="w-full h-14 px-6 text-lg bg-card/50 border-border/50 focus:border-crimson focus:ring-crimson/20 rounded-xl backdrop-blur-sm"
            />
            {error && <p className="absolute -bottom-6 left-0 text-sm text-destructive">{error}</p>}
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-crimson-dark to-crimson hover:from-crimson hover:to-crimson-light transition-all duration-300 rounded-xl shadow-glow-crimson"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate'
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromptGenerator;
