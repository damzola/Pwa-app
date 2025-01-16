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
            '/image/reading.jpg',
        ])
        }).catch((err) => {
            console.error("Cache addAll failed:", err);
          })      
    )
})

this.addEventListener("fetch", (event)=>{
    if(!navigator.onLine){
        console.log("we are offline");
        event.respondWith(
            caches.match(event.request).then((res)=>{
                if(res){
                    return res;
                }  
                let requestId = event.request.clone();
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

// let cacheValue = "pwa-v1";

// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches.open(cacheValue).then((cache) => {
//       return cache.addAll([
//         'static/js/bundle.js',
//         'index.html',
//         'index.css',
//         'index.js',
//         'favicon.ico',
//         'static/js/main.js',
//       ]);
//     }).catch((err) => {
//       console.error("Cache addAll failed:", err);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((res) => {
//       if (res) {
//         return res; // Return cached response if found
//       }

//       // Fallback to network if not cached
//       return fetch(event.request).catch(() => {
//         // Fallback response for network errors
//         return new Response("Something went wrong", {
//           status: 500,
//           statusText: "Network error",
//         });
//       });
//     })
//   );
// });
