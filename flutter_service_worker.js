'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b4dbdf4ec92f58f018b71a4fb3a544e6",
"index.html": "2d62f71969ff41694b186979d06c11a2",
"/": "2d62f71969ff41694b186979d06c11a2",
"CNAME": "95a83bbee26e0418c628ccbc6717b55b",
"main.dart.js": "b8e958bc0a1928df0737ea0c98005ad0",
"worker.js": "6722f44361a3b2e864fb2377de5a6f4d",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "91f8eac40527954652eec889dfd9171d",
"icons/Icon-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-512.png": "97d970ecbc890ca482820f110798d571",
"icons/Icon-512.png": "97d970ecbc890ca482820f110798d571",
"scripts/crypto.js": "34e379d46aa525fb34d11edb1f23ada3",
"manifest.json": "0cf28e771cca8ccce3c9351ad0476a47",
".git/ORIG_HEAD": "28e98192a636a3cb08e594567c086c3b",
".git/config": "d7845af1b1e9c5616238707ba08dafa9",
".git/objects/92/807f0b687918f0c7d2ca87940bd31584aae845": "40fee15a2c07b2a45904abf06812b54d",
".git/objects/66/f978d9892482d5d5b79cce3303fde84caa124f": "9e4cc8d709dfecc4297db827840c0f6a",
".git/objects/50/38db11770fcf6ca31d06b4458efe05f6808858": "35c2fd35b277717208801e10e0f9ccee",
".git/objects/50/ad2996d4f99a66cd3199910df0884fdd6586bf": "56393c0bb1be2294d3448da1ce76d04a",
".git/objects/94/25085467b9b11e6db84b3f325706c7565ab1e6": "55f354ab15c36f2d12b84e1f851607ff",
".git/objects/33/a345096d05d0e7b4a0c8e959e6e757c776f42a": "931f77016c99d3337e9b716c3221f667",
".git/objects/05/113bacae3816897d51657bbae3aa9711cccb4f": "8b1370171f059af3605c5ac2a111053e",
".git/objects/be/9204facefa4e5aaf1b567f393b803c738c801e": "f396889067461ff7730682f092be9a88",
".git/objects/d6/d4a9000fd16b71357a0eb1dc3c4cac85c25255": "6f6024541a80c641e1d30c7559f7730f",
".git/objects/d8/d1447754794d8a9d19f25921fc1a7e48836cd4": "205ff59dca595ad0697c08d06dd36fd5",
".git/objects/e5/183c9b4b8aba19dc2fd8c6ba45756addb1d5eb": "654a8c885aa8538e48bd29470cd9cc61",
".git/objects/c7/a16fe5b6bdec105eab4ca6f9b45e9a0261550a": "88cb7e208ddb5d916ccee6cd1f30c870",
".git/objects/ee/6de95ad1da33e29fc594443346e9f4fbe5ca62": "998ecc539ef9ce05ea80c1cf9f9be667",
".git/objects/c9/a527b747122fdd28caa3327704f3d3bc578737": "b280067b62c4314ef2758b3fda2ab47f",
".git/objects/18/335b4016515fe7b1df3f10ed504da9618ff206": "0db8d53159706a75e93d6f3abd08d042",
".git/objects/pack/pack-109072c9c93b9462e524e9c9be32ea2854ea319d.pack": "1998f18734f9be0294afb3f9a5cb9775",
".git/objects/pack/pack-109072c9c93b9462e524e9c9be32ea2854ea319d.idx": "69c60804e246d933a740561ba2f378d5",
".git/objects/2a/e0ad1bd7c4221a43e60bd83357b00a6c3bd40d": "313eb415249a596296d1cc1a115d9ccb",
".git/objects/2a/ccf2f5df8684e5948e193544616e7a4b353f93": "cfa461cc487bdfb8e27325e9d0129fd4",
".git/objects/01/4b72be884f8e5c28506cf29839c14045c5ecbe": "54fd724a079ab5ae589a0b84257fa67b",
".git/objects/6c/fdffad8a6c513892e73cc8912ecaa859a5e351": "10fec158a9085637ba1c8fb37b12bb84",
".git/objects/0f/acaff5554e0f2dd6690cb62c25ee90900f1ad6": "5b7956ce6ed25a280e477886d2902085",
".git/objects/d4/bbe155c37db3d3db624eac4b83969fe50edd32": "29b478acd479fb920ba0a006fd10316e",
".git/objects/d4/2c30d03baa0ea7b6f9c65dc67aee8d72cbafc4": "2394487b30884583ae5a73e325fff1b3",
".git/objects/b8/d70923c89c8d25cfd1c9b5fc1563bb71e8a923": "183d0216dd729625ce5d1372078d918f",
".git/objects/d5/6f4f97189dc1825321f95e0562094d99c47c0b": "87162ebd000e2c71995d186bb5c827e6",
".git/objects/d2/dcdc316f6615d4d5f50de09ac0b7af48d56b5e": "515736a8bedba1a717c4f3bb8196702c",
".git/objects/de/912e72317cc44f8c77e0913f6e7fa3847174b0": "c1d64174e7c25e7a3242938401abdb7a",
".git/objects/ea/bdec94d2cd033078404401a7160a65a4569c06": "762eba6219c76bc9ea1ba11057f2d668",
".git/objects/4f/3e891fd3e783669866f73872cc033a5b239e12": "8ce13ad8b85375de706d49cc61f9f9df",
".git/objects/15/20870a883058a9c2d687dcdeeb378eac42f311": "1cb972480acd220db9c69d31dc3fe4aa",
".git/objects/1d/3f3bae1ef905a5153d13fa3076665132145872": "8b88a039d658e971bdfebc18dbd58137",
".git/objects/49/2f9afcbfefdc65eef4a06eadc47357f7f39fc7": "b45dad0e53895e11da29ff7f54b959c9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a84fd6f49f2ed26af4444f3480f0aaa5",
".git/logs/refs/heads/main": "ffd66cfa151d516381e7c0fc90bcf6c9",
".git/logs/refs/remotes/origin/main": "3fc17cfffd443f438ab78523dc888f64",
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
".git/refs/heads/main": "083ad434efec304a08922253eaebebd2",
".git/refs/remotes/origin/main": "083ad434efec304a08922253eaebebd2",
".git/index": "440771995644d19dbab464556fe380f2",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "75369456ac010f48f82640cce4ae56b3",
"assets/AssetManifest.json": "c6b89482b27833bed3acaa89db1b9e73",
"assets/NOTICES": "1434654f4bfa34fac93b2936aa2f8605",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6463da2ea9fba2feeabd1115e69f77bd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "00e4b6b0dadc4e042f49ce51701e7503",
"assets/fonts/MaterialIcons-Regular.otf": "d08e364defb2ec1cdd3caf010073b643",
"assets/assets/app_icon.jpeg": "9efc381237767030e6ec7961c6bfd33f",
"assets/assets/images/logo_with_text.png": "6bf5448e2102b84116a3adc8af95c258",
"assets/assets/images/add_image.png": "b5e21c7cff1769bf5a36d880574a065c",
"assets/assets/images/android_pwa.png": "5b1a40c874bf4a7ed59706b694423fbc",
"assets/assets/images/ios_pwa.png": "b5fdecb0620af2214fe2571a3ae825aa",
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
"sw.js": "49936dfb5e30eb34d80bf38bd4e2e1c6",
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
