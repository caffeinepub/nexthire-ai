export default function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById('early-access-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Build a Resume That Gets Interviews — Not Rejections.
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                AI-powered resume builder designed for students applying to internships and entry-level roles worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Join Early Access — Free
                </button>
                <button
                  onClick={scrollToHowItWorks}
                  className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-lg"
                >
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right Column - Laptop Mockup */}
            <div className="relative">
              <img
                src="/assets/generated/laptop-mockup-resume.dim_1200x800.png"
                alt="Resume preview on laptop"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
