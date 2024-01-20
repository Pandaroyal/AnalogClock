const secHand = document.getElementById('sec');
const minHand = document.getElementById('min');
const hourHand = document.getElementById('hour');
window.addEventListener('resize',()=>{
    console.clear();
    let clock_height = document.querySelector('.clock');
    let clock_width = document.querySelector('.clock');
    console.log("heigth -> ",clock_height.clientHeight);
    console.log("width -> ",clock_width.clientWidth);
    clock_height.style.height = clock_width.clientWidth+"px";
})
setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    if(h>12){
        h-=12;
    }
    hourHand.style.rotate = 30*(date.getHours()-3)+"deg";
    minHand.style.rotate = 6*(date.getMinutes()-15)+"deg";
    secHand.style.rotate = 6*(date.getSeconds()-15)+"deg";
},1000);