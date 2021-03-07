var pets = ['dog','fish','dog','cow','sheep','cow','fish','fish'];

var petcount = pets.reduce(function(obj, pet){
   console.log('value of obj',obj);
    console.log('value of array element', pet)
   if(!obj[pet]){
       obj[pet] =1
   } 
   else {
       obj[pet]++
   }
   return obj;
}, {});

console.log(petcount);
