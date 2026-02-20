import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: '/assets/generated/testimonial-1.dim_200x200.png',
      name: 'Priya Sharma',
      role: 'Computer Science Student, India',
      quote:
        'NextHire AI helped me land my first internship at a Fortune 500 company. The ATS optimization made all the difference!',
      rating: 5,
    },
    {
      image: '/assets/generated/testimonial-2.dim_200x200.png',
      name: 'James Wilson',
      role: 'Business Graduate, UK',
      quote:
        'I went from zero responses to three interview invitations in one week. The AI suggestions were incredibly helpful.',
      rating: 5,
    },
    {
      image: '/assets/generated/testimonial-3.dim_200x200.png',
      name: 'Maria Garcia',
      role: 'Engineering Student, USA',
      quote:
        'As an international student, I needed a resume that worked globally. NextHire AI delivered exactly that.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by Students Worldwide
          </h2>
          <p className="text-sm text-muted-foreground">
            Trusted by students across USA, UK, India, Canada, and Australia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
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
