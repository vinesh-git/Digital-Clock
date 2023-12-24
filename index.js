const hourel = document.getElementById("hours");
const minuteel = document.getElementById("minutes");
const secondel = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;
    if(h==12) ampm = "PM";
    if(h>12){
        h=h-12;
        ampm = "PM"
    }

    hourel.innerText=h;
    minuteel.innerText=m;
    secondel.innerText=s;
    ampmel.innerText=ampm;
    setTimeout(()=>{
        updateclock()
    },1000);
}

updateclock();