import { Clock, TrendingUp, Globe, Briefcase } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      text: 'Save hours of writing time',
    },
    {
      icon: TrendingUp,
      text: 'Increase interview chances',
    },
    {
      icon: Globe,
      text: 'Apply globally with confidence',
    },
    {
      icon: Briefcase,
      text: 'Perfect for internships & graduate roles',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Built for Students Who Want Results
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-lg font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
