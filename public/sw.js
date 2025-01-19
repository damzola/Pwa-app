let cacheValue = "pwa-v1";
this.addEventListener("install", (e)=>{
    e.waitUntil(
        caches.open(cacheValue).then((cache)=>{
          return cache.addAll([
            '/',
            '/static/js/bundle.js',
            '/index.html',
            '/favicon.ico',
            '/image/wind.png',
            '/static/media/pwa-app2.7f3ac081e5b75ea85133.png',
            '/static/js/main.911cd315.js',
            '/image/reading.jpg',
            '/search',
            '/static/css/main.e5b6636a.css',
        ])
        }).catch((err) => {
            console.error("Cache addAll failed:", err);
          })      
    )
})

this.addEventListener("fetch", (event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((res)=>{
                if(res){
                    return res;}  
                let requestId = event.request;
                    fetch(requestId)
                return fetch(event.request).catch(()=>{
                    return new Response("An error as occured", {
                        status:500,
                        message: "Network error",
                    })
                    
                })
                
            })
            
        );
    }
   
});