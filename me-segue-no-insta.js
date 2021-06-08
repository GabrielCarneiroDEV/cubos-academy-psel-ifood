function solucao(largura, altura) {
    if (largura>altura){
        console.log("PAISAGEM")
    }else if(largura<altura){
        console.log("RETRATO")
    }else if (altura === largura){
        console.log("QUADRADA")
    }
    
}