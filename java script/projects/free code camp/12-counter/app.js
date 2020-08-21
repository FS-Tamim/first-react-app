  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const deadline=document.querySelector(".deadline");
  const giveway=document.querySelector(".giveaway");
  const items=document.querySelectorAll(".deadline-format h4");
  
  const tempDate=new Date();
  const tempYear=tempDate.getFullYear();
  const tempMonth=tempDate.getMonth();
  const tempDay=tempDate.getDate();
  const futureDate=new Date(tempYear,tempMonth,tempDay+10,11,30,0);

  const year=futureDate.getFullYear();
  const hours=futureDate.getHours();
  const minutes=futureDate.getMinutes();
  const seconds=futureDate.getSeconds();
  const month=months[futureDate.getMonth()];
  const day=futureDate.getDate();
  const weekday=weekdays[futureDate.getDay()];


  giveway.innerHTML=`Giveaway Ends On  ${weekday}, ${day} ${month} ${year}, ${hours}:${minutes}am `;
 

  const futureTime=futureDate.getTime();
 

  function getRemaingTime(){
      const today=new Date().getTime();
      const t=futureTime-today;
      const oneday=24*60*60*1000;
      const onehour=60*60*1000;
      const oneminute=60*1000;

      let days=Math.floor(t/oneday); 
      let hour=Math.floor((t%oneday)/onehour);   
      let minute=Math.floor((t%onehour)/oneminute);
      let second=Math.floor((t%oneminute)/1000);

      const values=[days,hour,minute,second];

      function formate(item){
          if(item<10){
              return item=`0${item}`;
          }
          return item;
      }


      items.forEach(function(item,index){
          item.innerHTML=formate(values[index]);
      });


      if(t<0){
          clearInterval(countdown);
          deadline.innerHTML=`<h4 class="expired">Sorry this giveway has expired</h4>`;
      }
      
    
}
    
  const countdown=setInterval(getRemaingTime,1000);
  getRemaingTime();
