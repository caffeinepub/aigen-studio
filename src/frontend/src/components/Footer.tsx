import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
  );

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm text-foreground/60 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} AIGen Studio. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with{' '}
              <Heart className="w-4 h-4 text-crimson fill-crimson inline-block" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crimson hover:text-crimson-light transition-colors underline"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
