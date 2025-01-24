import { addEventListenerGlobal } from "../../core/helpers/eventsHelper.js";

export default class CadastroReceitaView{
    _cadastroReceitaService;

    constructor(cadastroReceitaService){
        this._cadastroReceitaService = cadastroReceitaService
    }

    iniciar(){
        this._bindEvents();
    }

    _bindEvents(){
        addEventListenerGlobal('click', '#btnCancelarReceita', () => this._btnCancelarReceita());

        addEventListenerGlobal('click', '#adMaisIngrediente', () => this._adicionarMaisIngrediente());
    }

    _adicionarMaisIngrediente(){
        const adIngrediente = document.querySelector(".area-ingredientes");

        adIngrediente.innerHTML +=`
            <div class="cadastro-dividido divisor-ingrediente">
                <button class="btn-cancelar-ingrediente icon-cross"></button>
                <div class="cadastro">
                    <label for="cadastroIngrediente">
                        Ingrediente :
                    </label>

                    <select class="input-textarea-select" id="cadastroIngrediente">
                        <option>Manteiga</option>
                        <option>Manteiga</option>
                        <option>Manteiga</option>
                        <option>Manteiga</option>
                    </select>
                </div>

                <div class="unidade-quantidade">
                    <div class="cadastro cadastro-limitar-inputs">
                        <label for="cadastroUnMedida">
                            Un. Medida :
                        </label>

                        <select class="input-textarea-select " id="cadastroUnMedida">
                            <option>Caixa</option>
                            <option>Colher de sopa</option>
                            <option>Caixa</option>
                        </select>
                    </div>

                    <div class="cadastro cadastro-limitar-inputs">
                        <label for="cadastroQuantidade">
                            Quantidade :
                        </label>

                        <input class="input-textarea-select" id="cadastroQuantidade" type="number">

                        <div class="alerta-campo-vazio" style="display: none;">
                            Qual é a quantidade de ingrediente?
                            <div class="icon-emoji-rindo"></div>
                        </div>
                    </div>
                </div>

                <div class="cadastro">
                    <label for="cadastroObservacao">
                        Observação :
                    </label>

                    <input class="input-textarea-select" id="cadastroObservacao" type="text" placeholder="Texto curto, opcional.">
                </div>
            </div>
        `
    }

    _btnCancelarReceita(){
        location.href = '../receitas/index.html';
    }
}