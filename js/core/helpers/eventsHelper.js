export function addEventListenerGlobal(tipoEvento, seletor, callback){
    window.addEventListener(tipoEvento, (evento) =>{
        const elemento = evento.target.closest(seletor);

        if(!elemento) return;

        if(!callback || typeof callback !== "function") return;

        callback(evento);
    })
}