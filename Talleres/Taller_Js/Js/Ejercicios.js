var ejercicio = prompt("Eliga cual ejercicio desea realizar: ");
switch (ejercicio) {
    case "1":
        let ExFinal = parseFloat(prompt("Ingrese nota del examen final: "));
        let TrFinal = parseFloat(prompt("Ingrese nota del trabajo final: "));
        let i = 1;
        for (let i = 1; i <= 3; i++) {
            var parcial = parseFloat(prompt(`Ingrese nota del ${i} parcial: `));
        }
        let a = ExFinal * .30;
        let b = TrFinal * .15;
        let c = parcial[0] + parcial[1] + parcial[2];
        let d = c * .55;
        var total = a + b + d;
        document.write(`La nota final de pepe es ${total}`);
        break;
    case "2":
        alert("DOS");
        break;    
    case "3":
        let cant = prompt("Ingrese cantidad de numeros que desea ingresar: ");
        let f = 0;
        for (let f = 0; f < cant; f++) {
            let num = prompt("Ingrese un numero: ");
            if(num % 2 == 0){
                var par = num;
            }else{
                var impar = num;
            }     
        }
        let parTot = par.length/ 100;
        let imparTot = impar.length / 100;
        let porPar = parTot * 100;
        let porImpar = imparTot * 100;
        alert(`El porcenta de numros pares es ${porPar} % y de numeros impares es  ${porImpar}%`);   
        break;
    case "4":
        let cual = prompt("Escriba 1 si desea ver los numeros del 1 al 100 o 2 si desea verlos del 101 al 200");
        if(cual == 1){
            let i = 0;
            for (let i = 0; i <= 100; i++) {
                document.write(`${i} <br>`);
            }
        }else{
            let i = 101;
            for (let i = 101; i <= 200; i++) {
                document.write(`${i} <br>`);
            }
        }
        break;
    case "5":
        alert("CINCO");
        break;    
    case "6":
        alert("SEIS");
        break;    
    case "7":
        let frase,
            inverso; 
        frase = prompt("Ingrese una frase o palabra");
        
        document.write(`${frase} <br>`);
        inverso  = frase.reverse();
        document.write(`tu frase al reves es ${inverso} `);
       
        break;

    default:
        alert("Opcion errada.");
        location.reload();
        break;
}