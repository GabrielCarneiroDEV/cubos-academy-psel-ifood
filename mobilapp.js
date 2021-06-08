function solucao(tempo, distancia) {
    let valor = 0;
    let centavos = 0;
	   if(tempo <= 5){
           centavos = 600
       }else if (tempo >=5 && tempo<=60){
           valor = tempo
           valor = valor + distancia* 0.50
           centavos = valor*100
       } else if(tempo>60){
           if(distancia<100){
               valor = distancia * 2
               
               
               centavos = valor * 100
           }else if (distancia > 100){
               valor = distancia *1.5
               
               centavos = valor *100
           }
       }

    
    console.log(centavos)
}