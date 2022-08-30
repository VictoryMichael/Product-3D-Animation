const card = document.querySelector('.card')
const container = document.querySelector('.container');
const title = document.querySelector("h1");
const image = document.querySelector('product img')


container.addEventListener("mousemove", (e) => {  
let xAxis = (window.innerWidth / 2 - e.pageX ) / 15;
let yAxis = (window.innerHeight / 2 - e.pageY ) / 15;

card.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});




//Animate in
container.addEventListener("mouseenter", (e) => {
card.style.transition = 'none';
title.style.transform = "translateZ(850px)";
});

// Animate out

container.addEventListener("mouseleave", (e) => {
card.style.transition = 'all 0.5s ease'
card.style.transform = `rotateY(0deg) rotateX(0deg)`



title.style.transform =  "translateZ(0px)";

});












