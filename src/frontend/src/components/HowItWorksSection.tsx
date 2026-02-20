import { FileInput, Sparkles, Download } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: FileInput,
      title: 'Enter your education, skills, and experience',
    },
    {
      number: 2,
      icon: Sparkles,
      title: 'AI optimizes and structures your resume',
    },
    {
      number: 3,
      icon: Download,
      title: 'Download and apply confidently worldwide',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create your perfect resume
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <p className="text-lg font-medium leading-relaxed">{step.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
