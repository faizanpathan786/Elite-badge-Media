// Service Worker for Adil Sayyed PWA
const CACHE_VERSION = 'adil-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json',
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      console.log('[SW] Caching essential assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW] Failed to cache assets:', err);
      });
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_VERSION) {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim(); // Claim all clients
});

// Fetch event - cache-first strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Skip API calls (mailto, wa.me, external links)
  if (request.url.includes('mailto:') || request.url.includes('wa.me')) {
    return;
  }

  // Cache-first strategy for all same-origin requests
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        console.log('[SW] Serving from cache:', request.url);
        return response;
      }

      return fetch(request).then((response) => {
        // Cache successful responses
        if (response && response.status === 200) {
          const clonedResponse = response.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(request, clonedResponse);
          });
        }
        return response;
      }).catch((error) => {
        console.log('[SW] Fetch failed, offline:', error);
        // Return cached response or offline fallback
        return caches.match('/') || new Response('Offline');
      });
    })
  );
});
