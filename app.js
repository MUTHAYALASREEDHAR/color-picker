// let p=document.getElementById("b");
// let btn=document.getElementById("button");

// function a(){
//     h1.style.backgroundColor="VIOLET";
//     p.innerText="Good selection Sir/Madam you are selected VIOLET color now it looks super"
//     btn.style.backgroundColor="green"
// }
// function a1(){
//       btn.style.backgroundColor="green";
// }
// function b(){
//     h1.style.backgroundColor="INDIGO";
//     p.innerText="Good selection Sir/Madam you are selected INDIGO color now it looks super"

// }
// function c(){
//     h1.style.backgroundColor="BLUE";
//     p.innerText="Good selection Sir/Madam you are selected BLUE color now it looks super"

// }
// function d(){
//     h1.style.backgroundColor="GREEN";
//     p.innerText="Good selection Sir/Madam you are selected GREEN color now it looks super"

// }
// function e(){
//     h1.style.backgroundColor="YELLOW";
//     p.innerText="Good selection Sir/Madam you are selected YELLOW color now it looks super"

// }
// function f(){
//     h1.style.backgroundColor="ORANGE";
//     p.innerText="Good selection Sir/Madam you are selected ORANGE color now it looks super"

// }
// function g(){
//     h1.style.backgroundColor="red";
//     p.innerText="Good selection Sir/Madam you are selected RED color now it looks super"

// }


// function colorChanger(color){
//     h1.style.backgroundColor=color;
//     p.innerText="Good selection Sir/Madam you are selected VIOLET color now it looks super"

// }
// function colorChanger(color){
//     h1.style.backgroundColor=color;
//     p.innerText="Good selection Sir/Madam you are selected INDIGO color now it looks super"

// }

let h1 = document.querySelector("h1");
let p=document.getElementById("b");
let btn=document.querySelectorAll("button")

btn.forEach((btn)=>{
    btn.addEventListener("mouseover",()=>{
        btn.style.backgroundColor=btn.innerText
        p.innerText=`Click the button get background color as ${
            btn.innerText
        }`
    })
    btn.addEventListener("mouseout",()=>{
        btn.style.backgroundColor="tomato"
        p.innerText="Choose below buttons to get baground color"
    })
    btn.addEventListener("click",()=>{
        h1.style.backgroundColor=btn.innerText
        p.innerText=`Thank you for chooseing ${
            btn.innerText
        }`
    })
})

