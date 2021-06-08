function solucao(produtos) {
    let soma = 0;
     let resultado = {
        totalTop:0,
        percentual:0 
   }

    
	for (let i of produtos){
          let preco = i.preco
        if(preco >= 10000){
      
          resultado.totalTop = resultado.totalTop+preco
        }
        
        soma = soma + preco
    }
    


    
    resultado.percentual = resultado.totalTop / soma
    
    console.log(resultado)
    
}