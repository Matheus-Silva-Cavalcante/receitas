import UnidadeDeMedidaDTO from "../DTOs/UnidadeDeMedidaDTO.js";
import UnidadeDeMedida from "../entities/UnidadeDeMedida.js";

export default class UnidadeDeMedidaMapper{
    convertToEntity(dto){
        const entity = new UnidadeDeMedida();
        entity.id = dto.id;
        entity.nome = dto.nome;
        entity.abreviacao = dto.abreviacao;

        return entity;
    }

    convertToDTO(entity){
        const dto = new UnidadeDeMedidaDTO();
        dto.id = entity.id;
        dto.nome = entity.nome;
        dto.abreviacao = entity.abreviacao;

        return dto;
    }
}