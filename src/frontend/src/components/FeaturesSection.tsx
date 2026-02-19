export default function FeaturesSection() {
  const features = [
    {
      icon: '/assets/generated/icon-resume-builder.dim_128x128.png',
      title: 'AI Resume Builder',
      description:
        'Our advanced AI analyzes your experience and creates compelling, professional resumes tailored to your target role in seconds.',
    },
    {
      icon: '/assets/generated/icon-ats-checker.dim_128x128.png',
      title: 'ATS Checker',
      description:
        'Ensure your resume passes Applicant Tracking Systems with our intelligent scanner that optimizes keywords and formatting.',
    },
    {
      icon: '/assets/generated/icon-job-tracker.dim_128x128.png',
      title: 'Job Tracker',
      description:
        'Stay organized with our built-in job application tracker. Monitor your progress and never miss a follow-up opportunity.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Land Your Dream Job</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to give you a competitive edge in today's job market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="mb-6 w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
