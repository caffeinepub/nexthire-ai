import { useState } from 'react';
import { useCreateLead } from '../hooks/useQueries';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { LeadError } from '../backend';

const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'India',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Ireland',
  'New Zealand',
  'Singapore',
  'Japan',
  'South Korea',
  'Brazil',
  'Mexico',
  'Argentina',
  'South Africa',
  'United Arab Emirates',
  'Other'
];

export default function EarlyAccessForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [targetJobRole, setTargetJobRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);

  const mutation = useCreateLead();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setDuplicateError(false);
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !country) {
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setDuplicateError(false);

    mutation.mutate(
      {
        fullName,
        email,
        country,
        targetJobRole: targetJobRole || '',
      },
      {
        onSuccess: (result) => {
          // Backend returns null for success, LeadError.duplicateEmail for duplicate
          if (result === LeadError.duplicateEmail) {
            // Duplicate email found
            setDuplicateError(true);
            setShowSuccess(false);
          } else if (result === null) {
            // Success - no error
            setFullName('');
            setEmail('');
            setCountry('');
            setTargetJobRole('');
            setEmailError('');
            setDuplicateError(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);
          }
        },
        onError: () => {
          setShowSuccess(false);
          setDuplicateError(false);
        },
      }
    );
  };

  const isFormValid = fullName && email && country && !emailError && validateEmail(email);

  return (
    <section id="early-access-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">
              Join Free Early Access
            </h2>
            <p className="text-lg text-gray-600">
              Be among the first to experience NextHire AI
            </p>
          </div>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium">
                Thank you! Your submission has been received successfully.
              </p>
            </div>
          )}

          {duplicateError && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 font-medium">
                This email is already registered. Please use a different email address.
              </p>
            </div>
          )}

          {mutation.isError && !duplicateError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-gray-900 font-medium mb-2 block">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-900 font-medium mb-2 block">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="your.email@example.com"
                required
                className={`rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                  emailError || duplicateError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                }`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>

            <div>
              <Label htmlFor="country" className="text-gray-900 font-medium mb-2 block">
                Country <span className="text-red-500">*</span>
              </Label>
              <Select value={country} onValueChange={setCountry} required>
                <SelectTrigger className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((countryName) => (
                    <SelectItem key={countryName} value={countryName}>
                      {countryName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="targetJobRole" className="text-gray-900 font-medium mb-2 block">
                Target Job Role
              </Label>
              <Input
                id="targetJobRole"
                type="text"
                value={targetJobRole}
                onChange={(e) => setTargetJobRole(e.target.value)}
                placeholder="e.g., Software Engineer, Marketing Intern"
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              disabled={!isFormValid || mutation.isPending}
              className="w-full py-6 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Join Free Early Access'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
