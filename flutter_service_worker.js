'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "48b1046d7c01e727c4fd93a295c33003",
".git/config": "41b4a3177ed8d910e3485588c0917e0a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d09aa00d83193ac65187cc871e7d3d97",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
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
".git/index": "b5002450e764ee08480dbb5407903505",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "613632ca0a7ea7970c1e55ba11c937a5",
".git/logs/refs/heads/gh-pages": "e26b97e1a6c7ada31d430bc70506e8a1",
".git/logs/refs/heads/main": "d07aa38287b648af9798087d15aed8a6",
".git/logs/refs/remotes/origin/dev": "435602a0ee65603027dd0612399d92da",
".git/logs/refs/remotes/origin/gh-pages": "f53a5744b004dd74d920ac87c2989c20",
".git/logs/refs/remotes/origin/main": "9bfe3326ba2806e87be024efcc6ed828",
".git/objects/00/7cb15f42c93c57def6c934d8c0d63d5313ca6d": "8119bd278bed8f6cec11eeb68d6611d6",
".git/objects/02/7156874f1addf6e85851cf6494dd29ae3319e6": "0111b677e3339db10300c08c1452c65b",
".git/objects/07/7103b4a9ce34eff7853c54dc45affacd3ed10c": "419df93de55676e2f645ba1aff292cd4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/16/e7cdc796b809fd5d81afba3a4316998de7d5bd": "de3d8e9c3c23fbcf8655c7fe08f2f206",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/3efa6e9eb7d9d2bfbacb0b516ef48b0da3d5bb": "7841e8b828e5ec5d2b45ed2eefee3c35",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/983f79b28cda86df5d408e87b2dc2e0f2fa840": "ed88cd60069cc263f68f8390c270bb24",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/a47792c64b900ff14b7d3b140437e1f7b418a5": "477bcc56c281d79873157fa16e69f34a",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/757e53beeeec2c95cac52bb38676f3eec639fa": "6bc81b23a25eb88566e24563ea635dbe",
".git/objects/3b/ed6a60887154e5df251c05a89c9d03326a56ad": "6ed85531f063d8ac2494f75484a0ef88",
".git/objects/3e/b445002b41501330338d4bff2f9ee2828d848f": "fabc04fd93fe392cb3b84d4559e7dbe3",
".git/objects/3e/e6d3b979a1c3e465bf3fb76db722efd707689e": "e15e5a5f39f016b6469ddb0de32cba8a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/8bdac818baf22af8724d1772fdbc6b1f254485": "e14738b66c30457740e538e1f2cc5431",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7514aaf99b114eb46c90dda545919f8da5a8b5": "f89eca7ed809f8edb3d428ba9de0bf3b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/58/583d5586d15b79db879d92e5080849393a3ebf": "411884bcbe1579ca0fe860d0432f9cd9",
".git/objects/64/688825c1de3adcf62ad61e033acc1b635ea145": "daddedde2b477fab6c7be351f7a1ac5f",
".git/objects/65/6daaccea386e7574f5b3737cea6bdbf694ebc2": "2985141b53adae80e719bcbe58319552",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/de42091d12b09df6dd1998c583ff929d5262a2": "d843150c32c995953d41d088546c0940",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/ead794e7f583fa0cfad53f736266dedf948461": "2d24c934c47b6d874b4586941d22731d",
".git/objects/a1/ca7ee96dc86cf1c00b7df426df7b181bce7dba": "daba0845922546037a4ba7925dac625a",
".git/objects/ad/c75f1db3f9c6e684c7ca24110011ce9f0b2c2e": "28600137f93f06a93d2f1bd9f58dc573",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/d8660f7a6ecc250124c20de082d9e703cc50ba": "26ba02c6ea400e06101ebd7b889a01c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/4261966f457f9e6f5bbb31305fd84de94f6520": "37636f9edf879a6151e1bfa688644383",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/c15796ee7adda63d3dfdc3ce7652c6e8417bb5": "74951a579f3ddd2de9ef7bb0a167d7f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e8/2ae41575ec3dea579fa7dc3e3ba3cc122ca069": "a7f31570aa3722e258edd7f80260ab08",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/09b84bc964ca58e649af869b0f86d2838b0510": "68e31854facb4f9878f0bc7532c72a5b",
".git/objects/ed/00e6b5c1ec6476cddbbaf6704ba38b1aa80ce7": "1ee6478c7816b5491fe7f6473da47f45",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/aaf3ac895dc317c890ea0a3ae8f00e0b8b4494": "b44064c3453cc4c4d4fda5f1edb95a12",
".git/objects/pack/pack-837c31a6d12ced0783d80bdda88bfa7d327733a3.idx": "1a8d56d3aa6d22ff4e3a348bcc9c0a92",
".git/objects/pack/pack-837c31a6d12ced0783d80bdda88bfa7d327733a3.pack": "fd849037d14fb76f67364dd65893096f",
".git/objects/pack/pack-837c31a6d12ced0783d80bdda88bfa7d327733a3.rev": "fb61e66d890d1e316e4a5622d9f467de",
".git/refs/heads/gh-pages": "25b142d4e33da0a77b2a3157cc47811c",
".git/refs/heads/main": "708284e59b4c7f264df1c2489e908c08",
".git/refs/remotes/origin/dev": "642fd24a7f5c25042e990bd831f61d18",
".git/refs/remotes/origin/gh-pages": "25b142d4e33da0a77b2a3157cc47811c",
".git/refs/remotes/origin/main": "14e48e7086795e5c6adc077a4735cebc",
"assets/AssetManifest.bin": "9e18b4ac6341d067ce610ef99f8f3517",
"assets/AssetManifest.bin.json": "b14935f2e552a7f057548cb3ab308ca7",
"assets/AssetManifest.json": "390e2eb0c2c9ff30c08bc0c429887a53",
"assets/assets/apple250.png": "94885915ee46a890c496764e3df57e3c",
"assets/assets/astro.png": "68a4bd8e776f1d61542ac0fe7c4d721b",
"assets/assets/brewer-x.png": "73fc7c4eeb190086ff037c21d2026b45",
"assets/assets/cut-the-rope.png": "1da0e444897f1183d304fd8adce7dc09",
"assets/assets/note.png": "f6f18cf8373ed30b6d81fa580133add1",
"assets/assets/popclip.png": "8de99aca1b00e8ec5311c99205db7e54",
"assets/assets/prompt-3.png": "b7e9bc668032a915e156428046fb45a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "801788675b16d5d4af7b5970cf03ab40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9ad3b9d4d93fc3c178d8318072e0fe70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2cfafdf13c9e0ff85c150f94314dd51a",
"/": "2cfafdf13c9e0ff85c150f94314dd51a",
"main.dart.js": "332cfb7f2edb8c5b77f27d3a334975c2",
"manifest.json": "774ab1bcd8151ac02cffc854dd13555e",
"splash/img/dark-1x.png": "e75b24fc34dbc4ee54964abbe06deb18",
"splash/img/dark-2x.png": "7b8877d560f8a240ea451e7a260c67b7",
"splash/img/dark-3x.png": "28062ac72aec112a85696639d92cb1b9",
"splash/img/dark-4x.png": "0138332a1581f45ca40d82021171cda2",
"splash/img/light-1x.png": "e75b24fc34dbc4ee54964abbe06deb18",
"splash/img/light-2x.png": "7b8877d560f8a240ea451e7a260c67b7",
"splash/img/light-3x.png": "28062ac72aec112a85696639d92cb1b9",
"splash/img/light-4x.png": "0138332a1581f45ca40d82021171cda2",
"version.json": "7069365c5514784b4f9dbe08094977c8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
