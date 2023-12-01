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


/* crel la scomparsa del testo e chiedo al utente quali numeri sono stati mostrati */
setTimeout(function(){
    document.getElementById("hidden_number").innerText="";
        setTimeout(function(){
            let correct=0;
            for(let i=0; i<5; i++){
                number=parseInt(prompt(`inserisci il  numero ${i+1}° che hai visualizzato`))
                if(randomNumbers[i]==number){
                    correct++;
                }
            }
            document.getElementById("hidden_number").innerText=`${randomNumbers} i numeri erano questi, ne hai indovinati ${correct}`
         },1000)
},3000)

 