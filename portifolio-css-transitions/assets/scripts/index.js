// fecha o Menu caso esteja aberto ao rolar a página, função sleep é genérica e está atrasando a ação em 0.1s:

let button = document.getElementById("toggle");

window.onscroll = function (){
    if (button.checked){
        sleep(100);
        button.checked = false;
    }
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}