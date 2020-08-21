const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear();


const navToggler=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links=document.querySelector(".links");


navToggler.addEventListener("click",function(){
   
    const  containerHeight=linksContainer.getBoundingClientRect().height;
    console.log(containerHeight);
    const linkHeight=links.getBoundingClientRect().height;
    console.log(linkHeight);

    if(containerHeight===0){
        linksContainer.style.height=`${linkHeight}px`;

    }else{
        linksContainer.style.height=0;

    }
});

const nav=document.querySelector("#nav");
const topLink=document.querySelector(".top-link");

window.addEventListener("scroll",function(){

    const scrollHeight=window.pageYOffset;
    const navHeight=nav.getBoundingClientRect().height;

    if(scrollHeight>navHeight){
        nav.classList.add("fixed-nav");
    }else{
        nav.classList.remove("fixed-nav");
    }
    if(scrollHeight>500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});

const scrollLinks=document.querySelectorAll(".scroll-link");


scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id=e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id);

        const navHeight=nav.getBoundingClientRect().height;
        const containerHeight=linksContainer.getBoundingClientRect().height;

        const fixedNav=nav.classList.contains("fixed-nav");
        let position=element.offsetTop-navHeight;

        if(!fixedNav){
            position=position-navHeight;
        }
        if(navHeight>82){
            position=position+containerHeight;
        }


        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height=0;
 
    });
});