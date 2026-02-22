// Add this at the top of sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Forces the waiting service worker to become the active one
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // Immediately takes control of all open tabs
});
// This is the name of your app's memory storage
const CACHE_NAME = 'system-grade9-v2';

// These are the files the "Battery" will keep charged and ready
const assetsToCache = [
  'index.html',
  'manifest.json',
  'sw.js'
];

// Step 1: Install - This saves the files to the phone's memory the first time
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('System Engine: Files Saved Successfully');
      return cache.addAll(assetsToCache);
    })
  );
});

// Step 2: Activate - Cleans up old versions if you update the code later
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Step 3: Fetch - This makes the app open instantly by using the saved copy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});


