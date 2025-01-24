// import { categoriaService, ingredienteService, receitaIngredienteService, receitaService, unidadeDeMedidaService } from "./core/services/services.js";


// // unidadeDeMedidaService.salvar('Colher de Sopa', 'Colher');
// // unidadeDeMedidaService.deletar('2');
// unidadeDeMedidaService.alterar('2', 'Colher de chá', 'Colher');
// console.log(unidadeDeMedidaService.listar());

// // categoriaService.salvar('Rápido e fácil', 'Preparação simples');
// // categoriaService.deletar(1);
// categoriaService.alterar('3', 'Dificil', 'Complicado mais possivel');
// console.log(categoriaService.get('2'));
// console.log(categoriaService.listar());

// // ingredienteService.salvar('Açucar', '2');
// ingredienteService.alterar('1', 'sal', '3');
// // console.log(ingredienteService.get('1'));
// // ingredienteService.deletar('1');
// console.log(ingredienteService.listar());


// // receitaService.salvar('brigadeiro de colher', 'O brigadeiro deve ser levado a geladeira', '3', '10', '1', "Coloque a manteiga em uma panela e espere derreter, depois Coloque o leite condesado e o chocolate em pó e deixe em fogo médio, deixe até quando estiver soltando da panela");
// // console.log(receitaService.get(2));
// // receitaService.deletar(3);
// receitaService.alterar(2, 'Brigadeiro branco', 'O brigadeiro deve ser levado a geladeira', '1', '10', '1', "Coloque a manteiga em uma panela e espere derreter, depois Coloque o leite condesado e o chocolate em pó e deixe em fogo médio, deixe até quando estiver soltando da panela");
// console.log(receitaService.listar());


// // receitaIngredienteService.salvar('2', '1', '7', '1', 'siga o passo a passo que é sucesso');
// console.log(receitaIngredienteService.listarPorIdReceita(3));
// console.log(receitaIngredienteService.get(2));
// // receitaIngredienteService.deletar(3);
// // receitaIngredienteService.alterar('5', '3', '4', '2', '1', 'Leva ao forno e fica de olho para não queimar.');
import * as viesw from "./views/Viesw.js";

export function iniciarView(nomeView) {
    const view = viesw[nomeView];

    if(!view) throw `Erro ao carregar view: Não existe interface com nome "${nomeView}"`;

    window.addEventListener('load', () =>{
        view.iniciar?.();
    })
}