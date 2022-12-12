//Aqui se escribirá el javascript.

let nombre = "Abraham"

nombre = nombre.toUpperCase();

let letra="";

let contaFinal=0;

for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let conTemp=0;
    for (let cont = 0; cont < nombre.length; cont++) {
        if(nombre.charAt(index) == nombre.charAt(cont))
            conTemp++
    }

    if (conTemp>contaFinal){
        contaFinal=conTemp
        letra = nombre.charAt(index);
    }
    
}

console.log(letra, contaFinal);

///////////////////////////////////////////////////////////////////


function nombre2(nombre2){


let reversa="";

    for (let index = nombre2.length; index > -1; index--){
        console.log(nombre2.charAt(index));

        reversa= reversa + nombre2.charAt(index);
   
    }
    return reversa;
}
