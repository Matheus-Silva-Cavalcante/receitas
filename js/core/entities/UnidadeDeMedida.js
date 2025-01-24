export default class UnidadeDeMedida{
    get id(){
        return this._id;
    }
    set id(value){
        if(isNaN(value)) throw 'O id da Unidade de Medida precisa ser um número.';
        
        this._id = value
    }

    get nome(){
        return this._nome;
    }
    set nome(value){
        if(typeof value != 'string') throw 'O nome da Unidade de Medida precisa ser uma string.';
        if(value.length <= 0) throw 'O nome é obrigatório e precisa ter pelo menos um caractere.';

        this._nome = value;
    }

    get abreviacao(){
        return this._abreviacao;
    }
    set abreviacao(value){
        if(typeof value != 'string') throw 'A abreviação precisa ser uma string.';
        if(value.length <= 0) throw 'Abreviação é obrigatória e precisa ter pelo menos um caractere';

        this._abreviacao = value;
    }
}