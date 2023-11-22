'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b4dbdf4ec92f58f018b71a4fb3a544e6",
"index.html": "1a34283c72abd46e74e0bef94ae0cab9",
"/": "1a34283c72abd46e74e0bef94ae0cab9",
"CNAME": "95a83bbee26e0418c628ccbc6717b55b",
"main.dart.js": "7c3f9dea8a21364fdc23be92567373d3",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "91f8eac40527954652eec889dfd9171d",
"icons/Icon-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-512.png": "97d970ecbc890ca482820f110798d571",
"icons/Icon-512.png": "97d970ecbc890ca482820f110798d571",
"manifest.json": "0cf28e771cca8ccce3c9351ad0476a47",
".git/config": "d7845af1b1e9c5616238707ba08dafa9",
".git/objects/95/aa4b96b65c9e7ed73782539cf8e088691e8784": "ec7104bd3c6c02b475392d2c841445a7",
".git/objects/92/e68c85ac42565be6c4c1cda80afde1bd3e24ac": "860231704fd328aca8c7a366f44195ff",
".git/objects/66/1ebf9bbdb4b777c57bc868a2cb8d51e223111b": "f9c678de6a4bef4878d1774393d1274f",
".git/objects/66/8ba74de34c031af572102883c0ddd830d5b929": "aa504ef692c6ba98d67e044cabee1d6d",
".git/objects/66/b5d34a6947d7bd464ff47ca65b0621188c5057": "96c80a007da53202e3d1e1bd92ce7b31",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/9b/e9f8e1fa7c87a458946998f59e4f9b55736c6a": "4f8cef783a538752d58f67ee841ad4c7",
".git/objects/9e/8ff43121464163e0bbd069689b220f588d4862": "e716b130ecc9e451ccaf7bfd5358cc85",
".git/objects/04/da4d43dc856bdc1482cd77dff3dec75a2455a6": "224ed6e2891362af89edefbf1f70300e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/bc013605f057e59fb62e4ab5a041ccb2fda180": "d554f7d2746b1a2cf75b52c4e3599f3f",
".git/objects/58/6e79a40a2a5de35dbae1887c981cb99696ae45": "8389b0a14280a77d64b344af2e7420fc",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/8620db86cdcbcdd1d7225f15b69c820fb5f0df": "86f073bac9459fe6aa9dec23a5abccf7",
".git/objects/0e/24d32b222c1fcf302815b5c81701fe58419bef": "6fe6b2109d92cd694f3f39603bf654cc",
".git/objects/34/5a58023be7ae0e8af247e223ad58bf9ebeb5cf": "ddbffd3ca4712cced3eac5336b5d01d2",
".git/objects/5a/6ac1e61dc44ec6936fa5db52abb73fcbc67ac9": "9d23523d3afb5a83c5fdfb8be1874491",
".git/objects/33/90638a7622acc6e7fd4221aa76951b4d27bf8b": "6bd4b8fc6dc2908802fb12d986a8d245",
".git/objects/9c/f55b7e34cf9e5652ce62187140c9f9d0b3f592": "ca9cd912656a508d8e7e2366c8b897d4",
".git/objects/02/3e0f7ab45b3674948668e1931fd9d947492217": "3357d9755ee1a653d5baff3dcf9a03a6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/1b7022de42b12fe8ca92f6469f756d2d7d4562": "1f06ab62dfd8f92db76d87256345dc5e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/80b66bd6605a388844cfff09c0607399affd63": "23f53f5ccb43e4c2f4bed401a0916992",
".git/objects/a2/34f6d696fd32c80585f80ff0f058b7e31549fa": "97c21eda6c224586b58aa869a49f28df",
".git/objects/bd/2dd980c4d905a023469a075805c47ee188e7c9": "623fbfafe27f8219b7bf92ec586396ef",
".git/objects/d1/6d03adbe0f52976a185de4bc1a1a0de43a584d": "044cbeba1687daa92cb5e93479df64ca",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f3/d3f9f37f0ec97cba665940428c6bcefe188d48": "e8c5aa8fb0fbdf3e1c9a695960d5d311",
".git/objects/f3/b631643a0f80fa77bd998eb859403555e8cdd5": "0f623a788290f5cb6c586437a8182ee0",
".git/objects/c0/12d066f2e65f0f3ca592dedf2f1ca71059d5ea": "983bdf4b9111cd273fd151bd2b58ec8d",
".git/objects/c9/ebeb55f68ef3ba693ff2d3b2f1fb4e57e76298": "b8d559d57c2f6da5a846a259334fc5f6",
".git/objects/f5/77011d7d5c9777118348306bd35949df94e04f": "39ca30174b474035eb80d9763ba43bf4",
".git/objects/cf/14634313cde46a0e5713585751a5ba3bde1e52": "a75ef39f8178d5990bd70bef49bd6c38",
".git/objects/e4/6303ed20584b13710024f3d4a2e3924b1dbd0c": "185ab0e0647de3e1be9aa45bab8dc226",
".git/objects/e4/e1c33eed034b1ea588f4f3e963e1d5ec87bf73": "361157ad6558267d07a4a5ec9d3d09fd",
".git/objects/e4/3807d3e9f4635b0aa5c2e97e9de7cb0fca59c4": "38a1b219cae43b9bd1c7ba442cfbeac6",
".git/objects/c8/30fb22324ed41ab2400956a39b8e76677f2361": "02690c6fd53670c2ef053a0d7300e423",
".git/objects/4e/9d53246b8751a5cedaad8b055f8075e9e08dbf": "41c925032ce6853b83571bdf374479f8",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/11/d40462def36f88ea59da649939702826168fee": "7b67d9c08a2de134e10f5ff37d60b6e7",
".git/objects/42/ef1f1f3f175c7e5db5b73455f400c6fdc78cfc": "c3cfb3467709974fedcb1417cf86658b",
".git/objects/45/ba91ba160dc1bb07e9fb791ddc0bb1e6e3b752": "487eaeea8409c3803c457691c7201e0d",
".git/objects/45/ba4ee2e06f0896a075f25e2a60f9042d537ca1": "0f0e8d9a639b34e3270bde59d932167c",
".git/objects/73/c23ae481020c3b672aeccccddc945008d4de2e": "d23c84ade4a904e64d9d12582374c8de",
".git/objects/87/f0aaf1d212db067b37982d27b4c21c9d17f88d": "a7720b2976cae92c1a8645fc4e2f072f",
".git/objects/28/fa5a4bb946386d665ce21a881f4813cdd32475": "bd712cefb13f07a5b96fd9620750b529",
".git/objects/7e/946563aad357d7d699c7dd0ed5d34f094c3851": "fc4dcff8fd6fed3239d6d57d93eb2f37",
".git/objects/10/92fec12da627dcc6645c5c97aae7c1f343946c": "14fb20c818e5a2841a60846bf634ba0b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2a/4bdfc7b933a67f6d7c27e68f5c31adcbc2932d": "6bc59ce0c36f294e20a22e88210d6498",
".git/objects/6b/9dedfd6cf6f8d371056a8049623684a28ce0b8": "5881884c0eb489eb309d8b071d4c1936",
".git/objects/00/ea1d4ad85511fed1688796f3fe26efcc747c82": "749ab357b7648b48f011334d6fe106f0",
".git/objects/9a/f9d5536600a295a2927cd81bda5cefd650114a": "bb3ddb964bdd30990233fb8ad8bd8f84",
".git/objects/36/7d0b0e72d44e7fff88a9509e749a6d33631a18": "de426b66ac427d46d009577540e1bf22",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/5ab0a47df65fd7c11694197adaef412e23b107": "164284e0c0185079f80fb0ad0b21ea87",
".git/objects/54/666da48b795856e91acfa70827f37fad9556f9": "8d3d09cb3a106ec52c3b2fb266490b06",
".git/objects/98/c62f89bb3c950fca74b0f6407c3d4b51ed5aa4": "c5da3362c886422361ef5e88086040b8",
".git/objects/3f/f4c31bfbfdd390a1149bd46001be5cb7fb04fb": "52a7b04aa7a01d34ea0a0a8913af9664",
".git/objects/3f/ca019712431495366e1b0b1b2232c69a90beb9": "3e14e75f3c401bc972a9af569487fe9d",
".git/objects/30/5cb0119b30ce4b5848cf9ba53a4c469f4c993a": "60d9794dec4f574e691dc6679a3c3151",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/6cfba8eb2323b3128d5ce888aec4d435f790ee": "070ebd2893827bf5a54d2de5180ba3f1",
".git/objects/08/1b59b104d2e274246b52c1fca0f99bc8c544cf": "5146ee01af6beed651ad1d0e760c6ebe",
".git/objects/39/963bb4006bfa09cad7f43d636ba4201ccf61cf": "dac7116bf498c89ee13089df19252e72",
".git/objects/99/b5b2f5da3d88a7e623cd310978bad1695d0b02": "4767eae74bc2e7acf3f0582f76323182",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/32c7bbb7a823cbbe54da8186765270e506b098": "8f60e41574968a777023248e259ab929",
".git/objects/aa/56f9983f81c234774806245f9e3b6662e16899": "cafa08f34aac8115e6e05dbfacffdc00",
".git/objects/b0/5bb5b63de8a0bd975495daa83b8898536dfcfc": "a1bb22ec463224173b85cd6ab44f0d91",
".git/objects/a1/fd13086fc2d1831e959b13cce5faef784c0cde": "cb49a65ab5c947df4efc1b2b595d16a4",
".git/objects/c3/d512e0c1b29667135fc70b35cd892335021937": "9f818c6cad0f5eb0e3e93744fa572c2c",
".git/objects/e1/5e3c93005b0821fd887b3b4b47bf33da32ba19": "c36e1e4dfb38257f13f384928293f871",
".git/objects/f9/842248bc651ac0a7bac077176a4b31f41c0353": "20b7450ce0290ab3d6664dcbce00804c",
".git/objects/e8/aeba56989968e1b715466f9a82047a03a67353": "d4e7bb07346d43030020eea44383fef6",
".git/objects/fa/e1276cc91c566d222ba3fb57a2c494182eff53": "11b258aa1e18e21f60457fe5eda621ba",
".git/objects/fa/7ac04b8729677f005bd18ac418471008f5b0e1": "0f473957fb8915352aadb84bcfac0f0e",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/bca85ddb5e7e6df9758321342b4aa26c1454d0": "8ed08c27aa812a20cb6a36db280c6486",
".git/objects/f8/5744ba07f6513d42bf190295e8ec9599a27555": "f66ad2bbb2202e109d28c4aa551e51c2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/77/a74f37c4471f565e202533363f92e5d9120469": "3c7d40d90b57508b5e604fb0a7058ba2",
".git/objects/70/b116b6922f892d69dc2c7e53aff674ff4029fc": "562ccc84537d7d822ca6017719a77c2b",
".git/objects/70/423658e318fb3818f393a8685eda493898023c": "74cd82349380d663700e4d099b9964d7",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/e88433b3e212cd078932a785135e899231a764": "75dd3324382ed5fda4798cbe3574b7a8",
".git/objects/15/be5f357d1201e7b95ca1390fa97f5276248776": "8b00d517b5c9d2ee3e14a096491204e2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/fa65e8b4f2ddeedb69adbc06a544c78e849a44": "630bd8c115c011735b64a44d75f4dff6",
".git/objects/76/d982e2c47cd0bf8bc59c0a45fd72e55b35ee64": "91a59e837ab510a71c7ac1f8f488b0a0",
".git/objects/76/125f8b79cc20462cd4f9b4715868d6668fc707": "b528bd08652f209f85b9548674004300",
".git/objects/76/d7400b4ddd9fa822fccd84b32b0da8becc4d3d": "6c53ad884ee4fb06bcafc982fd5a4d85",
".git/objects/8b/aaf3cd29fec779465db7657689adc3db1b00f2": "c6fce9b172944c20e6b42cbfe6276afb",
".git/objects/8b/97fd55e590dccc751378011ccac95c06498dec": "e57d30d824b1c6bc4ec1671fb6671e76",
".git/objects/14/3624efe58eb649a61122c8e31cc16b8a61e431": "e7f68b4d94065cb2c2b3a8d5d9ffe738",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/caf3d74b195925a608d332d4e5df25a04d6594": "e63bd982f1b180bffa1517b80a7491d7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "85db5ef388d5806b851ffddb397c8cd3",
".git/logs/refs/heads/main": "f3ff77d8af78b87225ff5a8b0baa7e36",
".git/logs/refs/remotes/origin/main": "1304ef0c7373ad9023d4c7005bf4a882",
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
".git/refs/heads/main": "ca447fbf2159ed2266533ed584861bce",
".git/refs/remotes/origin/main": "ca447fbf2159ed2266533ed584861bce",
".git/index": "7f9c821341f60382eaee6f2affb21cc6",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "c4132cce1caa273b63b52331979503a1",
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
