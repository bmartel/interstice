/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "checkbox.stories-72bceda0.js",
    "revision": "c828e38ccb60fafb05368676486fb0d1"
  },
  {
    "url": "checkboxgroup.stories-7dfc9a40.js",
    "revision": "468aa6c18287646fd947d6465ba37eaa"
  },
  {
    "url": "iframe.html",
    "revision": "4229d9dc5a84bd9a9de7a65c06920698"
  },
  {
    "url": "index-cb2823b7.js",
    "revision": "8cf8cd037e662441f1dc38542eb1788f"
  },
  {
    "url": "index.html",
    "revision": "fc29a281b95c188081dee5499c11a46a"
  },
  {
    "url": "index.stories-c7b18b5f.js",
    "revision": "b71bd2e067b59f76134bbd3d2c609aef"
  },
  {
    "url": "inline-entry.0-20f20fe3.js",
    "revision": "af27f4c5a6545be305a181c650d1fe85"
  },
  {
    "url": "legacy/checkbox.stories-0972f673.js",
    "revision": "f3a04e19be6fcfe55a2671a5a4b90f57"
  },
  {
    "url": "legacy/checkboxgroup.stories-dd86394c.js",
    "revision": "1b000a9df3fcc8f36a59f9ddd2a8597e"
  },
  {
    "url": "legacy/index-ca351be3.js",
    "revision": "9601ac79e57e8b79425d3d6b296556c2"
  },
  {
    "url": "legacy/index.stories-aaf4c7bf.js",
    "revision": "efd6307bbf7a5ce37fb414549388a1e1"
  },
  {
    "url": "legacy/inline-entry.0-888f47ac.js",
    "revision": "edce1400c9d155ad996b3209e79c910f"
  },
  {
    "url": "legacy/preview-74d3ad43.js",
    "revision": "e4df33787d98d8459376e289a3da1c71"
  },
  {
    "url": "legacy/radio.stories-7fe384c0.js",
    "revision": "b8980e7deee8ad20c8ba66d794f9fc16"
  },
  {
    "url": "legacy/radiogroup.stories-317c6309.js",
    "revision": "f6b7b5004a09edfc3d4f40119b04b74e"
  },
  {
    "url": "legacy/range.stories-be5c4f48.js",
    "revision": "1ea6f1e70217412bbe9a462216e33d77"
  },
  {
    "url": "legacy/textarea.stories-049e50f2.js",
    "revision": "425ae12feeec82ce10af03e320a2ff59"
  },
  {
    "url": "legacy/textfield.stories-9573df9c.js",
    "revision": "f000687585d75dc4ece7a2ab2e4ab1a5"
  },
  {
    "url": "polyfills/core-js.577a5602a7262d6256830802d4aaab43.js",
    "revision": "ccf205728fe514f8276191669b5ea48d"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",
    "revision": "ed55766050be285197b8f511eacedb62"
  },
  {
    "url": "polyfills/fetch.191258a74d74243758f52065f3d0962a.js",
    "revision": "fcdc4efda1fe1b52f814e36273ff745d"
  },
  {
    "url": "polyfills/regenerator-runtime.92d44da139046113cb3739b173605787.js",
    "revision": "3aa324bcf8f59cd0eebf46796948aafa"
  },
  {
    "url": "polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js",
    "revision": "683aabfb9b006607885b83e45e9a1768"
  },
  {
    "url": "polyfills/webcomponents.d406f4685fdfb412c61f23b3ae18f2dc.js",
    "revision": "b1db7cb76380495a55ff4f65a9648f0e"
  },
  {
    "url": "preview-d0885cd0.js",
    "revision": "a45b225660453910c68208fcd711ffa2"
  },
  {
    "url": "radio.stories-511776a1.js",
    "revision": "b1273e5fe19fa96c5ae5ba722d823398"
  },
  {
    "url": "radiogroup.stories-3c8608b0.js",
    "revision": "7eb21b72586adc0e40e022e31e38090c"
  },
  {
    "url": "range.stories-562719b7.js",
    "revision": "019b0cad38268fd3eeab9038da3e60d5"
  },
  {
    "url": "textarea.stories-f43be81d.js",
    "revision": "ae8238108aeaf6edba1f346f97f71313"
  },
  {
    "url": "textfield.stories-bb5c6114.js",
    "revision": "94ed25d3574879525d4c6c0a113b9a9d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
