import Categoria from "../entities/Categoria.js";
import { categoriaRepository } from "../repositories/repositories.js";
import { receitaService } from "./services.js";

export default class CategoriaService{
    _verificarDados(categoriaNome){
        if(!categoriaNome) throw 'Erro ao salvar: O nome da Categoria é obrigatório.';
    }

    salvar(categoriaNome, categoriaDescricao){
        this._verificarDados(categoriaNome);

        const novaCategoria = new Categoria();

        novaCategoria.nome = categoriaNome;
        novaCategoria.descricao = categoriaDescricao;

        const id = categoriaRepository.save(novaCategoria);

        return id;
    }

    alterar(id, categoriaNome, categoriaDescricao){
        this._verificarDados(categoriaNome)

        const categoria = categoriaRepository.get(id);

        if(!categoria) throw `Não existe categoria com o id:"${id}".`;      

        categoria.nome = categoriaNome;
        categoria.descricao = categoriaDescricao;

        categoriaRepository.save(categoria);
    }

    get(id){
        const idCategoria = categoriaRepository.get(id);

        return idCategoria;
    }

    deletar(id){
        const receitas = receitaService.listarPorCategoria(id);

        if(receitas.length > 0) throw `Erro ao deletar a Categoria: Não foi possivel deletar a Categoria com o id:"${id}", pois há "${receitas.length}" Receita(s) relacionada(s) a ela.`;

        categoriaRepository.delete(id);
    }

    listar(){
        const categoria = categoriaRepository.list();

        return categoria;
    }
    
}