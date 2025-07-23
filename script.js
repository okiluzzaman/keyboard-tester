let body = document.querySelector("body");
let theKey = document.querySelector("p");
body.addEventListener('keydown', (dets)=>{
    if (dets.key === " "){
        theKey.textContent = "SpaceBar";
    }else{
        theKey.textContent = dets.key;
    }
})