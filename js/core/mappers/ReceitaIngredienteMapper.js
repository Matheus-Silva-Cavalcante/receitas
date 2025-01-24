import ReceitaIngredienteDTO from "../DTOs/ReceitaIngredienteDTO.js";
import ReceitaIngrediente from "../entities/ReceitaIngrediente.js";

export default class ReceitaIngredienteMapper{
    _receitaRepository;
    _ingredienteRepository;
    _unidadeDeMedidaRepository;

    constructor(receitaRepository, ingredienteRepository, unidadeDeMedidaRepository){
        this._receitaRepository = receitaRepository;
        this._ingredienteRepository = ingredienteRepository;
        this._unidadeDeMedidaRepository = unidadeDeMedidaRepository;
    }

    convertToEntity(dto){
        const entity = new ReceitaIngrediente();
        entity.id = dto.id;
        entity.receita = dto.receita ? this._receitaRepository.get(dto.receita) : null;
        entity.ingrediente = dto.ingrediente ? this._ingredienteRepository.get(dto.ingrediente) : null;
        entity.unidadeMedida = dto.unidadeMedida ? this._unidadeDeMedidaRepository.get(dto.unidadeMedida) : null;
        entity.quantidade = dto.quantidade;
        entity.observacao = dto.observacao;

        return entity;
    }

    convertToDTO(entity){
        const dto = new ReceitaIngredienteDTO();
        dto.id = entity.id;
        dto.receita = entity.receita?.id;
        dto.ingrediente = entity.ingrediente?.id;
        dto.unidadeMedida = entity.unidadeMedida?.id;
        dto.quantidade = entity.quantidade;
        dto.observacao = entity.observacao;

        return dto;
    }
}