self.addEventListener('install', event => {
  event.waitUntil(caches.open('digipack-v3').then(cache => cache.addAll(['/', '/index.html', '/manifest.json'])));
});
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
