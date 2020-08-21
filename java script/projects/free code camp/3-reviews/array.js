//Give the smallest name of an array
function tinyFriend(names)
{  
     let index=[];
      if(names.length>0)
   {
    names.sort(function(a,b)
      {
        return a.length - b.length;
      });
      for (let i = 0; i < names.length; i++)
      {
          if(names[i].length> && min(names[i].length))
          { 
              index.push(names[i])

          }
      }
      return index;
   } 
   else
   {
      return 0;
   }
}
let names=["Anika","po","","Ruby","Totha","Tamim","Ar"];
//let names=[];
let smallestName=tinyFriend(names);
console.log("4.Smallest name from an array")
if(smallestName!=0)
{
   console.log(smallestName);
}
else
{
    console.log("Array is empty");
}