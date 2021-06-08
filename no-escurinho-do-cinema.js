function solucao(obj) {
    
    if(obj.temIngresso ===false || obj.idade < obj.censura && obj.estaComPais===false){
        console.log("ACESSO NEGADO")
    }
	
   if(obj.temIngresso === true){
        
      if(obj.idade >= obj.censura ||  obj.estaComPais === true){
          
        if(obj.idade < 18 || obj.temCarteirinha === true){            
            console.log("MEIA")
            
        
        }else{            
            console.log("INTEIRA")
            
            
        
        }
        }
    }
   
}