function solucao(precos) {
    let resultado = 0;
    let menor= precos[0];
    
  

   for(let i = 0; i < precos.length; i++){
              
       if(precos[i] < menor){
          menor = precos[i]
      }
        resultado = resultado + precos[i]
      
   }
    
          if(precos.length > 4){
        
        resultado = resultado - menor    
      
      
    }
     
    console.log(resultado)
    
}