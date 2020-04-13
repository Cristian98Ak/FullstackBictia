document.getElementById("uno").addEventListener("click", EjercicioUno);

function EjercicioUno(){
let y = prompt("Ingresa un numero negativo o positivo");
    if(y < 0){
        alert(`${y} Es un numero negativo`);
    }else{
        alert(`${y} Es un numero positivo`);
        }
}  

document.getElementById("dos").addEventListener("click", EjercicioDos);

function EjercicioDos(){
    let Personas = prompt("Ingrese cantidad de personas: ");
    for(i=1;i<=Personas;i++){
        var Edad = [prompt(`Ingrese La edad De la persona ${i}`)];
        var Edades = Edad.push(Edad);
    } 
    console.log(Edades);
    console.log(Edad);
}

document.getElementById("tres").addEventListener("click", EjercicioTres);

function EjercicioTres(){
    document.getElementById("insert").innerHTML = `00:00:00`;
    cont = 0;
    function reloj(){
        cont++;
       document.getElementById("insert").innerHTML = `00:00:${cont}`;
       if(cont > 59){
        clearInterval(intervalo);
        document.getElementById("insert").innerHTML = `00:1:00`;
        }
    }
    intervalo = setInterval(reloj, 1000);
    
    

}
