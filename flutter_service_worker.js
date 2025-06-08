'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a11cb1fe06a8eee44d8303410734e6ff",
"version.json": "ad0bc55b5b1124d08d46b71f9380178a",
"index.html": "b1e05355b7b468df575a6cafb53cff42",
"/": "b1e05355b7b468df575a6cafb53cff42",
"main.dart.js": "344d5d3011b878d66fb2d529cb48ecdc",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "ec024b7877ed8d02c665a62b8786a0a3",
"icons/Icon-192.png": "417c905b0dc419f1702c6367001096ce",
"icons/Icon-maskable-192.png": "417c905b0dc419f1702c6367001096ce",
"icons/Icon-maskable-512.png": "5bcc5a9d1d8cff80f79e03727ec01bc6",
"icons/Icon-512.png": "5bcc5a9d1d8cff80f79e03727ec01bc6",
"manifest.json": "b8b5dc817d9709c0f6a1ad71744b98ed",
"assets/AssetManifest.json": "8d4a9cf4797ead3514cf298d6821223a",
"assets/NOTICES": "aba4c407e021d7836cf27e4550a7f5f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fce3cd0eb65f77f4120e501fdb0073b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c297a339ce211bb3ba9d232645278ee9",
"assets/fonts/MaterialIcons-Regular.otf": "a1b6192b11bfb7d2d99fcb5c4bb56889",
"assets/assets/images/transaction/transaction_sell_normal.png": "73077fe307224bf2f7aaa2b5e2c46d81",
"assets/assets/images/transaction/sell_waiting.png": "922a434cb19d41f35f50fad540f7379d",
"assets/assets/images/transaction/meinv.png": "cb98fc8e5208628690be2088df6180b7",
"assets/assets/images/transaction/ADD@3x.png": "b5decf0ec0396f09661e0bd94b97ad1e",
"assets/assets/images/transaction/transaction_sell_selected.png": "515412643174bbb36d8cf678a41571fa",
"assets/assets/images/transaction/transaction_bank.png": "51f3cdb036a6f25361d42834ba5c56aa",
"assets/assets/images/transaction/buy_pedding_pay.png": "157efb88d0f783893aebfe589c5989ff",
"assets/assets/images/transaction/transaction_buy_selected.png": "22790da0c9503e51c8b3e32e1ebfc73c",
"assets/assets/images/transaction/transaction_buy_normal.png": "2a9acd9fb0a3a92c93e1fa06d189ca17",
"assets/assets/images/transaction/transaction_alipay.png": "7a01ee746f5166ebd1c4e067667280bf",
"assets/assets/images/transaction/sell_buyer_paymented.png": "6f12037d311dee3fc11989aeede59a4e",
"assets/assets/images/transaction/add_payment_method_wchat_unable.png": "7eda8e4e1980b85231fc18a0512f4b13",
"assets/assets/images/transaction/TB-LOGO.png": "76495f0204ea415f1de0aec64f47c574",
"assets/assets/images/transaction/transaction_in_appeal.png": "8dd4e0c336fab81d563db2c5f8be23c3",
"assets/assets/images/transaction/transction_error.png": "02b9be8164bbe778b40ad3c9070fc426",
"assets/assets/images/transaction/transction_suspended.png": "c2d467367b468bfa290b9e27f18dfa3f",
"assets/assets/images/transaction/add_transaction_screenshot.png": "b5decf0ec0396f09661e0bd94b97ad1e",
"assets/assets/images/transaction/add_payment_method.png": "3a6f5455aa735f00f4e51c5006780702",
"assets/assets/images/transaction/transaction_wechat.png": "0d217d7e96d7e4d9c01b7e2b8b5734d1",
"assets/assets/images/home/home_big_banner.png": "ee6fd3e767214eab318e4e2c6de8fe95",
"assets/assets/images/home/home_notification_yellow.png": "1ea986c5caaa4d32b88cb19d0b2db7d0",
"assets/assets/images/home/home_buy_coin_bg.png": "726272bb467f73df89e6ecd64df0db12",
"assets/assets/images/home/home_avatar_placeholder.png": "c1fa5befb26b1a9b682546a73bff988b",
"assets/assets/images/home/home_facebook.png": "998c87e47545506615bab40ca6d92910",
"assets/assets/images/home/home_notification_black.png": "a5049ae8931d1309e8bcda965e9fe72c",
"assets/assets/images/home/home_small_more.png": "4da2fb1ea0ebd27a40f1a067bd50b0e4",
"assets/assets/images/home/home_my_order_bg.png": "36fb7980500f5abfa6b12860f09ac91a",
"assets/assets/images/home/home_twitter.png": "1bc0dce7ab5d2de108d234f78f9b4db0",
"assets/assets/images/home/home_scean_yellow.png": "c92782471befed811ba86d780f38dbc3",
"assets/assets/images/home/home_sell_coin_bg.png": "eb46c5fed9b213523ed8b07176ef9b1e",
"assets/assets/images/other/country_search.png": "70dff7dd2b10191dee8466fb80ffbd16",
"assets/assets/images/other/login_bg.png": "5a64a3cfcb7b2e7ac5970d4bac148db0",
"assets/assets/images/other/login_service.png": "e3e3cf114b056374a214c83706ae14bd",
"assets/assets/images/other/login_banner.png": "ab5f1a342485229fee220d12f35a4006",
"assets/assets/images/other/register_lightbulb.png": "f8353ed63fb43fcdb1f8d1b90f11a2ee",
"assets/assets/images/other/general_copy.png": "6e28b17cef04581ebe89655b16d9b432",
"assets/assets/images/other/tab_transaction_high.png": "40a6d2410197d34254cbce2a08bb53ba",
"assets/assets/images/other/tab_assets_high.png": "129f3e88b4d78b1527b31f8df6978c59",
"assets/assets/images/other/tab_assets_normal.png": "ffc57cf19c9f0c8bdf43d61e80c05047",
"assets/assets/images/other/tab_home_normal.png": "80fae0134ac11e14072217a7097c56b8",
"assets/assets/images/other/tab_transaction_normal.png": "285f21fbc8d44c782334466ec4f56a72",
"assets/assets/images/other/tab_home_high.png": "6e97e0aed198711cae542059ade1bac1",
"assets/assets/images/assets/my_idcard_back.png": "f9403e08ee276a360432429952c280d7",
"assets/assets/images/assets/assets_qrcode.png": "d38d0f2529dc956e419bef47459e69b0",
"assets/assets/images/assets/my_about_us.png": "49ee0ca38e04a9cab86b0de45378a1be",
"assets/assets/images/assets/my_identity_auth.png": "062423340e08aa2bf1981c42478dfe4f",
"assets/assets/images/assets/assets_shield.png": "465580d365b606939305cfb4bb2c6587",
"assets/assets/images/assets/my_email_notify_empty.png": "7df7acb111c918e096abd4401d0513ce",
"assets/assets/images/assets/assets_addressbook_blue.png": "44e2fc6af6869d31aad36a9211caadec",
"assets/assets/images/assets/my_contact_book.png": "727a48705d4ed53c6e9b7b96cf45e488",
"assets/assets/images/assets/google_authenticator_qrcode.png": "3da2d4ac9f71ee4f1ca03b1dc2d88e17",
"assets/assets/images/assets/my_customer_service.png": "ebdb5fc702cfe61677de6026339012a8",
"assets/assets/images/assets/my_device_blue.png": "2cd89fdbe78526283d1b7be6efd73b14",
"assets/assets/images/assets/my_payee_account.png": "3ed9d24dce1ffc627f329b808c7f53e1",
"assets/assets/images/assets/my_idcard_front.png": "2e20abc9d78a76f447c9c072b941188a",
"assets/assets/images/assets/my_other_receiving_mark.png": "cb3327ca8527f7c1cdee383125a8fac9",
"assets/assets/images/assets/assets_qrcode_white.png": "0c29f04192dd0610e344ce0570625aef",
"assets/assets/images/assets/my_identify_undone.png": "5d612393d7f17325d1eaaaac6f52e716",
"assets/assets/images/assets/assets_service_close.png": "9b6e1d9430f5b5dae00a54c10fc7698e",
"assets/assets/images/assets/my_upload_idcard1.png": "24a1e525119c75bc78a76cb24e87277c",
"assets/assets/images/assets/assets_order_filter.png": "be58ab3681396e4aef18cf52a7949c82",
"assets/assets/images/assets/my_notification.png": "47f293e820cb46cbea1dc3483ba870f3",
"assets/assets/images/assets/my_share.png": "23f90ae7259ec4a42e07d0faafb8bc2a",
"assets/assets/images/assets/my_safe_center.png": "c6950febf17311bd59d66b1ed8f3d2d8",
"assets/assets/images/assets/my_upload_idcard2.png": "81e6736b9186b74fd466ddf8e5009995",
"assets/assets/images/assets/my_help_center.png": "e7019305007f35034c87a81c42ab5735",
"assets/assets/images/assets/my_device_black.png": "e9441da60c761f7cdf3483d128ca2791",
"assets/assets/images/assets/my_receiving_methods_empty.png": "37cecd9110308194b50a2c9f2e4590a1",
"assets/assets/images/assets/my_device_edit.png": "7ded96ce42942b5558ee6bbd7e36cf0c",
"assets/assets/images/assets/assets_avatar.png": "399975f93d92a1f7f95f64740cfddcb5",
"assets/assets/images/assets/assets_network_bad.png": "ec9f1988cd83f52f4009c8795f8dbdb0",
"assets/assets/images/assets/asset_detail_transfer.png": "51d6d1a9e359e659344dc86ee418a5fc",
"assets/assets/images/assets/my_add_receiving_methods.png": "c01f4941204549607504133e0e66b7cb",
"assets/assets/images/assets/my_setting.png": "cbf1d388f3bc651d3a74bd24e86a0979",
"assets/assets/images/assets/google_authenticator_logo.png": "6056b52ebb16cc7b6bb65510c058de44",
"assets/assets/images/assets/assets_manager_backgroud.png": "d6c7e253586039693e1af9dc28f5bbed",
"assets/assets/images/assets/my_identify_done.png": "c5275a1246ffca3129a69b40879f4f45",
"assets/assets/images/assets/asset_detail_transaction.png": "45c7db4158b311b46ac1fac91b31a0dc",
"assets/assets/images/assets/my_sms_notify_empty.png": "390317798a623fb34535aff7ffc21513",
"assets/assets/images/assets/asset_detail_receiving.png": "4c3a83121ea0ff830b176c9bbe1b71f1",
"assets/assets/images/assets/assets_notice.png": "5e93b72e85a713e6ce32aec9751f7fd7",
"assets/assets/images/assets/my_device_delete.png": "09dd5934138c2d31e8d1be82ad9bc2f5",
"assets/assets/images/assets/my_wallet_address_qrcode.png": "da0109a2aa27d88648545f193350c1be",
"assets/assets/files/country_code_multy.json": "b0283218eee4bd6e61324b6e9a6e1c3e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
