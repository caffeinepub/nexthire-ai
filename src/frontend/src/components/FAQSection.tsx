import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the AI resume builder work?',
      answer:
        'Our AI analyzes your work experience, skills, and achievements to create a professionally formatted resume. It uses natural language processing to highlight your strengths and tailor content to your target role, ensuring your resume stands out to both ATS systems and human recruiters.',
    },
    {
      question: 'What is ATS optimization and why is it important?',
      answer:
        'ATS (Applicant Tracking System) optimization ensures your resume can be properly read and ranked by the software that 90% of companies use to screen applications. Our tool analyzes your resume for proper formatting, relevant keywords, and structure to maximize your chances of passing the initial screening.',
    },
    {
      question: 'Can I try NextHire AI for free?',
      answer:
        'Yes! We offer a free plan that includes 1 resume, basic ATS checking, and standard templates. You can upgrade to Pro at any time for unlimited resumes, advanced features, and priority support. Pro plans also include a 14-day money-back guarantee.',
    },
    {
      question: 'How secure is my personal information?',
      answer:
        'We take data security seriously. All your information is encrypted in transit and at rest. We never share your personal data with third parties, and you maintain full control over your information. You can delete your account and all associated data at any time.',
    },
    {
      question: 'Can I export my resume to different formats?',
      answer:
        'Absolutely! All plans include PDF export. Pro and Enterprise plans also support Word (.docx) format and allow you to customize the styling and layout to match your preferences or specific job requirements.',
    },
    {
      question: 'What makes NextHire AI different from other resume builders?',
      answer:
        'NextHire AI combines advanced AI technology with ATS optimization and job tracking in one platform. Unlike basic resume builders, we provide intelligent suggestions, real-time ATS scoring, and help you manage your entire job search process from start to finish.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about NextHire AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
