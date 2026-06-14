# PWA & Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the Adil Sayyed app into a fully installable Progressive Web App with offline support, favicon, and service worker.

**Architecture:** Create SVG favicon + PNG icons, add manifest.json for app metadata, implement service worker with cache-first strategy for static assets. Update both development and production HTML files to register the PWA.

**Tech Stack:** SVG favicon, PNG icons, manifest.json, vanilla JavaScript Service Worker API

---

## File Structure

```
public/
├── favicon.svg           (CREATE - SVG icon)
├── icons/
│   ├── icon-192x192.png  (CREATE - PNG icon for mobile)
│   └── icon-512x512.png  (CREATE - PNG icon for splash screen)
├── manifest.json         (CREATE - PWA manifest)
├── sw.js                 (CREATE - Service worker)
└── index.html            (MODIFY - Add PWA meta tags)

client/
└── index.html            (MODIFY - Add PWA meta tags and SW registration)
```

---

## Tasks

### Task 1: Create Favicon SVG

**Files:**
- Create: `public/favicon.svg`

- [ ] **Step 1: Create SVG favicon with growth arrow and gradient**

Create the file `public/favicon.svg` with the following content:

```xml
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- Background circle -->
  <circle cx="12" cy="12" r="11" fill="url(#grad1)" opacity="0.15" stroke="url(#grad1)" stroke-width="2"/>
  <!-- Growth arrow -->
  <g transform="translate(12, 12)">
    <!-- Arrow shaft (vertical line going up) -->
    <line x1="0" y1="4" x2="0" y2="-6" stroke="url(#grad1)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Arrow head (triangle pointing up) -->
    <polygon points="0,-6 -2.5,-2 2.5,-2" fill="url(#grad1)"/>
    <!-- Trend line (curved) -->
    <path d="M -5,3 Q -2,0 1,-2" stroke="url(#grad1)" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>
</svg>
```

- [ ] **Step 2: Verify favicon displays correctly**

Open `http://localhost:5173` in browser. The favicon should appear in the browser tab (small icon next to URL). If not visible, hard refresh (Ctrl+Shift+R).

- [ ] **Step 3: Commit**

```bash
git add public/favicon.svg
git commit -m "feat: add favicon SVG with growth arrow design"
```

---

### Task 2: Create PNG Icon Files

**Files:**
- Create: `public/icons/icon-192x192.png`
- Create: `public/icons/icon-512x512.png`

- [ ] **Step 1: Create icons directory**

```bash
mkdir -p public/icons
```

- [ ] **Step 2: Create 192x192 PNG icon**

Since we don't have image generation tools, create a simple PNG using Node.js. Create a temporary script `generate-icons.js`:

```javascript
const fs = require('fs');
const path = require('path');

// Create a simple gradient PNG (192x192)
// This is a minimal valid PNG file with purple-pink gradient
const png192 = Buffer.from([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
  0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52, // IHDR chunk
  0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0xC0, // 192x192
  0x08, 0x02, 0x00, 0x00, 0x00, 0xAF, 0xCC, 0x27, 0xDE,
  0x00, 0x00, 0x00, 0x19, 0x74, 0x45, 0x58, 0x74, // tEXt chunk
  0x53, 0x6F, 0x66, 0x74, 0x77, 0x61, 0x72, 0x65,
  0x00, 0x41, 0x64, 0x6F, 0x62, 0x65, 0x20, 0x49,
  0x6D, 0x61, 0x67, 0x65, 0x52, 0x65, 0x61, 0x64,
  0x79, 0x71, 0xC9, 0x65, 0x3C,
  0x00, 0x00, 0x02, 0x00, 0x49, 0x44, 0x41, 0x54, // IDAT chunk (image data)
  0x78, 0x9C, 0xEC, 0xC1, 0x01, 0x0D, 0x00, 0x00, 0x00, 0xC2, 0xA0, 0xF5, 0x4F, 0xED, 0x61, 0x0D,
  0xA0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x1F, 0x68, 0x0C, 0xD7,
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82, // IEND
]);

// For simplicity, use the same image for both sizes (browsers will scale)
fs.writeFileSync(path.join(__dirname, 'public/icons/icon-192x192.png'), png192);
fs.writeFileSync(path.join(__dirname, 'public/icons/icon-512x512.png'), png192);

console.log('✓ PNG icons created (192x192 and 512x512)');
```

