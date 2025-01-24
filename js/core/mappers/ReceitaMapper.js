import ReceitaTDO from "../DTOs/ReceitaDTO.js";
import Receita from "../entities/Receita.js";

export default class ReceitaMapper{
    _categoriaRepository;
    // _receitaIngredienteRepository;

    constructor(categoriaRepository, /*receitaIngredienteRepository*/){
        this._categoriaRepository = categoriaRepository;
        // this._receitaIngredienteRepository = receitaIngredienteRepository;
    }

    convertToEntity(dto){
        const entity = new Receita();
        entity.id = dto.id;
        entity.nome = dto.nome;
        entity.descricao = dto.descricao;
        entity.categoria = dto.categoria ? this._categoriaRepository.get(dto.categoria) : null;
        entity.tempoPreparo = dto.tempoPreparo;
        entity.dificuldade = dto.dificuldade;
        // entity.ingredientes = dto.ingredientes ? this._receitaIngredienteRepository.get(dto.ingredientes) : null;
        entity.modoPreparo = dto.modoPreparo;

        return entity;
    }

    convertToDTO(entity){
        const dto = new ReceitaTDO();
        dto.id = entity.id;
        dto.nome = entity.nome;
        dto.descricao = entity.descricao;
        dto.categoria = entity.categoria?.id;
        dto.tempoPreparo = entity.tempoPreparo;
        dto.dificuldade = entity.dificuldade;
        // dto.ingredientes = entity.ingredientes?.id;
        dto.modoPreparo = entity.modoPreparo;

        return dto;
    }
}