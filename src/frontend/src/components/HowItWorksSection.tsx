import { Upload, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Upload Your Resume',
      description: 'Start by uploading your existing resume or enter your information manually. Our system accepts all major file formats.',
    },
    {
      number: 2,
      icon: Sparkles,
      title: 'AI Analysis',
      description: 'Our AI analyzes your experience, skills, and achievements to identify strengths and areas for improvement.',
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'ATS Optimization',
      description: 'Get instant feedback and suggestions to optimize your resume for Applicant Tracking Systems and recruiters.',
    },
    {
      number: 4,
      icon: TrendingUp,
      title: 'Track Applications',
      description: 'Use our job tracker to manage applications, set reminders, and monitor your job search progress in real-time.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How <span className="text-primary">NextHire AI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your job search and land more interviews
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon size={24} className="text-primary" />
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-8 w-0.5 h-16 bg-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
