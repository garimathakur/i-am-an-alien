"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/i-am-an-alien/index.html","19803d148bcbed3fefa76599e3cc62c1"],["/i-am-an-alien/static/css/main.100cb3f5.css","9590168d2b9fdedcfd4c10d0b5ef8335"],["/i-am-an-alien/static/js/main.22779d4f.js","d66bb4574f32e939f8cf5988a68a76d8"],["/i-am-an-alien/static/media/0.8f7cd41f.png","8f7cd41f6d1e1a72ba5dc78f1b9e89bf"],["/i-am-an-alien/static/media/1.1e800600.png","1e800600e9f8afbd74d9b30be82534c7"],["/i-am-an-alien/static/media/10.066ff383.png","066ff383c2a80866dba23f5d775e5006"],["/i-am-an-alien/static/media/11.720783cb.png","720783cb77bafbfcbd556e8286af2b64"],["/i-am-an-alien/static/media/12.4351ece7.png","4351ece7fb7d87d64d3f46ad58e8546d"],["/i-am-an-alien/static/media/13.11eb24e1.png","11eb24e1935127d5f3725d955e8fe0f0"],["/i-am-an-alien/static/media/14.3fb8dd82.png","3fb8dd826a8ed1e6c0a0b5748915980f"],["/i-am-an-alien/static/media/2.a771fb84.png","a771fb84ed13289e7bd07622f6a3c3f3"],["/i-am-an-alien/static/media/3.b4e73d89.png","b4e73d89a2466089ce9b4d38fb4b8c0e"],["/i-am-an-alien/static/media/4.5a7af33f.png","5a7af33fe1f4b712eb2c49e92919a8dd"],["/i-am-an-alien/static/media/5.281a3ea6.png","281a3ea63ce86eec738daa6e91a89d15"],["/i-am-an-alien/static/media/6.d75136ef.png","d75136efbbf6798f6bca21f06667cb14"],["/i-am-an-alien/static/media/7.c2b6e826.png","c2b6e826bf793f5e92e8bf9774f7579a"],["/i-am-an-alien/static/media/8.53895d1a.png","53895d1ae4c296f3fc068c4ed233b047"],["/i-am-an-alien/static/media/9.33f554e3.png","33f554e3901ebb9aee3660eb304c2a8d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/i-am-an-alien/index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});