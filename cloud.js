import { cfg } from './firebase-config.js';
let fam = localStorage.getItem('fam') || 'shanum';
export const getFam = () => fam;
export const setFam = c => { localStorage.setItem('fam', c.trim() || 'shanum'); location.reload(); };
export const online = !!(cfg && cfg.apiKey && cfg.databaseURL);
let db, fs;
if (online) {
  const A = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
  fs = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js');
  db = fs.getDatabase(A.initializeApp(cfg));
}
const key = c => `l_${fam}_${c}`;
export async function add(col, data) {
  data.t = Date.now();
  if (online) return fs.push(fs.ref(db, `fam/${fam}/${col}`), data);
  try {
    const a = JSON.parse(localStorage.getItem(key(col)) || '[]');
    a.push({ id: data.t, ...data });
    localStorage.setItem(key(col), JSON.stringify(a.slice(-12)));
    dispatchEvent(new Event('storage'));
  } catch (e) { alert('Penyimpanan lokal penuh'); }
}
export function sub(col, cb) {
  if (online) return fs.onValue(fs.query(fs.ref(db, `fam/${fam}/${col}`), fs.limitToLast(col == 'media' ? 6 : 30)),
    s => { const a = []; s.forEach(c => { a.push({ id: c.key, ...c.val() }); }); cb(a.reverse()); });
  const f = () => cb(JSON.parse(localStorage.getItem(key(col)) || '[]').reverse());
  f(); addEventListener('storage', f);
}
