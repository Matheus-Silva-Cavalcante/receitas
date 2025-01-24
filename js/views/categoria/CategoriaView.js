import { addEventListenerGlobal } from "../../core/helpers/eventsHelper.js";
import { abrirPopup, fecharPopup } from "../popup.js";

export default class CategoriaView{
    _categoriaService;

    constructor(categoriaService){
        this._categoriaService = categoriaService;
    }

    iniciar(){
        this._bindEvents()
    }

    _bindEvents(){
        addEventListenerGlobal('click', '#btnCategoriaVoltarPgPrincipal', () => this._btnVoltarPgPrincipal());

        addEventListenerGlobal('click', '#btnAdCategoria', () => this._btnAdCategoria());

        addEventListenerGlobal('click', '#btnCancelarCategoria', () => this._btnCacelar());
    }

    _btnVoltarPgPrincipal(){
        location.href = '../index.html'
    }

    _btnAdCategoria(){
        abrirPopup('.popup');
    }

    _btnCacelar(){
        fecharPopup('.popup');
    }
}