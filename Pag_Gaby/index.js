
let letrasPattern=/^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;

//EVENT LISTENER
//document.getElementById("lastName").addEventListener("click",apellido);


document.getElementById("nombre").addEventListener("focusout",function(){ // funciones callback     
    console.log(document.getElementById("nombre").value);
    let elementoMensaje = document.getElementById("mensajenombreCompleto");
    let name = document.getElementById("nombre").value;
    if(nombre.length == 0){
        elementoMensaje.innerHTML = "Debes de poner tu Nombre completo";
    }else{
        elementoMensaje.innerHTML = "";
        let correctoNombre= letrasPattern.test(name);
        if(correctoNombre == false){
            elementoMensaje.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensaje.innerHTML = "";
        }
    }
});


var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let email = document.getElementById("email");

        console.log(emailPattern.test(email.value));

        for(let inputActual of arregloInputs){
            if(inputActual.validity.valid == false){
                inputActual.style.borderColor = "#F87D69";
                inputActual.style.borderWidth = "2px";
           
            }else{
                inputActual.style.borderWidth = "2px";
                inputActual.style.borderColor = "#1A6BF3";
            }
        } 


      let radios = document.getElementsByName("sexo");
        let i = 0;// yo la ocupo para saber si al menos hay uno seleccionado
        console.log(radios);
        for(let radio of radios){
            if(radio.checked == true){
                //i = i + 1 ; // cuando le pones ++ a una variable numérica suma 1 al valor actual
                i++;
            }
        }
        if(i == 0){
            alert("Debes seleccionar Sexo");
        }
        
        return;
