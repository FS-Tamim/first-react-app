const btns=document.querySelectorAll(".tab-btn");
const content=document.querySelectorAll(".content");


btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const id=e.currentTarget.dataset.id;
         
         btns.forEach(function(btn){
             btn.classList.remove("active");
             e.currentTarget.classList.add("active");
        });
        content.forEach(function(cont){
            cont.classList.remove("active");
       });
       const element=document.getElementById(id);
       element.classList.add("active");


    });
});