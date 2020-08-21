const questions=document.querySelectorAll(".question");

questions.forEach(function(question){
    const btn=question.querySelector(".button");

    btn.addEventListener("click",function(){
        console.log("bal");

        questions.forEach(function(item){
            if(item!=question){
                item.classList.remove("show-text");
            }
        });


        question.classList.toggle("show-text");

    });
});