let clicked = false

const botonId = document.getElementById('boton')

botonId.addEventListener("click", function(){
    clicked = true

    if (clicked){
        
        // alert("Hola")

        document.body.style.backgroundColor="white";

        document.getElementById('manzana').src = "./Img/Apple_logo_black.svg.png"

        // Me dio pereza, ni siquiera Apple tiene modo oscuro xD.
    }
});