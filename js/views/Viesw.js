import { categoriaService, unidadeDeMedidaService, ingredienteService, receitaService, receitaIngredienteService } from "../core/services/services.js";
import CategoriaView from "./categoria/CategoriaView.js";
import CadastroIngredienteView from "./ingrediente/CadastroIngredienteView.js";
import IngredienteView from "./ingrediente/IngredienteView.js";
import CadastroReceitaView from "./receita/CadastroReceitaView.js";

import ReceitaView from "./receita/ReceitaView.js";
import UnidadeMedidaView from "./unidadeMedida/UnidadeMedidaView.js";


export const receita = new ReceitaView(receitaService);
export const cadastroReceita = new CadastroReceitaView(receitaService);

export const ingrediente = new IngredienteView(ingredienteService);
export const cadastroIngrediente = new CadastroIngredienteView(ingredienteService)

export const categoria = new CategoriaView(categoriaService);

export const unidadeMedida = new UnidadeMedidaView(unidadeDeMedidaService);