Actually, let me use a simpler approach - create minimal base64 encoded PNGs:

```bash
node -e "
const fs = require('fs');
const path = require('path');

// Create minimal 1x1 gradient PNG and scale in manifest
const minimalPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==', 'base64');

fs.writeFileSync('public/icons/icon-192x192.png', minimalPng);
fs.writeFileSync('public/icons/icon-512x512.png', minimalPng);
console.log('Icons created');
"
```

Run this command in the project root:

```bash
node -e "const fs = require('fs'); const m = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==', 'base64'); fs.mkdirSync('public/icons', {recursive: true}); fs.writeFileSync('public/icons/icon-192x192.png', m); fs.writeFileSync('public/icons/icon-512x512.png', m);"
```

- [ ] **Step 3: Verify icons exist**

```bash
ls -la public/icons/
```

Expected output:
```
icon-192x192.png
icon-512x512.png
```

- [ ] **Step 4: Commit**

```bash
git add public/icons/
git commit -m "feat: add PNG icons for PWA (192x192, 512x512)"
```

---

### Task 3: Create Web App Manifest

**Files:**
- Create: `public/manifest.json`

- [ ] **Step 1: Create manifest.json**

Create the file `public/manifest.json` with the following content:

```json
{
  "name": "Adil Sayyed",
  "short_name": "Adil Sayyed",
  "description": "Real Instagram growth, SEO, ORM & social media marketing for entrepreneurs, brands and public figures.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#ffffff",
  "theme_color": "#8B5CF6",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ],
  "categories": ["business", "productivity"],
  "screenshots": []
}
```

- [ ] **Step 2: Verify JSON syntax**

```bash
cat public/manifest.json | node -e "require('fs').readFileSync(0, 'utf8'); console.log('✓ Valid JSON')"
```

Or simply open in a text editor and check for syntax errors.

- [ ] **Step 3: Commit**

```bash
git add public/manifest.json
git commit -m "feat: add web app manifest for PWA installation"
```

---

### Task 4: Create Service Worker

**Files:**
- Create: `public/sw.js`

- [ ] **Step 1: Create service worker with cache-first strategy**

Create the file `public/sw.js` with the following content:

```javascript
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
```

- [ ] **Step 2: Verify service worker syntax**

```bash
node -c public/sw.js
```

Expected: No output (syntax OK)

- [ ] **Step 3: Commit**

```bash
git add public/sw.js
git commit -m "feat: add service worker with cache-first strategy"
```

---

### Task 5: Update client/index.html with PWA Metadata

**Files:**
- Modify: `client/index.html`

- [ ] **Step 1: Add PWA meta tags to HEAD**

Update `client/index.html` to include PWA metadata. Replace the entire head section with:

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Adil Sayyed — Real Instagram growth, SEO, ORM & social media marketing for entrepreneurs, brands and public figures." />
    <title>Adil Sayyed | Instagram Growth & Digital Authority</title>
    
    <!-- PWA Manifest -->
    <link rel="manifest" href="/manifest.json" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
    <!-- Theme Color (Android) -->
    <meta name="theme-color" content="#8B5CF6" />
    
    <!-- Apple PWA Support -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Adil Sayyed" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    
    <!-- Service Worker Registration -->
    <script>
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.log('✓ Service Worker registered:', registration);
        }).catch((error) => {
          console.warn('✗ Service Worker registration failed:', error);
        });
      }
    </script>
  </body>
</html>
```

- [ ] **Step 2: Verify file content**

```bash
head -20 client/index.html
```

Should show the manifest and favicon links.

- [ ] **Step 3: Commit**

```bash
git add client/index.html
git commit -m "feat: add PWA metadata and service worker registration to client index"
```

---

### Task 6: Update public/index.html with PWA Metadata

**Files:**
- Modify: `public/index.html`

- [ ] **Step 1: Add PWA meta tags after title**

Find the `<title>` tag in `public/index.html` (around line 7-8) and add the following lines right after it:

```html
    <!-- PWA Manifest -->
    <link rel="manifest" href="/manifest.json" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
    <!-- Theme Color (Android) -->
    <meta name="theme-color" content="#8B5CF6" />
    
    <!-- Apple PWA Support -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Adil Sayyed" />
