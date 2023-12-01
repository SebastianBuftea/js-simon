 // creo una funzione che mi generi 5 numeri casuali
function arrayNumberGenerator(){
    let array=[];

    for(let i=0; i<5; i++){
        let numRand=0;
        let areIn=false;

         while(areIn==false){
             numRand = Math.floor(Math.random() * 100 )+1;
            if(!array.includes(numRand)){
                areIn=true;
            }
         }
         array.push(numRand);    
    }

   return array; 
} 

randomNumbers=arrayNumberGenerator()
//mostro i numeri sullo schermo
document.getElementById("hidden_number").innerText=randomNumbers;


setTimeout(function(){
    document.getElementById("hidden_number").innerText=""
   
},3000)

