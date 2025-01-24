import CategoriaService from "./CategoriaService.js";
import IngredienteService from "./IngredienteService.js";
import ReceitaIngredienteService from "./ReceitaIngredienteService.js";
import ReceitaService from "./ReceitaService.js";
import UnidadeDeMedidaService from "./unidadeDeMedidaService.js";

export const categoriaService = new CategoriaService();

export const unidadeDeMedidaService = new UnidadeDeMedidaService();

export const ingredienteService = new IngredienteService();

export const receitaService = new ReceitaService();

export const receitaIngredienteService = new ReceitaIngredienteService();
