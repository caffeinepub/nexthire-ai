import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
            <Sparkles size={16} />
            <span className="text-sm font-medium">AI-Powered Resume Builder</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Job Search with{' '}
            <span className="text-primary">AI-Powered Resumes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Create ATS-optimized resumes in minutes, track your applications, and land your dream job faster with NextHire AI
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToSignup}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-lg"
            >
              See How It Works
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm">Resumes Created</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm">ATS Pass Rate</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
