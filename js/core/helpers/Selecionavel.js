export default class Selecionavel{
    _seletor;
    _classSelecionada = "selecionado";
    _callbackSelecionado;
    _callbackNenhumSelecionado;

    constructor(seletor, callbackSeleciondo, callbackNehumSelecionado){
        this._seletor = seletor;
        this._callbackSelecionado = callbackSeleciondo;
        this._callbackNenhumSelecionado = callbackNehumSelecionado;
    }

    _bindEvents(){

    }

    _selecionar(){
        
    }
}