import ReceitaIngrediente from "../entities/ReceitaIngrediente.js";
import { receitaIngredienteRepository } from "../repositories/repositories.js";
import { ingredienteService, receitaService, unidadeDeMedidaService } from "./services.js";

export default class ReceitaIngredienteService{
    _pegarReceita(idReceita){
        const receita = receitaService.get(idReceita);

        if(!receita) throw `Não existe Receita com o id:"${idReceita}".`;

        return receita;
    }

    _pegarIngrediente(idIngrediente){
        const ingrediente = ingredienteService.get(idIngrediente);

        if(!ingrediente) throw `Não existe Ingrediente com id:"${idIngrediente}".`;

        return ingrediente;
    }

    _pegarUnidadeDeMedida(idUnidadeDeMedida){
        const unidadeDeMedida = unidadeDeMedidaService.get(idUnidadeDeMedida);

        if(!unidadeDeMedida) throw `Não existe Unidade de Medida com id:"${idUnidadeDeMedida}".`;

        return unidadeDeMedida;
    }

    _verificarDado(idReceita, idIngrediente, idUnidadeDeMedida, quantidade){
        if(!idReceita) throw `Erro ao salvar: A Receita é obrigatória.`;
        if(!idIngrediente) throw `Erro ao salvar: O Ingrediente é obrigatório.`;
        if(!idUnidadeDeMedida) throw `Erro ao salvar: A Unidade de Medida é obrigatória.`;
        if(!quantidade) throw `Erro ao salvar: O número de Quantidade é obritório.`;
    }

    salvar(idReceita, idIngrediente, idUnidadeDeMedida, quantidade, observacao){
        this._verificarDado(idReceita, idIngrediente, idUnidadeDeMedida, quantidade);

        const receitaIngrediente = new ReceitaIngrediente();

        receitaIngrediente.receita = this._pegarReceita(idReceita);
        receitaIngrediente.ingrediente = this._pegarIngrediente(idIngrediente);
        receitaIngrediente.unidadeMedida = this._pegarUnidadeDeMedida(idUnidadeDeMedida);
        receitaIngrediente.quantidade = quantidade;
        receitaIngrediente.observacao = observacao;

        const id = receitaIngredienteRepository.save(receitaIngrediente);

        return id;
    }

    alterar(id, idReceita, idIngrediente, idUnidadeDeMedida, quantidade, observacao){
        this._verificarDado(idReceita, idIngrediente, idUnidadeDeMedida, quantidade);

        const receitaIngrediente = receitaIngredienteRepository.get(id);

        if(!receitaIngrediente) throw `Não existe Receita Ingrediente com o id:${id}`;

        receitaIngrediente.receita = this._pegarReceita(idReceita);
        receitaIngrediente.ingrediente = this._pegarIngrediente(idIngrediente);
        receitaIngrediente.unidadeMedida = this._pegarUnidadeDeMedida(idUnidadeDeMedida);
        receitaIngrediente.quantidade = quantidade;
        receitaIngrediente.observacao = observacao;

        receitaIngredienteRepository.save(receitaIngrediente);
    }

    get(id){
        const idReceitaIngrediente = receitaIngredienteRepository.get(id);
        return idReceitaIngrediente;
    }

    deletar(id){
        receitaIngredienteRepository.delete(id);
    }

    listarPorIdReceita(idReceita){
        const receitaIngrediente = receitaIngredienteRepository.list().filter(item => item.receita.id == idReceita);

        return receitaIngrediente;
    }

    listarPorIngrediente(idIngrediente){
        return receitaIngredienteRepository.list().filter(receitaIngrediente => receitaIngrediente.ingrediente.id == idIngrediente);
    }

    listarPorUnidadeDeMedida(idUnidadeDeMedida){
        return receitaIngredienteRepository.list().filter(receitaIngrediente => receitaIngrediente.unidadeMedida.id == idUnidadeDeMedida);
    }
}