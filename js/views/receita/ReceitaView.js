import { addEventListenerGlobal } from "../../core/helpers/eventsHelper.js";
import { abrirPopup, fecharPopup } from "../popup.js";

export default class ReceitaView{
    _receitaService;

    constructor(receitaService){
        this._receitaService = receitaService;
    }

    iniciar(){
        this._bindEvents();
    }

    _bindEvents(){
        addEventListenerGlobal('click', '#btnAdicionerReceita', () => this._btnAdiconarReceita());

        addEventListenerGlobal('click', '#abrirReceita', () => this._abrirReceita());

        addEventListenerGlobal('click', '#btnVoltarPgPrincipal', () => this._voltarReceita());

        addEventListenerGlobal('click', '#telaSecundariaAdReceita', () => this._btnAdiconarReceita());
    }

    _btnAdiconarReceita(){
        location.href = './adicionarreceita.html';
    }

    _abrirReceita(){
        abrirPopup('.popup');
    }

    _voltarReceita(){
        fecharPopup('.popup');
    }
}