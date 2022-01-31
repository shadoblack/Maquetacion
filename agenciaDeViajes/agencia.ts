
let cumulo = document.getElementsByClassName("input_text");
let array

function registrarse(){
    cumulo = document.getElementsByClassName("input_text");
    console.log("en breve nos pondremos en contacto con usted. " );
    array = Array.from(cumulo);
    console.log(array);
    
    
}

function filtrar(){
    console.log("funciona");

    let filtrado= array.filter(destiny=>{
        return destiny.includes("mallorca","canarias","galicia","Mallorca","Canarias","Galicia");
    })
}