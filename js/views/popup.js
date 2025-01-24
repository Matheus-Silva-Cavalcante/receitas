export function abrirPopup(seletor){
    const popup = document.querySelector(seletor);

    popup.classList.remove('fechado');
}

export function fecharPopup(seletor){
    const popup = document.querySelector(seletor);

    popup.classList.add('fechado');
}
