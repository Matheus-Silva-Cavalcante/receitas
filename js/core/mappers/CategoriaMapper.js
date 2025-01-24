import CategoriaDTO from "../DTOs/CategoriaDTO.js";
import Categoria from "../entities/Categoria.js";

export default class CategoriaMapper{
    convertToEntity(dto){
        const entity = new Categoria()
        entity.id = dto.id;
        entity.nome = dto.nome;
        entity.descricao = dto.descricao;

        return entity;
    }

    convertToDTO(entity){
        const dto = new CategoriaDTO();
        dto.id = entity.id;
        dto.nome = entity.nome;
        dto.descricao = entity.descricao;

        return dto;
    }
}