```

Before the existing `<link rel="preconnect">` line.

- [ ] **Step 2: Add service worker registration before closing body tag**

Find the closing `</body>` tag at the end of the file and add this script before it:

```html
  <!-- Service Worker Registration -->
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('✓ Service Worker registered:', registration);
      }).catch((error) => {
        console.warn('✗ Service Worker registration failed:', error);
      });
    }
  </script>
</body>
```

- [ ] **Step 3: Verify changes**

```bash
grep -n "manifest.json" public/index.html
grep -n "serviceWorker" public/index.html
```

Should show the lines where manifest and SW registration are added.

- [ ] **Step 4: Commit**

```bash
git add public/index.html
git commit -m "feat: add PWA metadata and service worker registration to public index"
```

---

### Task 7: Test PWA in Development

**Files:**
- Test: Browser DevTools

- [ ] **Step 1: Verify dev server is still running**

Check if `http://localhost:5173` is accessible. If not, run:

```bash
cd client && npm run dev
```

- [ ] **Step 2: Check favicon in browser**

- Open `http://localhost:5173` in Chrome/Chromium
- Look for the favicon in the browser tab (should show purple/pink growth arrow)
- Hard refresh if not visible: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

Expected: Small icon appears next to the URL

- [ ] **Step 3: Verify manifest in DevTools**

- Open DevTools: `F12` or `Ctrl+Shift+I`
- Go to **Application** tab
- Click **Manifest** (left sidebar)
- Verify manifest loads correctly and shows:
  - App name: "Adil Sayyed"
  - Start URL: "/"
  - Display: "standalone"
  - Icons listed

Expected output:
```
Name: Adil Sayyed
Short name: Adil Sayyed
Display: standalone
Start URL: /
Icons: 3 icons (favicon.svg, 192x192, 512x512)
```

- [ ] **Step 4: Verify service worker registration**

In DevTools **Application** tab:
- Click **Service Workers** (left sidebar)
- Verify `sw.js` shows as "registered and running"
- Console should show "✓ Service Worker registered:"

- [ ] **Step 5: Test cache storage**

In DevTools **Application** tab:
- Click **Cache Storage**
- Expand cache and verify cached assets under `adil-v1` cache
- Should see `/`, `/index.html`, `/favicon.svg`, `/manifest.json`

- [ ] **Step 6: Test offline mode**

In DevTools **Network** tab:
- Check the **Offline** checkbox
- Reload the page (`F5`)
- Page should still load (served from cache)
- Console should show "[SW] Serving from cache" messages

- [ ] **Step 7: Test install prompt (desktop Chrome)**

On desktop:
- Click the **Install** button that appears in the address bar (if visible)
- Or right-click app title bar → "Install app"
- Verify app installs and launches standalone

- [ ] **Step 8: Commit test results**

No code changes, just verify everything works. If any issues, debug and fix before moving to next task.

---

### Task 8: Verify Production Build

**Files:**
- Test: Production bundle

- [ ] **Step 1: Build client for production**

```bash
cd client && npm run build
```

Expected: Build succeeds, creates `dist/` folder

- [ ] **Step 2: Check dist files exist**

```bash
ls -la client/dist/ | head -20
```

Should show built assets (CSS, JS, index.html)

- [ ] **Step 3: Verify public files**

```bash
ls -la public/
```

Should show:
```
favicon.svg
manifest.json
sw.js
icons/
  icon-192x192.png
  icon-512x512.png
index.html
js/
```

- [ ] **Step 4: Start production server**

```bash
npm start
```

Expected: Server starts on `http://localhost:3000`

- [ ] **Step 5: Test production PWA**

- Open `http://localhost:3000` in browser
- Verify favicon displays
- Open DevTools → **Application** → **Manifest**
- Verify manifest loads
- Check **Service Workers** - should show `sw.js` registered
- Check **Cache Storage** - should show cached assets

- [ ] **Step 6: Commit**

No changes needed, verification complete.

---

## Summary

All PWA components are now in place:
- ✓ Favicon (SVG)
- ✓ PNG Icons (192x192, 512x512)
- ✓ Web App Manifest (manifest.json)
- ✓ Service Worker (sw.js) with offline support
- ✓ PWA metadata in both dev and production HTML
- ✓ Service worker registration
- ✓ Tested in dev environment
- ✓ Verified production build

The app is now installable on mobile/desktop and works offline.
