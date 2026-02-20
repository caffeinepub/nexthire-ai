import { XCircle, FileX, Copy, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: XCircle,
      text: '75% of resumes fail ATS screening',
    },
    {
      icon: FileX,
      text: 'Poor formatting reduces credibility',
    },
    {
      icon: Copy,
      text: "Generic resumes don't match job descriptions",
    },
    {
      icon: TrendingDown,
      text: "Students don't highlight measurable achievements",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Why Most Student Resumes Get Rejected
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border"
                >
                  <div className="flex-shrink-0">
                    <Icon size={24} className="text-destructive" />
                  </div>
                  <p className="text-lg text-foreground">{problem.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
