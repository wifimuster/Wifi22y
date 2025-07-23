self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
  // تقدر تضيف ملفات للكاش هنا لو حبيت
  self.skipWaiting(); // لو عايز يتفعل فورًا
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated.');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // حالياً مجرد بيرد بالطلب مباشرة، مفيش كاشينج
  event.respondWith(fetch(event.request));
});
