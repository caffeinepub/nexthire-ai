import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '1 Resume',
        'Basic ATS Checker',
        'Standard Templates',
        'PDF Export',
        'Email Support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'For serious job seekers',
      features: [
        'Unlimited Resumes',
        'Advanced ATS Checker',
        'Premium Templates',
        'Job Tracker (50 applications)',
        'AI-Powered Suggestions',
        'Priority Support',
        'Cover Letter Generator',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Unlimited Job Tracking',
        'Team Collaboration',
        'Custom Branding',
        'API Access',
        'Dedicated Account Manager',
        'Custom Integrations',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'border-primary bg-card shadow-xl scale-105 relative'
                  : 'border-border bg-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>

              <button
                onClick={scrollToSignup}
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
