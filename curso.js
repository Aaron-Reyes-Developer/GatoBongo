var foto = "derecha";
function MoverGato(){
    var cambiarImg = document.getElementById("imagen");
    var tecla = event.keyCode;
    


    if(foto == "derecha"){
        cambiarImg.src = "gato-mano-izquierda-arriba.jfif";
        foto = "izquierda"
    }else{
        cambiarImg.src = "gato-mano-derecha-arriba.jfif";
        foto = "derecha"
    }


    if(tecla == 39){

        console.log(tecla);
        cambiarImg.src = "gato-mano-derecha-arriba.jfif";
           
    
        

    }else if(tecla == 37){

        console.log(tecla);
        cambiarImg.src = "gato-mano-izquierda-arriba.jfif";
        
        
    }

}

window.onkeydown = MoverGato;