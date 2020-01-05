const cacheName = 'dev-tweets-v1';
const cacheFiles = [
    '/',
    'index.html',
    'assets/css/style.css',
    'android-chrome-144x144.png',
    'apple-touch-icon.png',
    'favicon-32x32.png',
    'favicon.ico',
    'manifest.json'
];


self.addEventListener('install', event => {

    // install and activate new service worker immediately
    self.skipWaiting();

    // cache static files on install 
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(cacheFiles);
            })
    );
    console.log('Service  Worker installing...');
});
