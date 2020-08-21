let count=0
 
const value=document.querySelector("#number");
const btn=document.querySelectorAll(".button");

btn.forEach(function(item){
    item.addEventListener("click",function(e){
        const style=e.currentTarget.classList;

        if(style.contains("decrement")){
            count--;
        }
       else  if(style.contains("increment")){
            count++;
        }
        else{
            count=0;
        }
      
    
        if(count>0){
            value.style.color="green";
        }
       if(count<0){
        value.style.color="red";
        }
        if(count===0){
            value.style.color="black";
            }
        
        value.innerHTML=count;


    });

});