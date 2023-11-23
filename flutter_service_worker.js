'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b4dbdf4ec92f58f018b71a4fb3a544e6",
"index.html": "836a31129139b030bdd97632e10990c6",
"/": "836a31129139b030bdd97632e10990c6",
"CNAME": "95a83bbee26e0418c628ccbc6717b55b",
"main.dart.js": "8f5b70aa0a64f83a70bcb593bf1c321b",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "91f8eac40527954652eec889dfd9171d",
"icons/Icon-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-512.png": "97d970ecbc890ca482820f110798d571",
"icons/Icon-512.png": "97d970ecbc890ca482820f110798d571",
"manifest.json": "0cf28e771cca8ccce3c9351ad0476a47",
".git/ORIG_HEAD": "58b4c256b6e3d4b4104213b485bf7f38",
".git/config": "d7845af1b1e9c5616238707ba08dafa9",
".git/objects/66/9f280a3d8f6d22575ded4d9ad193338e676b7d": "df7916d7b0ff1cae565a9a439162cd90",
".git/objects/6a/6ad658540c7e26e525b73eaf25b566ee91552c": "dbde91258ead21022db357ff30ecb30c",
".git/objects/ab/e3c87288d6c6c7e4b09d79268ba424518474e7": "4adc27ad24d436ec104fbedb297ab88b",
".git/objects/f3/7f43f09ce25dedb0f93d39ffdd5de78b448252": "41ab90247b0c7513ee776dcaf9f73033",
".git/objects/fb/c4b3794d9b52deabbfbed9fecec6a8e63d68fa": "3da66a9eba3daba37b42b1f31685a4db",
".git/objects/pack/pack-7e2eacbc16bfbb2a146a77181b1eebc355ef7d8f.idx": "65ca677dac35a0a7465fbc4bc761e39e",
".git/objects/pack/pack-7e2eacbc16bfbb2a146a77181b1eebc355ef7d8f.pack": "965ac16e09de351312565291a3b3e1ca",
".git/objects/17/336250227fd38ba8b36f8a8c69ae7ec66fe296": "6a3e046588bca5d156e509b0285ebf3a",
".git/objects/81/b5a0be25226eac8605fe03561481541246ce4b": "bce22a1ea208941ac1114b73674b4212",
".git/objects/86/763715139b846e7f1f44f04961d3160fffae3b": "7caab4837d34cdbaa1787b624ba6a455",
".git/objects/38/04d6ee8a258d3face636607a00a5584da4b01e": "7e38529eca007abaff0328e485e8d0c3",
".git/objects/99/2d9b0a626943fff847ed96763ef2bedbe1311f": "dad4c5bb7d81e2bfd520b76d47e399a1",
".git/objects/b1/ab3cbfb39147a8c76d2cd994d07d102e3bed78": "6b2d193ed8c0e7bfcdfc1a249ec4987c",
".git/objects/b6/0c68f2f5cbe639a8ceba6db621c77e62ccb836": "88dbdffb45f57f06c4bc4383470751eb",
".git/objects/cc/ca6140db9a70a291b872baefa6d1c939fa2c19": "d9765d0f33d150c62a19d5fec2b82f42",
".git/objects/f0/1e7e9051fa56e9685828ce321eacc3bda5b8a3": "e9bc5ccd1fec6449e686f721474f3f30",
".git/objects/f6/190bf6bbe418aabfb307c79793f4da05e23e59": "135e6ca627808092fe9185d854c11a2d",
".git/objects/e9/cee24750947b6c8eccf75fe7ed2423e8a0e40d": "4a43be4cd8a44712dbf7c59cb205f122",
".git/objects/41/6dae7a7d3be08deff36c7ff6f48e44018a16d5": "34fa9ea6a0f2ab501890909dd23a7b3f",
".git/objects/82/774711ad1cd90ec0b2546e782c0588033084a4": "90022dedddf05fffcc608ed38e473159",
".git/objects/47/56927b169f55bcb051fd13ae11c36802cbc4ec": "edbd0d787abd0b989e6255cb53e2b891",
".git/objects/22/d1c17768ffdbdf38a819c24f9b736f1b54dcd5": "42da7a7b8a6b7402dc4118dd786bc143",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "0b8e579aaea052951fe2663263179e94",
".git/logs/refs/heads/main": "ef71755a93bffa26c37db5fd0061e9dc",
".git/logs/refs/remotes/origin/main": "caf6148d591cb1bb0ba2389bdbbad690",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "b29ead2f79339587412f1b376bd6d41b",
".git/refs/remotes/origin/main": "b29ead2f79339587412f1b376bd6d41b",
".git/index": "4e59a7f2fafca201b78be0245ce71734",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "a58b5d3deae121f76a0c9fffa2cc7d3d",
"assets/AssetManifest.json": "21549a03846e1c556375301f9f4d420b",
"assets/NOTICES": "7afa9f9e2bd124751fcf901b5efd48c7",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5bfd8448a2b743cd8e8920568c83491d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "8a1ab8f83ce8a0ec7a8ffcc3552dece3",
"assets/fonts/MaterialIcons-Regular.otf": "d08e364defb2ec1cdd3caf010073b643",
"assets/assets/app_icon.jpeg": "9efc381237767030e6ec7961c6bfd33f",
"assets/assets/images/logo_with_text.png": "6bf5448e2102b84116a3adc8af95c258",
"assets/assets/images/add_image.png": "b5e21c7cff1769bf5a36d880574a065c",
"assets/assets/icons/check_filled.svg": "881070c6c70ce1209ba965b16eb6c53e",
"assets/assets/icons/cross_red.svg": "b40fb2eda0e87371ea7bdfc707e3e906",
"assets/assets/icons/wallet.svg": "2983f7bfd3db4f0f3981c8000b4aaaec",
"assets/assets/icons/money_box.svg": "ae9a720932d5a0dd67472f73e143ca67",
"assets/assets/icons/logout_icon.svg": "ba28682ae566fb64687ef2e3bb91ed90",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/fonts/Gilroy-Light.ttf": "1111f8b003573d984ba8a7179862fb32",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
