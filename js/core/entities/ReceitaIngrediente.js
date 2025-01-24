import Ingredientes from "./Ingredientes.js";
import Receita from "./Receita.js";
import UnidadeDeMedida from "./UnidadeDeMedida.js";

export default class ReceitaIngrediente{
    get id(){
        return this._id;
    }
    set id(value){
        if(isNaN(value)) throw 'O id da Receita Ingrediente precisa ser um número.';
        this._id = value;
    }

    get receita(){
        return this._receita;
    }
    set receita(value){
        if(!value || value.constructor !== Receita) throw 'O campo Receita precisaser uma instância da classe ' + Receita.name;
        
        this._receita = value
    }

    get ingrediente(){
        return this._ingrediente;
    }
    set ingrediente(value){
        if(!value || value.constructor !== Ingredientes) throw 'O campo Ingrediente precisa ser uma instância da classe ' + Ingredientes.name;

        this._ingrediente = value;
    }

    get unidadeMedida(){
        return this._unidadeMedida;
    }
    set unidadeMedida(value){
        if(!value || value.constructor !== UnidadeDeMedida) throw 'O campo Unidade de Medida precisa ser uma instância da classe ' + UnidadeDeMedida.name;

        this._unidadeMedida = value;
    }

    get quantidade(){
        return this._quantidade;
    }
    set quantidade(value){
        if(isNaN(value)) throw 'A Quantidade precisa ser um número.';        
        if(value <= 0) throw 'A Quantidade não pode ser menor ou igual a 0.';

        this._quantidade = value;
    }

    get observacao(){
        return this._observacao;
    }
    set observacao(value){
        if(typeof value != 'string') throw 'A Observação precisa ser uma string.';
        
        this._observacao = value;
    }
}