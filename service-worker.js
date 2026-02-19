const CACHE_NAME = "lotto-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json"
];

self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("fetch", e => {});

