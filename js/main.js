//Aqui se escribirá el javascript.

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();


    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    let validos = 0;
    let idTimeOut;
    alertError.style.display="none";
    alertError.innerHTML="";

    console.log(exampleFormControlTextarea1.value.length);
    console.log("[" + exampleFormControlTextarea1.value.replaceAll(" " , "") + "]")

    if(exampleFormControlTextarea1.value.trim().replaceAll(" " , "").length < 20){
        alertError.innerHTML = "El mensaje dee contener 20 caracteres o más";
        alertError.style.display="block";
        exampleFormControlTextarea1.style.border = "solid red 1px";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
    }else{
        exampleFormControlTextarea1.style.border = "solid green 1px";
        validos ++
    }

    if(exampleFormControlInput1.value.match(emailRegex)== null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/> El correo electrónico no es válido"
        exampleFormControlInput1.style.border = "solid red 1px";
    }else{
        exampleFormControlInput1.style.border = "solid green 1px";
        validos ++
    }

    let rfcRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    exampleFormControlInput2.value = exampleFormControlInput2.value.toUpperCase();
    if(exampleFormControlInput2.value.match(rfcRegex)== null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/> El RFC  no es válido";
        exampleFormControlInput2.style.border = "solid red 1px";
    }else{
        exampleFormControlInput2.style.border = "solid green 1px";
        validos ++
    }


    if ((idTimeOut!=undefined)&& (idTimeOut!=null)) {
        clearTimeout(idTimeOut);
    }
   
    if (validos == 3) {
        idTimeOut = setTimeout(function(){
            exampleFormControlTextarea1.style.border = "";
            exampleFormControlInput1.style.border = "";
            exampleFormControlInput2.style.border = "";  
        },3000);
    }

});