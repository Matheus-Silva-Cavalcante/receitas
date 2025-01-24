import Categoria from "./Categoria.js";
import ReceitaIngrediente from "./ReceitaIngrediente.js";

export default class Receita {
    get id(){
        return this._id;
    }
    set id (value){
        if(isNaN(value)) throw 'O id da Receita precisa ser um número';
        this._id = value;
    }

    get nome() {
        return this._nome;
    }
    set nome(value){
        if(typeof value != 'string') throw `O nome '${value}' precisa ser uma string.`;
        if(value.length <= 0) throw `O nome da Receita é obrigatório e precisa ter pelo menos um caractere`;

        this._nome = value;
    }

    get descricao(){
        return this._descricao;
    }
    set descricao(value){
        if(typeof value != 'string') throw 'A descrição precisa ser uma string.';
        if(value){
            if(!value) throw 'A descrição deve ser um texto longo e informativo.';
        }

        this._descricao = value;
    }

    get categoria(){
        return this._categoria;
    }
    set categoria(value){
        if(!value || value.constructor !== Categoria) throw 'O campo Categoria prcisa ser uma instância da classe ' + Categoria.name;

        this._categoria = value;
    }

    get tempoPreparo(){
        return this._tempoPreparo;
    }
    set tempoPreparo(value){
        if(isNaN(value)) throw 'Tempo de preparo precisa ser um número.';

        this._tempoPreparo = value;
    }

    get dificuldade(){
        return this._dificuldade;
    }
    set dificuldade(value){
        if(isNaN(value)) throw 'O grau de dificuldade deve ser um número.';
        if(value <= 0) throw `O número de dificuldade deve ser de 1 a 5 e não pode ser '${value}'.`;
        if(value > 5) throw `O número de dificuldade deve ser de 1 a 5 e não pode ser '${value}'.`;

        this._dificuldade = value;
    }

    // get ingredientes(){
    //     return this._ingredientes;
    // }
    // set ingredientes(value){
    //     if(!value || value.constructor !== Array) throw "A lista de Ingredientes precisa ser um array.";

    //     value.forEach(element => {
    //         this.addIngrediente(element);
    //     });
    // }

    // addIngrediente(receitaIngrediente){
    //     if(!receitaIngrediente || receitaIngrediente.constructor !== ReceitaIngrediente) throw 'O campo Ingrediente precisa ser uma instância da classe ' + ReceitaIngrediente.name;

    //     receitaIngrediente.receita = this

    //     this._ingredientes = this._ingredientes || [];
    //     this._ingredientes.push(receitaIngrediente);
    // }

    // removeIngrediente(idReceitaIngrediente){
    //     this._ingredientes.forEach((element, index) => {
    //         if(element.id == idReceitaIngrediente){
    //             delete this._ingredientes[index];
    //         }
    //     });
    // }

    get modoPreparo(){
        return this._modoPreparo;
    }
    set modoPreparo(value){
        if(typeof value != 'string') throw 'O modo de preparo precisa ser uma string.';
        if(value.length <= 0) throw 'O modo de preparo é obrigatório e precisa ser um texto longo e explicativo.';

        this._modoPreparo = value;
    }
}