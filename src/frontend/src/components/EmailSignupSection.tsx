import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { useMutation } from '@tanstack/react-query';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

export default function EmailSignupSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { actor } = useActor();

  const saveEmailMutation = useMutation({
    mutationFn: async (emailAddress: string) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.saveEmail(emailAddress);
    },
    onSuccess: () => {
      setSuccess(true);
      setEmail('');
      setError('');
    },
    onError: (err) => {
      setError('Failed to save email. Please try again.');
      console.error('Error saving email:', err);
    },
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    saveEmailMutation.mutate(email);
  };

  return (
    <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-12 border border-primary/20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Mail size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to <span className="text-primary">Transform</span> Your Career?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of job seekers who are landing their dream jobs with NextHire AI. Start your free trial today!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={saveEmailMutation.isPending}
              />
              <button
                type="submit"
                disabled={saveEmailMutation.isPending}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold whitespace-nowrap disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saveEmailMutation.isPending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Get Started Free'
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 text-destructive text-sm font-medium">{error}</div>
            )}

            {success && (
              <div className="mt-4 flex items-center justify-center gap-2 text-primary font-medium">
                <CheckCircle size={20} />
                <span>Thanks! We'll be in touch soon.</span>
              </div>
            )}
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
