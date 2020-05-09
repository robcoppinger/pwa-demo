importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);
workbox.routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  workbox.strategies.cacheFirst()
);
workbox.precaching.precacheAndRoute([{"revision":"c57e27cfe4f9e8cb47c003ea6711032f","url":"css/main.css"},{"revision":"82ab729bc81226757c1e3a44d3f1a81f","url":"index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"index.js"},{"revision":"0491704a1bd2347369d29e9f0b6f3d60","url":"js/app.js"},{"revision":"b329050ccb5bda98f0835a2dc4956b72","url":"workbox-c692813c.js"}]);

// custom adjustments
