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


// creo la scomparsa del testo 
setTimeout(function(){
    document.getElementById("hidden_number").innerText="";

    /* creo un secondo timeout in cui chiedo in input i numeri che sono stati inseriti */
        setTimeout(function(){
            let correct=0;
            let numsIndov=[]
            for(let i=0; i<5; i++){
                number=parseInt(prompt(`inserisci il  numero ${i+1}° che hai visualizzato`))
                if(randomNumbers[i]==number){
                    correct++;
                    numsIndov.push(randomNumbers[i]);
                }
            }
            if(numsIndov.length==0){
                document.getElementById("hidden_number").innerText=`I numeri erano questi:  ${randomNumbers}, Non ne hai indovinato neanche uno! Aggiorna la pagina e riprova!`
            }
            else{
                document.getElementById("hidden_number").innerText=`I numeri erano questi: ${randomNumbers}, ne hai indovinati ${correct} e sono i seguenti: ${numsIndov}!`
            }
           
         },1000)
  
},3000)

 