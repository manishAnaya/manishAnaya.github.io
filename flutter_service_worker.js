'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fccceef320fe3813b663ddab3a44d957",
".git/config": "ad5bd5d46eb25ca095c78485836293b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cbe73da128d62a4054e9aee51dbd7feb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4fc2fac564295080042cd7af41e8aa1a",
".git/logs/refs/heads/main": "3b92e6a0582edabcf29a792203fab915",
".git/logs/refs/remotes/origin/main": "d3ca0208e022bbe1bbdbc64ad73f7554",
".git/objects/00/069d7b302c65e12cc7b6dad713ae62c8b9ff42": "d74bea2e3f0ece5779eb58a383204e0f",
".git/objects/02/502bf41ea576dfd67d83ff5fdf5c5e733e883c": "5dffe21733318286ff9788117ee7d950",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/60dba71f8cee74068c9202007c11dce2fa82f5": "2974de6490bd516aa31c49cbd7967830",
".git/objects/0d/71b23d0c6d448b7b3704449d13ee6477dc0e97": "02fe8947bf312e2ad07a9e5998473b81",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/6ff1fbc9530923e5d08d96187cc7a04e9e18ac": "30f5c581d848ff4b07c4673684a044ee",
".git/objects/15/e0c9aecc2f731db59e36bc53a7a12a2bc1b1de": "1fbef6c946707b1ae47b7e3f09fcadf3",
".git/objects/17/74a54e263e2234566db60ec0b5081d4ef8061d": "e7db7552c1cecf94150d8e32fb9e30b1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/6960124a9b7b937fb2d4d1af7ab06ff0a85458": "24823fb8dcfbab375f04836ed9316a1b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/a10fc9b022545fec943e97ea6b8df65d81a8ec": "7c403bc0564a669bbc53cc564c5ae597",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/39/1a6b32b0d2cb66590c58d53ee624eebc2982e5": "c7d9cae70be785309fbff36aeaaef41c",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/0c262fb3fe7c6a0233051b46cae15fb0427378": "1914ee321a4e4640552baf88fefbf7a3",
".git/objects/3f/19338565f925155fcfa2bb36cc32e00db17aa1": "ef9942f2487e6d3cbf5998dce21edd59",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/2688f1edcc3cb514f069c14600cd1b4d8d0c4b": "a6d88c4012e707c2094dede2b34f065b",
".git/objects/5e/7dd74865f328d1983e0aeb36dab6f8d1634eb1": "51d6f37293c05c395809904eb91bca2f",
".git/objects/61/e4fe12c4f3058eb7d9c9976b87fbb42cf6b50b": "c7ac8089e88d04feb3303d5ca4e50e22",
".git/objects/63/1ef210c1111bd9b50bf5e9f95f63282039c3cc": "42c7814f6a7814f7c7e306a59d023d4a",
".git/objects/63/7a92378a3f0f830cb4ac64d0071820d1bc5c67": "8e496ed99132c0fd787755d1e7d6a851",
".git/objects/64/6ef0f0b7f175aa8e7d082a04755b4169e25742": "686191f548385636fe06442d512e9672",
".git/objects/75/af2fb1bde62d192e17889924cfccab732f905e": "9b2ee42468adaa9f4f7e51bbe4c2149f",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/7b/6a947e1d2d64a7a5b351bf291ed43df00e923f": "14c84d9df351f3cbccb6a5f68642552a",
".git/objects/7f/6175019c9843c245ac0005499233509adfdada": "d9747322498bd17da20376d54db45a4f",
".git/objects/82/1c69e081f3a540c45d0ca7d42a085f5b4f8887": "0d41f47fb8ba0459fb8bf1dc679b4723",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/de3d402bf98905b8fdd571a49d539f2d85a6de": "8bd26c06a37e10f0810caa83cbfe3441",
".git/objects/9c/ba49ad418263ffee34d5316729c00fb2e1add7": "ef0b46ee4b0cbdcd30f749a2d9ca0208",
".git/objects/a0/bc848cb38c36ad196a6be2afd5cfb997214cb7": "0202b2c8830bc4a50eedc83ba19026cb",
".git/objects/a7/2dfce7da49372195ce85a51b8a434e9acd9b60": "ae7a5f70cf45e62d5afebc8ccaf994cf",
".git/objects/a7/b7beac5e78393af30ef24adf47bc1b65228bc7": "3211b7dafe87fa45f55f1491cf208458",
".git/objects/aa/d5e905950b1cacc382e9f122e6ddf62061589b": "581e3c17871228c9b3d8c17f65a6377e",
".git/objects/af/a53046135e1444efe13e75fe4534b3b0452562": "51d94046334b175f984ee8b2be23e125",
".git/objects/b1/166d9afa5aaf60fe3778b541ee931b5c69f542": "122689e96a9a7bbcd60f13923c67c257",
".git/objects/b5/3b680b663c3e2dde6fe6b08b66d5d4d26e4f4e": "79db0a0b7d76274e1b17d7125292d254",
".git/objects/b6/aeaf55460e92c1268ebf19771ede6816e66e72": "4c617c785ea264f08fe1b6630a38f11e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ae9c0673ca8921a97c8dd929496a2caba8deb1": "d27c06727615174a5b55117244209114",
".git/objects/c1/19f64f15806301b3d7e47e5444bbca6ffa387e": "79d9c6bd6dab77ce035bc56719c96f7c",
".git/objects/c2/5d076861256ae9c6f527eecb60edd22a157bbc": "68ee4b81495642edf2a3d7bda9710071",
".git/objects/c4/c9f83fdfd959f7ddd3e3ca7de7abd4de4e468e": "45327b5c7743c52f9200d51a3571f818",
".git/objects/c5/eb72eae8fe4bde8a57f35a66c568e32658b485": "262ced92a6c7256bda224255ab4b1795",
".git/objects/c6/8568fad2178061577cf86e89f9983a3ef2d86e": "4f14ee2d44b6a1968a8d2ccbb26f08e0",
".git/objects/c6/bac6e279318958c6e573cea3dba0600fd05016": "cc9dd63743995499f71ff20ae0cecbe7",
".git/objects/cb/94bb2a9cd957387848266e07b4355aa8d81600": "9093e45765b95bdbbe9ecd0c7706a948",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e4/93592c760b5a624de74df621063182bd5d1fee": "fa0ea883227eac0ca1876e59592521ae",
".git/objects/e5/219b350e26ec632c72171ac1eb6dcecbd98785": "789ca9c785a00dd3109e8a06248007ca",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/e066dbdecd1f83ffc99dcfc2c22a8060bd09e9": "add555a4209ade326970fd6fd09f0dad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/3f666a993d680ac5f7bafb85e68b64a8e18d6f": "b1a3f31f0140d37fef1e857e374f7b48",
".git/objects/ef/a5924e769ec63351df52d59a9aad06c5556dd1": "50632d16d404c47b9f14a1cf809ea433",
".git/objects/f6/141534ef67e0075f4dcf5eb9d60cd7ff25c47f": "24ecb275ab37155e672285a77f01a061",
".git/objects/fa/f441ba9d65fcaf743c9502d08c8248692b8370": "e0e70beec5cc2d3ba6a23ecdf438d880",
".git/objects/fb/1c39a6866bba3f3a30393dd33c1cf2b9eec895": "4383181e6792d6840105e4966a56eeaa",
".git/objects/fe/3a194c398fd8117a77714e8e9866dc87ff57dc": "6ce9dc4d688a6156054b26fb58ac2af1",
".git/refs/heads/main": "31642e682dd9a5e1dc1511425eea8752",
".git/refs/remotes/origin/main": "31642e682dd9a5e1dc1511425eea8752",
"assets/AssetManifest.bin": "00e049f07d7f8668c1b0123beb9a940c",
"assets/AssetManifest.bin.json": "3dda2823c43c7c4c8f25c578f09295fa",
"assets/AssetManifest.json": "e32530d9fbd480a117f4c43926cbc288",
"assets/assets/images/bg.jpg": "3ff7c15907305eb480b9ac6e6970a233",
"assets/assets/images/cv.pdf": "036d7729b4285698dcb3530543e30ce8",
"assets/assets/images/my_image.png": "fe0728ba1529a261f0fa86e6ea611945",
"assets/assets/images/splash.gif": "247eaf0c9768428875baa94ce6036d2c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "8ddeb2b6db52db58ab438d631e576951",
"assets/NOTICES": "42bb07cfdaf8ee1a70f901ca495a6658",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "03c59011d08e8b0f426c95af65eddf51",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3a37f7bf9c16dc431a02a8972442a1db",
"/": "3a37f7bf9c16dc431a02a8972442a1db",
"main.dart.js": "dd01701d9c2662d4b5038bd4b96acdd9",
"manifest.json": "9a8f3036f10cc612a212359c89588aae",
"version.json": "53727c948e95ac67c4d8640e14857d94"};
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
