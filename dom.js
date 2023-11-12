let btns = document.querySelectorAll("button");

for(btn of btns)
  //  btn.onclick= sayhello;
    //btn.onclick= call;
//}
//btn.addEventListener("click", sayhello );
//btn.addEventListener("click", call);
btn.addEventListener("mouseleave", fname);
console.log("you double click the mouse")

//console.dir(btn);
//btn.onclick= function(){
    //alert("button was working ");
//
//function sayhello(){
    //alert("hello")
//};
//function call(){
  //  alert("Iqra Bright Star School")
//};
 function fname(){
    alert("Ansar Ahmed")
 };
 
 btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomcolor = randomcolourgenerate;
    h3.innerText = randomcolor;
    console.log("colour updated");
    let div = document.querySelector("div");
    div.style.backgroundcolor = randomcolor
 });

 function randomcolourgenerate() {
    let red = Math.floor(math.random() * 255);
    let green = Math.floor(math.random() * 255);
    let blue = Math.floor(math.random() * 255);
    let color = `rgb(${red} ,${green}, ${blue})`;
    return color;

 }