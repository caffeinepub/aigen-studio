import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for trying out AI image generation',
      features: [
        '50 image generations per month',
        'Standard quality output',
        'Basic style presets',
        'Email support',
        'Commercial usage rights'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'For creators who need more power',
      features: [
        '500 image generations per month',
        'High quality output',
        'Advanced style presets',
        'Priority support',
        'Commercial usage rights',
        'API access',
        'Custom model training'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'Unlimited power for teams and businesses',
      features: [
        'Unlimited image generations',
        'Ultra quality output',
        'All style presets',
        '24/7 dedicated support',
        'Commercial usage rights',
        'Full API access',
        'Custom model training',
        'Team collaboration tools',
        'White-label options'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-glow">Pricing</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your creative needs. All plans include commercial usage
            rights.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? 'border-crimson/50 bg-card/80 shadow-glow-crimson'
                  : 'border-border/50 bg-card/50 hover:border-crimson/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-crimson to-crimson-dark text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-display font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-foreground/60">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-display font-bold text-glow">{plan.price}</span>
                  <span className="text-foreground/60 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-crimson flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full h-12 font-semibold rounded-xl transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-crimson-dark to-crimson hover:from-crimson hover:to-crimson-light shadow-glow-crimson'
                      : 'bg-card hover:bg-accent border border-border/50 hover:border-crimson/50'
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
