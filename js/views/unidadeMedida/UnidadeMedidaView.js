import { addEventListenerGlobal } from "../../core/helpers/eventsHelper.js";
import { unidadeDeMedidaService } from "../../core/services/services.js";
import { abrirPopup, fecharPopup } from "../popup.js";

export default class UnidadeMedidaView{
    _unidadeMedidaService

    constructor(unidadeMedidaService){
        this._unidadeMedidaService = unidadeMedidaService
    }

    iniciar(){
        this._bindEvents();

        this._listarUnidadeMedida();
    }

    _bindEvents(){
        addEventListenerGlobal('click', '#btnUnMedidaVoltarPgPrincipal', () => this._btnVoltarPgPrincipal());

        addEventListenerGlobal('click', '#btnAdCategoria', () => this._btnAdUnidadeMedida());

        addEventListenerGlobal('click', '#btnCancelarCategoria', () => this._btnCancelar());
    }

    _salvarUnidadeMedida(){

    }

    _editarUnidadeMedida(){

    }

    _excluirUnidadeMedida(){

    }

    _listarUnidadeMedida(){
        const unidadeMedida = unidadeDeMedidaService.listar();

        const listarUnidadeMedida = document.querySelector('.container-conteudo');

        listarUnidadeMedida.innerHTML = "";

        unidadeMedida.forEach(unidadeMedida => {
            listarUnidadeMedida.innerHTML += `
                <div class="botao-selecionavel conteudo" data-id="${unidadeMedida.id}">
                    <div class="area-btn-editar-excluir">
                        <button class="btn-editar-excluir botoes-acao icon-editor"></button>
                        <button class="btn-editar-excluir botoes-acao icon-cross"></button>
                    </div>

                    <div class="conteudo-informacao ">
                        <div class="conteudo-informacao-icon-titulo">
                            <img class="img-icons" src="../img/copo-de-medicao.png" alt="Foto de um copo de medida">
                            Unidade de Medida :
                        </div>

                        ${unidadeMedida.nome}
                    </div>

                    <div class="conteudo-informacao">
                        <div class="conteudo-informacao-icon-titulo">
                            <img class="img-icons" src="../img/forma-abreviada.png" alt="Foto de um documento referente a abreviação">
                            Abreviação :
                        </div>

                        ${unidadeMedida.abreviacao}
                    </div>
                </div>
            `;
        });
    }

    _btnVoltarPgPrincipal(){
        location.href = '../index.html';
    }

    _btnAdUnidadeMedida(){
        abrirPopup('.popup');
    }

    _btnCancelar(){
        fecharPopup('.popup');
    }
}