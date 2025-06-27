import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import MenuCliente from "./cases/menuCliente";
import MenuProduto from "./cases/menuProduto";
import MenuServico from "./cases/menuServico";
import MenuPedido from "./cases/menuPedido";
import MenuListagem from "./cases/menuListagem";
import MenuGerador from "./cases/menuGenerate";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções: \n`);

    // --- Menu ---
    console.log(`[1] Cliente. `);
    console.log(`[2] Produto. `);
    console.log(`[3] Serviço. `);
    console.log(`[4] Pedido. `);
    console.log(`[5] Listagem. `);
    console.log(`[6] Autocadastro. `);

    // --- Sair ---
    console.log();
    console.log(`[0] Sair \n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {

        case 1:
            let testeCli = new MenuCliente(empresa)
            testeCli.listar()
            break;

        case 2:
            let testeProd = new MenuProduto(empresa)
            testeProd.listar()
            break;

        case 3:
            let testeServ = new MenuServico(empresa)
            testeServ.listar()
            break;

        case 4:
            let testePedido = new MenuPedido(empresa)
            testePedido.listar()
            break;

        case 5:
            let testeListagem = new MenuListagem(empresa)
            testeListagem.listar()
            break;

        case 6:
            let testeAutocadastro = new MenuGerador(empresa)
            testeAutocadastro.listar()
            break;

        case 0:
            execucao = false
            console.log(`\nAté mais \n`)
            break;

        default:
            console.log(`\nOperação não entendida :(`)
    }
}