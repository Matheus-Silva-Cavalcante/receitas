import IngredienteDTO from "../DTOs/IngredienteDTO.js";
import Ingredientes from "../entities/Ingredientes.js";

export default class IngredientesMapper{
    _unidadeDeMedidaRepository;

    constructor(unidadeDeMedidaRepository){
        this._unidadeDeMedidaRepository = unidadeDeMedidaRepository;
    }

    convertToEntity(dto){
        const entity = new Ingredientes();
        entity.id = dto.id;
        entity.nome = dto.nome;
        entity.unidadeMedidaPadrao = dto.unidadeMedidaPadrao ? this._unidadeDeMedidaRepository.get(dto.unidadeMedidaPadrao) : null;

        return entity;
    }

    convertToDTO(entity){
        const dto = new IngredienteDTO();
        dto.id = entity.id;
        dto.nome = entity.nome;
        dto.unidadeMedidaPadrao = entity.unidadeMedidaPadrao?.id;

        return dto;
    }
}