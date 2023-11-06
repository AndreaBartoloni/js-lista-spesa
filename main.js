const listaSpesa = ["pomodori", "insalata", "melanzane"];

let i = 0;
while(i < listaSpesa.length){
    let element = listaSpesa[i];
    document.getElementById("spesa").innerHTML = listaSpesa;
    console.log(element);
    i++;
}
