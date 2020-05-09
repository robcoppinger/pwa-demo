importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);
workbox.routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  workbox.strategies.cacheFirst()
);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// custom adjustments
