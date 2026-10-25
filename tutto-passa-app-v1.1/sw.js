const C = 'tutto-passa-v2';
const A = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'manifest.webmanifest',
  'assets/logo-modern.png',
  'assets/logo-oldschool.png'
];

self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(A))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));