self.onerror=function(){return true;} 
const caceheList = [
        '/',
        '/js/',
        '/resources/',
        '/css/',
];

/*
caches.keys().then(function(keys) {
    keys.forEach(function(key) {
        if (key !== version) {
            caches.delete(key);
        }
    });
});
*/

var version;

// 获取postMessage数据
self.addEventListener('message', function(eve){
    /* console.log("SW Received Message: " + eve.data);
    console.log('version=',version); */
    version = eve.data;
});

// 缓存
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting()) 
});



self.addEventListener('activate', function(event) {

    // console.log('activated!');
    var mainCache = [version];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if ( mainCache.indexOf(cacheName) === -1) {//没有找到该版本号下面的缓存
                        // When it doesn't match any condition, delete it.
                        console.info('version changed, clean the cache, SW: deleting ' + cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
    
});


function isExitInCacheList(list,url){
    return list.some(function (value) {
        return url.indexOf(value) !== -1
    })
}


// 拦截请求使用缓存的内容
self.addEventListener('fetch', function(event) {
    // console.log('Handling fetch event for', event.request.url);
    if(event.request.method !== "GET") {
        return false;
    }else{
// 获取postMessage数据
self.addEventListener('message', function(eve){
var vs;
    /* console.log("SW Received Message: " + eve.data);
    console.log('version=',version); */
    vs = eve.data;
        if (isExitInCacheList(caceheList, event.request.url)){
            // 只捕获需要加入cache的请求
            // 劫持 HTTP Request
            event.respondWith(
                // 檢查快取中是否有可用的資源
                caches.match(event.request).then(function(response) {
                    if (response) {
                        // 使用 Service Worker 回應
                        // console.log("【cache】use the cache " + event.request.url)
                        return response;
                    } else {
                        return fetch(event.request)
                            .then(function(response) {
                                return caches.open(vs).then(function(cache) {
                                    // 加入cache中)
                                    // console.log("【yes】 put in the cache" + event.request.url);
                                    cache.put(event.request, response.clone());
                                    return response;
                                });
                            })
                            .catch(function(error) {
                                console.log('资源获取,' +event.request.url+' 失败 :', error);
                                // throw error;
                            });
                    }


                })
            );
        }else{
            return false;
        }
});
    }
});




