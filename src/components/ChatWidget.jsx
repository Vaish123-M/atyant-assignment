import React from 'react';

const canned = [
  { id: 1, from: 'bot', text: 'Hi — how can I help with your career decision today?' },
  { id: 2, from: 'bot', text: 'Tell me your stream and rank (if any) to get a quick suggestion.' },
];

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState(canned);
  const [input, setInput] = React.useState('');

  function send(msg) {
    if (!msg.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), from: 'user', text: msg }]);
    setInput('');
    // simple bot reply
    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: 'bot', text: `Thanks — we got: "${msg}". We'll email a tailored plan.` }]);
    }, 600);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 rounded-2xl bg-white p-3 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-semibold">Atyant Assistant</div>
            <button onClick={() => setOpen(false)} className="text-xs text-gray-500">Close</button>
          </div>
          <div className="max-h-48 space-y-2 overflow-y-auto">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`rounded-lg px-3 py-2 text-sm ${m.from === 'bot' ? 'bg-gray-100 text-gray-900' : 'bg-[#FF6B2B] text-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="mt-2 flex gap-2"
          >
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-md border px-2 py-1 text-sm" />
            <button type="submit" className="rounded-md bg-[#FF6B2B] px-3 py-1 text-sm text-white">Send</button>
          </form>
        </div>
      )}

      <button onClick={() => setOpen((s) => !s)} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B2B] text-white shadow-lg">
        Chat
      </button>
    </div>
  );
}
