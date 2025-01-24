import Ingredientes from "../entities/Ingredientes.js";
import { ingredienteRepository } from "../repositories/repositories.js";
import { receitaIngredienteService, unidadeDeMedidaService } from "./services.js";


export default class IngredienteService{
    _pegarUnidadeDeMedida(idIngredienteUnidadeDeMedida){
        const unidadeDeMedida = unidadeDeMedidaService.get(idIngredienteUnidadeDeMedida);

        if(!unidadeDeMedida) throw `Não exite Unidade de Medida com id:"${idIngredienteUnidadeDeMedida}".`;

        return unidadeDeMedida;
    }

    _verificarDados(ingredienteNome, idIngredienteUnidadeDeMedida){
        if(!ingredienteNome) throw 'Erro ao salvar: O nome do Ingrediente é obrigatório.';
        if(!idIngredienteUnidadeDeMedida) throw 'Erro ao salvar: A Unidade de Medida é obrigatório.';
    }

    salvar(ingredienteNome, idIngredienteUnidadeDeMedida){
        this._verificarDados(ingredienteNome, idIngredienteUnidadeDeMedida);

        const ingrediente = new Ingredientes();

        ingrediente.nome = ingredienteNome;
        ingrediente.unidadeMedidaPadrao = this._pegarUnidadeDeMedida(idIngredienteUnidadeDeMedida);

        const id = ingredienteRepository.save(ingrediente);

        return id;
    }

    alterar(id, ingredienteNome, idIngredienteUnidadeDeMedida){
        this._verificarDados(ingredienteNome, idIngredienteUnidadeDeMedida);

        const ingrediente = ingredienteRepository.get(id);

        if(!ingrediente) throw `Não exite Ingrediente com o id:"${id}".`;

        ingrediente.nome = ingredienteNome;
        ingrediente.unidadeMedidaPadrao = this._pegarUnidadeDeMedida(idIngredienteUnidadeDeMedida);

        ingredienteRepository.save(ingrediente);
    }

    get(id){
        const idIngrediente = ingredienteRepository.get(id);

        return idIngrediente;
    }

    deletar(id){
        const receitaIngrediente = receitaIngredienteService.listarPorIngrediente(id);

        if(receitaIngrediente.length > 0) throw `Erro ao deletar o Ingrediente: Não foi possivel deletar o Ingrediente com o id:"${id}", pois há "${receitaIngrediente.length}" Receita Ingrediente relacionado(s) a ela.`;

        ingredienteRepository.delete(id);
    }

    listar(){
        const ingrediente = ingredienteRepository.list();

        return ingrediente;
    }

    listarPorUnidadeMedida(idUnidadeDeMedida){
        return ingredienteRepository.list().filter(ingrediente => ingrediente.unidadeMedidaPadrao.id == idUnidadeDeMedida);
    }
}