import UnidadeDeMedida from "../entities/UnidadeDeMedida.js";
import { unidadeDeMedidaRepository } from "../repositories/repositories.js";
import { ingredienteService, receitaIngredienteService } from "./services.js";

export default class UnidadeDeMedidaService{
    _verificarDados(unidadeDeMedidaNome, unidadeDeMedidaAbreviacao){
        if(!unidadeDeMedidaNome) throw 'Erro ao salvar: O nome da Unidade de Medida é obrigatório.';
        if(!unidadeDeMedidaAbreviacao) throw 'Erro ao salvar: A Abreviação da Unidade de Medida é obrigatório.';
    }

    salvar(unidadeDeMedidaNome, unidadeDeMedidaAbreviacao){
        this._verificarDados(unidadeDeMedidaNome, unidadeDeMedidaAbreviacao);

        const unidadeDeMedida = new UnidadeDeMedida();

        unidadeDeMedida.nome = unidadeDeMedidaNome;
        unidadeDeMedida.abreviacao = unidadeDeMedidaAbreviacao;

        const id = unidadeDeMedidaRepository.save(unidadeDeMedida);

        return id;
    }

    alterar(id, unidadeDeMedidaNome, unidadeDeMedidaAbreviacao){
        this._verificarDados(unidadeDeMedidaNome, unidadeDeMedidaAbreviacao);

        const unidadeDeMedida = unidadeDeMedidaRepository.get(id);

        if(!unidadeDeMedida) throw `Não existe Unidade de Medida com o id:"${id}".`;

        unidadeDeMedida.nome = unidadeDeMedidaNome;
        unidadeDeMedida.abreviacao = unidadeDeMedidaAbreviacao;

        unidadeDeMedidaRepository.save(unidadeDeMedida);
    }

    get(id){
        const idUnidadeDeMedida = unidadeDeMedidaRepository.get(id);

        return idUnidadeDeMedida;
    }

    deletar(id){
        const ingrediente = ingredienteService.listarPorUnidadeMedida(id);

        

        if(ingrediente.length > 0) throw `Erro ao deletar a Unidade de Medida: Não foi possível deletar a Unidade de Medida com o id:"${id}", pois há "${ingrediente.length}" Ingrediente(s) relacionado(s) a ela.`;

        const receitaIngrediente = receitaIngredienteService.listarPorUnidadeDeMedida(id);

        if(receitaIngrediente.length > 0) throw `Erro ao deletar a Unidade de Medida: Não foi possível deletar a Unidade de Medida com o id:"${id}", pois há "${receitaIngrediente.length}" Receita Ingrediente(s) relacionado(s) a ela.`;

        unidadeDeMedidaRepository.delete(id);
    }

    listar(){
        const unidadeDeMedida = unidadeDeMedidaRepository.list();

        return unidadeDeMedida;
    }
}