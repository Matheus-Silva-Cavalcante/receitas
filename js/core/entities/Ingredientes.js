import UnidadeDeMedida from "./UnidadeDeMedida.js";

export default class Ingredientes{
    get id(){
        return this._id;
    }
    set id(value){
        if(isNaN(value)) throw 'O id do Ingrediente precisa ser um número.';
        this._id = value;
    }

    get nome(){
        return this._nome;
    }
    set nome(value){
        if(typeof value != 'string') throw 'O nome do Ingrediente precisa ser uma string.';
        if(value.length <= 0) throw 'O nome do Ingrediente é obrigatório e precisa ter pelo menos um caractere.';

        this._nome = value;
    }

    get unidadeMedidaPadrao(){
        return this._unidadeMedidaPadrao;
    }
    set unidadeMedidaPadrao(value){
        if(!value || value.constructor !== UnidadeDeMedida) throw 'O campo Unidade de Medida precisa ser uma instância da classe ' + UnidadeDeMedida.name;
        
        this._unidadeMedidaPadrao = value;
    }
}