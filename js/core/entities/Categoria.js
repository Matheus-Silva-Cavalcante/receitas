export default class Categoria{
    get id(){
        return this._id;
    }
    set id(value){
        if(isNaN(value)) throw 'O id de Categoria precisa ser um número.';

        this._id = value;
    }

    get nome(){
        return this._nome;
    }
    set nome(value){
        if(typeof value != 'string') throw 'O nome da Categoria precisa ser uma string.';
        if(value.length <= 0) throw 'O nome da Categoria é obrigatório e precisa ter pelo menos um caractere.';

        this._nome = value;
    }

    get descricao(){
        return this._descricao;
    }
    set descricao(value){
        if(typeof value != 'string') throw 'A descrição precisa ser uma string.';
        
        this._descricao = value;
    }
}