const formContainer=document.getElementById("form-container");
const loginBtn=document.getElementById("login");
const newArea=document.querySelector(".main");


loginBtn.addEventListener("click",function(){
    
    formContainer.style.display="none"; 

     newArea.style.display="block";

});


const depositeBtn=document.querySelector("#depositebtn");

depositeBtn.addEventListener("click",function(){
     
    const depositeValue=document.querySelector(".depositevalue").value;

    const depositeAmount=parseFloat(depositeValue);
    const currentDeposite=document.querySelector(".totaldeposite").innerText;
    const currentDepositeNumber=parseFloat(currentDeposite);
    const totalDeposite=depositeAmount+currentDepositeNumber;

    const currentBalace=document.querySelector(".totalbalace").innerText
    const  currentBalaceNumber=parseFloat(currentBalace);
    const totalBalace=depositeAmount+currentBalaceNumber;
    
    document.querySelector(".totaldeposite").innerText=totalDeposite;
    document.querySelector(".totalbalace").innerText=totalBalace;
    
});

const withdrawBtn=document.querySelector("#withdrawbtn");

withdrawBtn.addEventListener("click",function(){

    const withdrawValue=document.querySelector(".withdrawvalue").value;
    const withdrawAmount=parseFloat(withdrawValue);
    const currentWithdraw=document.querySelector(".totalwithdraw").innerText;
    const currentWithdrawNumber=parseFloat(currentWithdraw);
    
   

    const currentBalace=document.querySelector(".totalbalace").innerText
    const  currentBalaceNumber=parseFloat(currentBalace);
    
    
    

    if(currentBalaceNumber<=0 ){
        
        document.querySelector(".totalbalace").innerText=0;
        console.log(alert("No sufficient balace"));
       

    }else if(currentBalaceNumber>0 && withdrawAmount<=currentBalaceNumber){

        const totalwithdraw=withdrawAmount+currentWithdrawNumber;
        const totalBalace=currentBalaceNumber-withdrawAmount
       

        document.querySelector(".totalwithdraw").innerText=totalwithdraw;
        document.querySelector(".totalbalace").innerText=totalBalace;
       
    }else{
        console.log(alert("No sufficient balace"));

    }
    

    

    
});