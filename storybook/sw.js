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
    "url": "checkbox.stories-c60d9fed.js",
    "revision": "982e6768cdb0e9ea903919f1f2b8de33"
  },
  {
    "url": "checkboxgroup.stories-40e1bc4c.js",
    "revision": "3dde7a9230dd3ec7d0c17370ec98f237"
  },
  {
    "url": "iframe.html",
    "revision": "fe9a0c31221ad744287d000755c6b68a"
  },
  {
    "url": "index-e7146c3c.js",
    "revision": "469a080d6b2a8ac7b4e48f47a01703dc"
  },
  {
    "url": "index.html",
    "revision": "fc29a281b95c188081dee5499c11a46a"
  },
  {
    "url": "index.stories-4ff6171a.js",
    "revision": "656e5a05e11accd3d07cc09506f1c7dc"
  },
  {
    "url": "inline-entry.0-de14f68c.js",
    "revision": "98da9e0a2ec0710c3067b5b4cd09cc49"
  },
  {
    "url": "legacy/checkbox.stories-1a59eea4.js",
    "revision": "9ed43e5dcbd720bd542fc8f570903204"
  },
  {
    "url": "legacy/checkboxgroup.stories-14122fa6.js",
    "revision": "210516834f4d525eae03e3a5ea8099ab"
  },
  {
    "url": "legacy/index-81701fa6.js",
    "revision": "0582a586bf04e72241af5e8c3d36386f"
  },
  {
    "url": "legacy/index.stories-0cda4bbb.js",
    "revision": "257cd6b9be47a53fb93a3fa6922ba391"
  },
  {
    "url": "legacy/inline-entry.0-e59ddd85.js",
    "revision": "52220dbf093a5bf6352593002bc8aa01"
  },
  {
    "url": "legacy/preview-74d3ad43.js",
    "revision": "e4df33787d98d8459376e289a3da1c71"
  },
  {
    "url": "legacy/radio.stories-91f08edc.js",
    "revision": "93ee8aac3eeb128c517d9f96ae995637"
  },
  {
    "url": "legacy/radiogroup.stories-99afb552.js",
    "revision": "d7d93e2c4c98369b6e4ff98287d05562"
  },
  {
    "url": "legacy/range.stories-8acc5075.js",
    "revision": "c029ddbf3198988db39cdd3da493e2cd"
  },
  {
    "url": "legacy/textarea.stories-1d30c1fd.js",
    "revision": "1d365a8191bc0028a3f85015e948ddda"
  },
  {
    "url": "legacy/textfield.stories-345e0fdd.js",
    "revision": "aaac22ec9cad5dddc092f18e22a247bd"
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
    "url": "radio.stories-8da38a53.js",
    "revision": "8b3300cca06c2b4a8543bd6a4ff65958"
  },
  {
    "url": "radiogroup.stories-309e49e0.js",
    "revision": "f8b0a910a5b6812a61fa9dafdf41e396"
  },
  {
    "url": "range.stories-431abad4.js",
    "revision": "0e7f983fe4220bd4a52682a5f2906e6a"
  },
  {
    "url": "textarea.stories-dc110cc8.js",
    "revision": "bebb4b02e8ab353b53475684df1bd8d9"
  },
  {
    "url": "textfield.stories-691ec8ac.js",
    "revision": "003f2fa15441f5a1c3a41a75a03f3dac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
