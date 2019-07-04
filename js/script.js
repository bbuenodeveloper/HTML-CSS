let buttons = document.querySelectorAll ("#produtos div button")
let meuArray = ["M1", "M2", "M3", "M4", "M5", "M6"]



for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function (){
        let texto = document.createElement("p")
        texto.innerHTML = meuArray[i];
        let div = this.parentNode;
        div.appendChild(texto)
    }
}

let hamb = document.querySelector("#mobile")
let listras = document.querySelector("#listras")
let fechar = document.querySelector("#fechar")


function exibir(){
    if (hamb.style.display === "none"){
        hamb.style.display = "block"
        fechar.style.display = "flex"
        listras.style.display="none"
        
    } else {
        hamb.style.display = "none"
        
}
}
listras.onclick = function(){
    exibir()
}

function apagar(){
    if (hamb.style.display === "block"){
        hamb.style.display = "none"
        listras.style.display = "flex"
        fechar.style.display = "none"
    }
}
fechar.onclick = function(){
    apagar()
}