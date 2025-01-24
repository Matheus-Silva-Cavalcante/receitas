import CategoriaMapper from "../mappers/CategoriaMapper.js";
import IngredientesMapper from "../mappers/IngredientesMapper.js";
import ReceitaIngredienteMapper from "../mappers/ReceitaIngredienteMapper.js";
import ReceitaMapper from "../mappers/ReceitaMapper.js";
import UnidadeDeMedidaMapper from "../mappers/UnidadeDeMedidaMapper.js";
import Repository from "./Repository.js";

const categoriaMapper = new CategoriaMapper();
export const categoriaRepository = new Repository(categoriaMapper, 'categoria');

const unidadeDeMedidaMapper = new UnidadeDeMedidaMapper();
export const unidadeDeMedidaRepository = new Repository(unidadeDeMedidaMapper, 'unidadeDeMedida');

const ingredienteMapper = new IngredientesMapper(unidadeDeMedidaRepository);
export const ingredienteRepository = new Repository(ingredienteMapper, 'ingrediente');

const receitaMapper = new ReceitaMapper(categoriaRepository, ingredienteRepository);
export const receitaRepository = new Repository(receitaMapper, 'receita');

const receitaIngredienteMapper = new ReceitaIngredienteMapper(receitaRepository, ingredienteRepository, unidadeDeMedidaRepository);
export const receitaIngredienteRepository = new Repository(receitaIngredienteMapper, 'receitaIngrediente');