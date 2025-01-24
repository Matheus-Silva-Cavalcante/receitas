import { addEventListenerGlobal } from "./eventsHelper.js";

export default class Selecionavel{
    _seletor;
    _classSelecionada = "selecionado";
    _callbackSelecionado;
    _callbackNenhumSelecionado;

    constructor(seletor, callbackSeleciondo, callbackNehumSelecionado){
        this._seletor = seletor;
        this._callbackSelecionado = callbackSeleciondo;
        this._callbackNenhumSelecionado = callbackNehumSelecionado;

        this._bindEvents();
        this.atualizar();
    }

    _bindEvents(){
        addEventListenerGlobal('click', this._seletor, (evento) => this._selecionar(evento.target.closest(this._seletor)));
    }

    _selecionar(elemento){
        const estaSelecionado = elemento.classList.contains(this._classSelecionada);

        if (estaSelecionado) {
            elemento.classList.remove(this._classSelecionada);


            this._callbackNenhumSelecionado?.();
        } else {
            const outroElementoSelecionado = document.querySelectorAll(`.${this._classSelecionada}`);

            if (outroElementoSelecionado) {
                document.querySelectorAll(`.${this._classSelecionada}`).forEach(classAtiva => {
                    classAtiva.classList.remove(this._classSelecionada);
                });

                elemento.classList.add(this._classSelecionada);

                this._callbackSelecionado?.(elemento)
            }
        }
    }

    atualizar(){
        if (document.querySelectorAll(`${this._seletor}.${this._classSelecionada}`).length) {
            this._callbackSelecionado?.();
        } else {
            this._callbackNenhumSelecionado?.();
        }
    }
}