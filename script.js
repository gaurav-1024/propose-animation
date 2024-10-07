let b_img=document.getElementById("b_image");
let g_img=document.getElementById("g_image");
let b1=document.getElementById("balloon1");
let b2=document.getElementById("balloon2");
let b3=document.getElementById("balloon3");
let b4=document.getElementById("balloon4");
let b5=document.getElementById("balloon5");
let b6=document.getElementById("balloon6");
// let b_container=document.getElementsByClassName("boy")[0]
let rose=document.getElementsByClassName("rose")[0]
let boy=setInterval(() => {
    let s=b_img.getAttribute("src") 
    if(s=="img1.png"){
        b_img.src="img2.png"
    }
    else if(s=="img2.png"){
        b_img.src="img3.png"
    }
    else if(s=="img3.png"){
        b_img.src="img4.png"
    }
    else if(s=="img4.png"){
        b_img.src="img1.png"
    }
},250)

setTimeout(() => {
    clearInterval(boy)
    b_img.src="img5.png"
    b_img.style.width="125%";
},9000 );
setTimeout(() => {
    rose.style.display="block";
    rose.style.animation="drop ease-in 1s 1 forwards"
    
},10000 );
setTimeout(() => {
    let girl=setInterval(() => {
        let s=g_img.getAttribute("src") 
        if(s=="g_img1.png"){
            g_img.src="g_img2.png"
        }
        else if(s=="g_img2.png"){
            g_img.src="g_img3.png"
        }
        else if(s=="g_img3.png"){
            g_img.src="g_img4.png"
        }
        else if(s=="g_img4.png"){
            g_img.src="g_img5.png"
        }
    },150)
    
},11000 );

setTimeout(() => {
    b1.style.display="block"
    b1.style.animation="move-up 25s 1 forwards"
},15500);
setTimeout(() => {
    b2.style.display="block"
    b2.style.animation="move-up 15s 1 forwards"
},14000)
setTimeout(() => {
    b3.style.display="block"
    b3.style.animation="move-up 35s 1 forwards"
},12000)
setTimeout(() => {
    b4.style.display="block"
    b4.style.animation="move-up 15s 1 forwards"
},15000)
setTimeout(() => {
    b5.style.display="block"
    b5.style.animation="move-up 25s 1 forwards"
},13000)
setTimeout(() => {
    b6.style.display="block"
    b6.style.animation="move-up 35s 1 forwards"
},11000)