import React from 'react';

function downloadCSV(rows = [], filename = 'leads.csv') {
  const csv = rows.map(r => `${r.name || ''},${r.email || ''},${r.at || ''}`).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminPanel({ open, onClose }) {
  const [locked, setLocked] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [tab, setTab] = React.useState('leads');
  const [contentJSON, setContentJSON] = React.useState('');

  React.useEffect(() => {
    if (!open) {
      setLocked(true);
      setPassword('');
      setTab('leads');
    } else {
      const saved = localStorage.getItem('siteContentOverride') || '';
      setContentJSON(saved || '');
    }
  }, [open]);

  function unlock() {
    // simple password check — change to env or stronger in production
    if (password === 'admin') setLocked(false);
    else alert('Incorrect password');
  }

  function saveContent() {
    try {
      JSON.parse(contentJSON);
      localStorage.setItem('siteContentOverride', contentJSON);
      alert('Content saved to localStorage');
    } catch (err) {
      alert('Invalid JSON');
    }
  }

  function clearContent() {
    localStorage.removeItem('siteContentOverride');
    setContentJSON('');
    alert('Overrides cleared');
  }

  const leads = (() => {
    try { return JSON.parse(localStorage.getItem('leads') || '[]'); } catch { return []; }
  })();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center overflow-y-auto bg-black/40 p-4">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Admin Panel</h3>
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="text-sm text-gray-600">Close</button>
          </div>
        </div>

        {locked ? (
          <div className="mt-6 flex items-center gap-3">
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" className="rounded-md border px-3 py-2" />
            <button onClick={unlock} className="rounded-md bg-[#FF6B2B] px-4 py-2 text-white">Unlock</button>
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex gap-3">
              <button onClick={() => setTab('leads')} className={`rounded-md px-3 py-1 ${tab==='leads'?'bg-gray-100':''}`}>Leads</button>
              <button onClick={() => setTab('content')} className={`rounded-md px-3 py-1 ${tab==='content'?'bg-gray-100':''}`}>Content Overrides</button>
            </div>

            {tab === 'leads' && (
              <div className="mt-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm text-gray-600">Total leads: {leads.length}</div>
                  <div className="flex gap-2">
                    <button onClick={() => downloadCSV(leads)} className="rounded-md bg-[#0B72FF] px-3 py-1 text-white">Export CSV</button>
                    <button onClick={() => { localStorage.removeItem('leads'); window.location.reload(); }} className="rounded-md bg-red-500 px-3 py-1 text-white">Clear</button>
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto rounded-md border p-3">
                  {leads.length === 0 ? <div className="text-sm text-gray-500">No leads yet.</div> : (
                    <table className="w-full table-auto text-sm">
                      <thead>
                        <tr className="text-left text-xs text-gray-500"><th>Name</th><th>Email</th><th>Captured At</th></tr>
                      </thead>
                      <tbody>
                        {leads.map((l, i) => (
                          <tr key={i} className="border-t"><td className="py-1">{l.name}</td><td>{l.email}</td><td>{new Date(l.at).toLocaleString()}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}

            {tab === 'content' && (
              <div className="mt-4">
                <div className="mb-2 text-sm text-gray-600">Paste JSON to override `src/data/siteContent.js` values at runtime.</div>
                <textarea value={contentJSON} onChange={e => setContentJSON(e.target.value)} rows={10} className="w-full rounded-md border p-2 text-sm" />
                <div className="mt-2 flex gap-2">
                  <button onClick={saveContent} className="rounded-md bg-[#FF6B2B] px-3 py-1 text-white">Save</button>
                  <button onClick={clearContent} className="rounded-md bg-gray-200 px-3 py-1">Clear</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
