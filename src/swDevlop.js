
export default function SwDevlop(){
    let swlink = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swlink).then((res)=>{
        // console.log("Service worker Side From Src Folder", res)
    }).catch((err)=>{
        console.log("SW registration fail", err);
    });
} 