const colors=["red","green","rgba(255, 211, 15, 1)","#E70ED6"];

const btn=document.getElementById("button");
const color=document.getElementById("color")


btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor=colors[randomNumber];
    color.innerHTML=colors[randomNumber];

});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}