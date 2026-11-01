'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setContactPrefill } from '@/lib/contact-prefill';

const PHONE_DISPLAY = '(419) 381-1855';
const PHONE_LINK = 'tel:+14193811855';

const issues = [
  { id: 'water', label: 'Water leak or flooding', emergency: true },
  { id: 'storm', label: 'Storm or roof damage', emergency: true },
  { id: 'fire', label: 'Fire or smoke damage', emergency: true },
  { id: 'security', label: 'Broken door, window or lock', emergency: true },
  { id: 'repair', label: 'General repairs', emergency: false },
  { id: 'remodel', label: 'Remodel or renovation', emergency: false },
  { id: 'expansion', label: 'Property expansion', emergency: false },
  { id: 'maintenance', label: 'Ongoing maintenance', emergency: false },
] as const;

const timings = ['As soon as possible', 'Within the next month', 'Just planning ahead'];

export default function ServiceRequestHelper() {
  const router = useRouter();
  const [issueId, setIssueId] = useState<string | null>(null);
  const [timing, setTiming] = useState(timings[0]);
  const [details, setDetails] = useState('');

  const issue = issues.find((i) => i.id === issueId);

  const continueToContact = () => {
    if (!issue) return;
    const lines = [
      `Service request: ${issue.label}`,
      issue.emergency ? 'This is urgent.' : `Timing: ${timing}`,
      details.trim() && `Details: ${details.trim()}`,
    ].filter(Boolean);
    setContactPrefill(lines.join('\n'));
    router.push('/Contact');
  };

  return (
    <section id="service-request" className="py-16 bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">How Can We Help?</h2>
        <p className="text-gray-200 text-center mb-10">
          Pick what&apos;s going on with your property and we&apos;ll point you to the fastest way to get it handled.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="What do you need help with?">
          {issues.map((i) => (
            <button
              key={i.id}
              type="button"
              role="radio"
              aria-checked={issueId === i.id}
              onClick={() => setIssueId(i.id)}
              className={`text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                issueId === i.id
                  ? 'border-yellow-300 bg-gray-600 text-white'
                  : 'border-gray-500 bg-gray-800 text-gray-100 hover:border-gray-300'
              }`}
            >
              <span className="font-semibold">{i.label}</span>
              {i.emergency && <span className="ml-2 text-xs uppercase tracking-wide text-yellow-300">Urgent</span>}
            </button>
          ))}
        </div>

        {issue && (
          <div className="mt-8 rounded-lg bg-gray-800 p-6">
            {issue.emergency ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Call us now</h3>
                <p className="text-gray-200 mb-6">
                  Damage like this gets worse the longer it sits. Call and we&apos;ll get someone out to you.
                </p>
                <a
                  href={PHONE_LINK}
                  className="inline-block bg-yellow-300 hover:bg-yellow-200 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <p className="text-gray-300 text-sm mt-6">
                  Can&apos;t call right now?{' '}
                  <button type="button" onClick={continueToContact} className="underline hover:text-white">
                    Send us the details instead
                  </button>
                  .
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-4">{issue.label}</h3>
                <fieldset className="mb-4">
                  <legend className="text-gray-200 mb-2">When do you need it done?</legend>
                  <div className="flex flex-wrap gap-2">
                    {timings.map((t) => (
                      <label
                        key={t}
                        className={`cursor-pointer px-4 py-2 rounded-full border transition-colors ${
                          timing === t ? 'border-yellow-300 bg-gray-600 text-white' : 'border-gray-500 text-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timing"
                          value={t}
                          checked={timing === t}
                          onChange={() => setTiming(t)}
                          className="sr-only"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label htmlFor="request-details" className="block text-gray-200 mb-2">
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="request-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  placeholder="Property address, size of the job, what you've noticed..."
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-300"
                />
                <button
                  type="button"
                  onClick={continueToContact}
                  className="mt-6 bg-gray-950 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                >
                  Continue to Contact Form
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
