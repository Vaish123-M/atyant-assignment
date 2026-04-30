import React from 'react';

export default function LeadCaptureModal({ open, onClose }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setName('');
      setEmail('');
      setSubmitted(false);
    }
  }, [open]);

  function handleSubmit(e) {
    e.preventDefault();
    const lead = { name, email, at: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem('leads') || '[]');
      existing.push(lead);
      localStorage.setItem('leads', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }
    setSubmitted(true);
    setTimeout(() => {
      onClose?.();
    }, 1200);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/45 px-4 py-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-4 sm:p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="ml-auto mb-2 inline-block text-sm text-gray-500 hover:text-gray-700">Close</button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Get personalised guidance</h3>
            <p className="text-xs sm:text-sm text-gray-600">Share a few details and we'll suggest the next steps.</p>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border px-3 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-3 py-2.5 text-sm"
              />
            </div>

            <div className="flex items-center justify-end">
              <button type="submit" className="rounded-full bg-[#FF6B2B] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#ff7a42] transition">Send</button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center">
            <h4 className="text-base sm:text-lg font-semibold">Thanks — we'll reach out soon</h4>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">Meanwhile join our WhatsApp community or book a demo.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noreferrer" className="w-full sm:w-auto rounded-full bg-[#0B72FF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0B72FF]/90 transition text-center">Book a demo</a>
              <a href="https://chat.whatsapp.com/F3qcw7JZRIK5vbPgvUfaOA?mode=gi_t" target="_blank" rel="noreferrer" className="text-sm text-[#FF6B2B]">Join WhatsApp</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
