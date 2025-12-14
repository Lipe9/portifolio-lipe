// DIGITAÇÃO INFINITA
const textos = ["Felipe Silva","Lipe Dev","Frontend Developer"];
const el = document.getElementById("digitando");

let i=0,j=0,apagando=false;

function digitar(){
  el.textContent = textos[i].substring(0,j);
  if(!apagando){
    if(j < textos[i].length) j++;
    else setTimeout(()=>apagando=true,1500);
  }else{
    if(j>0) j--;
    else{
      apagando=false;
      i=(i+1)%textos.length;
    }
  }
  setTimeout(digitar,apagando?80:120);
}
digitar();

// MENU MOBILE
const hamburger=document.getElementById("hamburger");
const nav=document.getElementById("nav");
const links=document.querySelectorAll(".menu-links a");

hamburger.onclick=()=>{
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
};

links.forEach(link=>{
  link.onclick=()=>{
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  };
});

// ACTIVE LINK
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    if(pageYOffset >= sec.offsetTop - 120){
      current=sec.getAttribute("id");
    }
  });
  links.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href")==="#"+current){
      a.classList.add("active");
    }
  });
});

// REVEAL
const reveals=document.querySelectorAll(".reveal");
function reveal(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-80){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);
