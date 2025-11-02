
function saudacao(){
    document.getElementById("lista").innerHTML = "seja bem vindo ao site";
    if (saudacao == 'click'){
        document.getElementById("lista").innerHTML = "";
    }
}


function dois(){
    document.getElementById("lista").innerHTML = "";
}



function enviar() {
    const compromisso = document.getElementById("compromisso").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const lista = document.getElementById("dados");

    localStorage.setItem('itens',compromisso,data,horario)
    exibir('salvo')

    if (compromisso == " " || data == " " || horario == " "){
        window.alert("escreva antes de enviar!");
        return;
    }

    if (compromisso.length <= 10){
        window.alert("pequeno de mais, minimo de 10 linhas");
        return;
    }

    if (compromisso.length >= 20){
        window.alert("grande de mais!");
        return;
    }

    //criar a tabela//

    const li = document.createElement("li");
    li.innerHTML = `${compromisso} - ${data} - ${horario}`;

    lista.appendChild(li);
}


function aviso() {
    window.alert("site em desenvolvimento, desculpe-me pelo os bugs!")
}