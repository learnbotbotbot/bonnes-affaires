// Service worker de Trouvailles : rend la page installable et lisible hors ligne.
// Réseau d'abord pour les fichiers du site ; les données (Supabase) et les autres domaines ne sont jamais mis en cache.
const CACHE = "trouvailles-v3";
const BASE = ["./", "index.html", "manifest.json", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  // Supprime les anciennes versions du cache
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);
  // Seulement les lectures du site lui-même ; tout le reste passe tel quel
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match("index.html")))
  );
});
