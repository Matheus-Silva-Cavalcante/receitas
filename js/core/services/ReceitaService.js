import Receita from "../entities/Receita.js";
import { receitaRepository } from "../repositories/repositories.js";
import { categoriaService, receitaIngredienteService } from "./services.js";

export default class ReceitaService{
    _pegarCategoria(idCategoria){
        const categoria = categoriaService.get(idCategoria);

        if(!categoria) throw `Não existe Categoria com id:"${idCategoria}".`;

        return categoria;
    }

    _verificarDados(receitaNome, idCategoria, tempoPreparo, dificuldadeReceita, modoPreparo){
        if(!receitaNome) throw 'Erro ao salvar: O nome da Receita é obrigatório';
        if(!idCategoria) throw 'Erro ao salvar: A Categoria é obrigatoria.';
        if(!tempoPreparo) throw 'Erro ao salvar: O Tempo de Preparo é obrigatório.';
        if(!dificuldadeReceita) throw 'Erro ao salvar: A Dificuldade da Receita é obrigatório.';
        if(!modoPreparo) throw 'Erro ao salvar: O Modo de Preparo é obrigatório.';
    }

    salvar(receitaNome, receitaDescricao, idCategoria, tempoPreparo, dificuldadeReceita, modoPreparo){
        this._verificarDados(receitaNome, idCategoria, tempoPreparo, dificuldadeReceita, modoPreparo);

        const receita = new Receita();

        receita.nome = receitaNome;
        receita.descricao = receitaDescricao;
        receita.categoria = this._pegarCategoria(idCategoria);
        receita.tempoPreparo = tempoPreparo;
        receita.dificuldade = dificuldadeReceita;
        receita.modoPreparo = modoPreparo;

        const id = receitaRepository.save(receita);
         
        return id;  
    }

    alterar(id, receitaNome, receitaDescricao, idCategoria, tempoPreparo, dificuldadeReceita, modoPreparo){
        this._verificarDados(receitaNome, idCategoria, tempoPreparo, dificuldadeReceita, modoPreparo);

        const receita = receitaRepository.get(id);
        console.log(receita)
 
        if(!receita) throw `Não existe Receita com o id:"${id}".`;

        receita.nome = receitaNome;
        receita.descricao = receitaDescricao;
        receita.categoria = this._pegarCategoria(idCategoria);
        receita.tempoPreparo = tempoPreparo;
        receita.dificuldade = dificuldadeReceita;
        receita.modoPreparo = modoPreparo;

        receitaRepository.save(receita);
    }

    get(id){
        const idReceita = receitaRepository.get(id);
        return idReceita
    }

    deletar(id){
        const receitaIngrediente = receitaIngredienteService.listarPorIdReceita(id);

        if(receitaIngrediente.length > 0) throw `Erro ao deletar a Receita: Não foi possivel deletar a Receita com o id:"${id}", pois há "${receitaIngrediente.length}" Receita Ingrediente(s) relaciondo(s) a ela.`;

        receitaRepository.delete(id);
    }

    listar(){
        const receita = receitaRepository.list();

        return receita;
    }

    listarPorCategoria(idCategoria){
        return receitaRepository.list().filter(receita => receita.categoria.id == idCategoria)
    }
}