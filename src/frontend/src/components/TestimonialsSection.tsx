import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: '/assets/generated/testimonial-1.dim_200x200.png',
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      quote:
        'NextHire AI completely transformed my resume. I went from getting zero responses to landing 5 interviews in just two weeks. The ATS optimization feature is a game-changer!',
      rating: 5,
    },
    {
      image: '/assets/generated/testimonial-2.dim_200x200.png',
      name: 'Michael Chen',
      role: 'Product Manager at Microsoft',
      quote:
        'The job tracker feature helped me stay organized during my job search. I managed 30+ applications effortlessly and landed my dream role. Highly recommend!',
      rating: 5,
    },
    {
      image: '/assets/generated/testimonial-3.dim_200x200.png',
      name: 'Emily Rodriguez',
      role: 'Marketing Director at Salesforce',
      quote:
        'As someone who struggled with resume writing, NextHire AI was a lifesaver. The AI suggestions were spot-on, and I felt confident submitting my applications.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by <span className="text-primary">Job Seekers</span> Everywhere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their job search with NextHire AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
