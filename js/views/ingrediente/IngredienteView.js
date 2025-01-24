import { addEventListenerGlobal } from "../../core/helpers/eventsHelper.js";
import { abrirPopup, fecharPopup } from "../popup.js";

export default class IngredienteView{
    _ingredienteService;

    constructor(ingredienteServise){
        this._ingredienteService = ingredienteServise
    }

    iniciar(){
        this._bindEvents();
    }

    _bindEvents(){
        addEventListenerGlobal('click', '#btnIngredienteVoltarPgPrincipal', () => this._btnVoltarPgPrincipal());

        addEventListenerGlobal('click', '#btnAdIngredeinte', () => this._btnAdIngrediente());

        addEventListenerGlobal('click', '#btnCancelarIngrediente', () => this._btnCancelar());
    }

    _btnVoltarPgPrincipal(){
        location.href = "../index.html";
    }

    _btnAdIngrediente(){
        abrirPopup('.popup');

        // const pgSecundaria = document.querySelector('.popup-container');
        // pgSecundaria.classList.remove('fechado')
    }

    _btnCancelar(){
        fecharPopup('.popup');

        // const pgSecundaria = document.querySelector('.popup-container');
        // pgSecundaria.classList.add('fechado');
    }
}