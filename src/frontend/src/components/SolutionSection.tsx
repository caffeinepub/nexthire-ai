import { CheckCircle, Target, Sparkles, FileCheck } from 'lucide-react';

export default function SolutionSection() {
  const solutions = [
    {
      icon: FileCheck,
      text: 'ATS-optimized resume generation',
    },
    {
      icon: Target,
      text: 'Smart keyword matching for job roles',
    },
    {
      icon: Sparkles,
      text: 'Achievement-focused bullet rewriting',
    },
    {
      icon: CheckCircle,
      text: 'Clean recruiter-approved templates',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Meet <span className="text-primary">NextHire AI</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex-shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <p className="text-lg text-foreground">{solution.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
