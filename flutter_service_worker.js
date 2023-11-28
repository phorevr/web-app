'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b4dbdf4ec92f58f018b71a4fb3a544e6",
"index.html": "a31512a49f337af4dd6d36f5f41cf5a7",
"/": "a31512a49f337af4dd6d36f5f41cf5a7",
"CNAME": "95a83bbee26e0418c628ccbc6717b55b",
"main.dart.js": "db7b325c320735e10f87bb6fb7be6036",
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
".git/objects/51/fb4d6103f9db506f6a89d4301f1f3cec912454": "c7959a8d7832e7b1ede0322088db36cb",
".git/objects/51/732e70bc68eeea5fa1bcb141c59f9395a6625b": "9581b462007b24c79b232c0021f13f63",
".git/objects/67/0f6383c685f1b3acd7be21336d09a719fcbad2": "e50bd0e9983de655e8a4d57657af4bfa",
".git/objects/5a/207c388c90f3d341bf55b63d027793cdf70fb4": "e201f64666ffb51fe08e2cb14ac85325",
".git/objects/33/95bfefa58966300759390c8210a1ffeccc73ae": "bfb3c08cfba9e02aa6c40e393f1f482c",
".git/objects/bd/3a8c133d3419255445c461f25920d0e3c43f9f": "d8d8b5c4da65e3637bad6e2ac2ac470d",
".git/objects/ab/e3c87288d6c6c7e4b09d79268ba424518474e7": "4adc27ad24d436ec104fbedb297ab88b",
".git/objects/e2/557f2e52ae9d71958d2e7b7b7bb5a960bf4c6e": "9955ab0a07d4d3afd595646aaed8d616",
".git/objects/f3/7f43f09ce25dedb0f93d39ffdd5de78b448252": "41ab90247b0c7513ee776dcaf9f73033",
".git/objects/c7/739eb670cb8ca19c595574328d34a389bfb109": "5e783207d29a34663ad9af8bafef7e0c",
".git/objects/c0/19a69d3ef82f1478fcfa253a5b6522a16b7da8": "0cccd5ab385b8f6a723ccbc467349f8e",
".git/objects/fb/c4b3794d9b52deabbfbed9fecec6a8e63d68fa": "3da66a9eba3daba37b42b1f31685a4db",
".git/objects/fb/3e6078b3d77da9abfc8727a3904e3fabf4de56": "2243cb12fea5eab69596f278cb1dab08",
".git/objects/4b/a128f720b34fadaf0cfd3532cba9448ec6971d": "d4ac6ea565e16c5b0d57f0959cb97005",
".git/objects/4b/c3aae7af92184e30394b298055a96827b25523": "de4e5b210f39b11f0f63d097a722c040",
".git/objects/pack/pack-7e2eacbc16bfbb2a146a77181b1eebc355ef7d8f.idx": "65ca677dac35a0a7465fbc4bc761e39e",
".git/objects/pack/pack-7e2eacbc16bfbb2a146a77181b1eebc355ef7d8f.pack": "965ac16e09de351312565291a3b3e1ca",
".git/objects/11/1c7ebdafc3a94026fd430d47bfc1b97af981c5": "eff030fc43a977921a56cf8f9cbb438c",
".git/objects/45/32af6f0266ac236608a9aeceb5325aeb4c350f": "ead346569766c8c3f8eabe54798449cd",
".git/objects/45/202b536e8c40a8ab17b6623b7462900eeb0d68": "2fcc5f12553bc6d43be943bb92679970",
".git/objects/1f/c803fca6994a3bfad42c65e622233bbb612caa": "877f0ca309f5bb7581be86a77ee66194",
".git/objects/73/0dda7883a07529657c6af9524b193cc425bd09": "202d5e9dea8f04a84951424b6f526520",
".git/objects/87/f2a975b2774c9350a19490d447c0a1ed0885b4": "79860abb68f53c786c69c94474da8165",
".git/objects/1a/cab5fd4a098114cbae58e7d48c790b7e3c57b3": "f142cef2bfdbf9b3c657ec21433fbb70",
".git/objects/17/336250227fd38ba8b36f8a8c69ae7ec66fe296": "6a3e046588bca5d156e509b0285ebf3a",
".git/objects/26/55568d714e64930348a402f59deb6378efeeae": "775696d1ef135c9b110d8d480f7c6dd1",
".git/objects/81/b5a0be25226eac8605fe03561481541246ce4b": "bce22a1ea208941ac1114b73674b4212",
".git/objects/81/455fdb58b9f1e0671dd9eb899b50836acf343c": "2722fb51c5d26c83d6ba190ef1f91152",
".git/objects/86/763715139b846e7f1f44f04961d3160fffae3b": "7caab4837d34cdbaa1787b624ba6a455",
".git/objects/38/04d6ee8a258d3face636607a00a5584da4b01e": "7e38529eca007abaff0328e485e8d0c3",
".git/objects/31/f89ccc53c22801cfb775ad1695534ee4d35174": "b12a3ef0a3817f5d477d8291436a4cff",
".git/objects/65/9024f3444fa6b3b9672be366987044007fd810": "60fd8381413c8ea3cbd8ecc8b8619f32",
".git/objects/99/2d9b0a626943fff847ed96763ef2bedbe1311f": "dad4c5bb7d81e2bfd520b76d47e399a1",
".git/objects/55/b13fcf8442cd2ef76526d676e818e9c837a858": "ede5a27ccc3cb9a6b61fc15978c3f42c",
".git/objects/97/54953406ad77e73d8701b2ee9e84f0cdf5fb74": "22b42e6d95a4714c053a6ce2541f20b2",
".git/objects/0a/49e09bae7952304cae35e09696a6558fcd7da4": "c887084f4eb3083c6fd5d6e6105f0689",
".git/objects/d4/1d57e93d6efeac5e300228a4854bec0a52ce2f": "fbc426ee71d9d87460d6c162e2d118b8",
".git/objects/a0/031e27d14848d5840ff93df85b8861f02ac27f": "ace0aff8b97e9f23f3a1c7ace22e4f5c",
".git/objects/b1/ab3cbfb39147a8c76d2cd994d07d102e3bed78": "6b2d193ed8c0e7bfcdfc1a249ec4987c",
".git/objects/b6/0c68f2f5cbe639a8ceba6db621c77e62ccb836": "88dbdffb45f57f06c4bc4383470751eb",
".git/objects/a9/35da929689db6c8b2708c1e597017d99b250f6": "f78b610067a7c30721fbdc2d6ebf8781",
".git/objects/ea/7f894738534768e6a1cc8588f907de9905e2a1": "5ce59e25838cd2606a5a991eb2bdf459",
".git/objects/cd/40963de5734cded9cfa4fcb52c9ee943174438": "a5c5634fd77f1edf1f09aba11300b941",
".git/objects/cc/ca6140db9a70a291b872baefa6d1c939fa2c19": "d9765d0f33d150c62a19d5fec2b82f42",
".git/objects/f0/1e7e9051fa56e9685828ce321eacc3bda5b8a3": "e9bc5ccd1fec6449e686f721474f3f30",
".git/objects/e8/19e62ae042f0ac06d971600e1430005548d19d": "fb88f266715486c14f15a07f3f37880c",
".git/objects/c5/98da72fe01596d8aa4a19f3dfbaa8a78848158": "6b7d3a65d6f58206c63956e483d177b3",
".git/objects/f6/190bf6bbe418aabfb307c79793f4da05e23e59": "135e6ca627808092fe9185d854c11a2d",
".git/objects/e9/cee24750947b6c8eccf75fe7ed2423e8a0e40d": "4a43be4cd8a44712dbf7c59cb205f122",
".git/objects/e9/f7ac58ec8535f860e5b7a2f89d8ffca3a01144": "d2aa8681fef309b7d3e2a54310fe0807",
".git/objects/46/8974e242929139971232ea785ce2a2bf495caf": "7646ab7c7a0521fccf05363e42485c0b",
".git/objects/41/6dae7a7d3be08deff36c7ff6f48e44018a16d5": "34fa9ea6a0f2ab501890909dd23a7b3f",
".git/objects/24/a7ad6df897f6587d23c79191b4de6ce827e16d": "a51ffd14a854d38405d7248913032e0d",
".git/objects/12/b664a9108622f493f024c1caeaec8ae9a676c6": "4bc9703bc295782a9cf4f7b5517fd307",
".git/objects/8c/e1e7b0acbae75f42afb90613a197c55faae813": "ac55d2ff4cc94fc0a42c2c50624a993a",
".git/objects/85/7a861795edad5badec84fc636af7dce50514cc": "9e3c91ac9ffff16e4522defb246ba7f3",
".git/objects/82/774711ad1cd90ec0b2546e782c0588033084a4": "90022dedddf05fffcc608ed38e473159",
".git/objects/2b/8c4af8a400ec5656a6a9e17eb31ead6e822d6b": "1f5de5d9ca6a3482b6ec0db29ecc5a1b",
".git/objects/47/56927b169f55bcb051fd13ae11c36802cbc4ec": "edbd0d787abd0b989e6255cb53e2b891",
".git/objects/8e/887636d0bb32cac21509887438c29dc5e9024b": "7f5fc2151493b047bbabf58c90ac9670",
".git/objects/22/d1c17768ffdbdf38a819c24f9b736f1b54dcd5": "42da7a7b8a6b7402dc4118dd786bc143",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "352e92d538ffc5c9f769125c19f4865e",
".git/logs/refs/heads/main": "e085499feb98d1e0251904bc5c222413",
".git/logs/refs/remotes/origin/main": "8e597d7dc7d76bd47deb95cbf33b4298",
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
".git/refs/heads/main": "7729a2d11eb64eb5f76669deab823a3b",
".git/refs/remotes/origin/main": "7729a2d11eb64eb5f76669deab823a3b",
".git/index": "503ba93ed9939ddcc7907fb0cbfc2034",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "a58b5d3deae121f76a0c9fffa2cc7d3d",
"assets/AssetManifest.json": "c6b89482b27833bed3acaa89db1b9e73",
"assets/NOTICES": "7afa9f9e2bd124751fcf901b5efd48c7",
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
