import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "../negocio/cadastro";

export default class geraPedidosProd extends Cadastro{
    private clientes: Array<Cliente>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
    }

    public cadastrar(): void {
        listaClientesComProdutosServicos.forEach( cliente => {
            let cpf,rg;

            if(cliente.nomeSocial != undefined){

                rg = new RG(cliente.rg.valor, cliente.rg.dataEmissao);
                cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);

                const NovoCliente = new Cliente(
                    cliente.nome,
                    cliente.nomeSocial,
                    cpf,       
                    cliente.genero
                );

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(cliente.telefone)

            

                // --- Serviço ---

                if(cliente.servicosConsumidos?.length){                    
                    cliente.servicosConsumidos.forEach( servico => {
                        const NovoServico = new Servico(
                            servico.nomeServico,
                            servico.descServico,
                            servico.precoServico,
                            servico.idServico
                        )    
                        NovoCliente.getServicosConsumidos.push(NovoServico)
                    })
                }

                // --- Produto ---

                if(cliente.produtosConsumidos?.length){
                    cliente.produtosConsumidos.forEach( produto => {
                        const NovoProduto = new Produto(
                                produto.nomeProduto,
                                produto.descricaoProduto,
                                produto.valorProduto,
                                produto.idProduto
                            );

                            NovoCliente.getProdutosConsumidos.push(NovoProduto)

                    })
                }               

                this.clientes.push(NovoCliente)

            // ------------------------- Se não informar o Nome Social... --------------------------------------------------
            }else{
                
                rg = new RG(cliente.rg.valor, cliente.rg.dataEmissao);
                cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);

                const NovoCliente = new Cliente(
                    cliente.nome,
                    'não informado',
                    cpf,       
                    cliente.genero
                );

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(cliente.telefone)
                

                if(cliente.servicosConsumidos?.length){                    
                    cliente.servicosConsumidos.forEach( servico => {
                        const NovoServico = new Servico(
                            servico.nomeServico,
                            servico.descServico,
                            servico.precoServico,
                            servico.idServico
                        )    
                        NovoCliente.getServicosConsumidos.push(NovoServico)
                    })
                }

                // --- Produto ---

                if(cliente.produtosConsumidos?.length){
                    cliente.produtosConsumidos.forEach( produto => {
                        const NovoProduto = new Produto(
                                produto.nomeProduto,
                                produto.descricaoProduto,
                                produto.valorProduto,
                                produto.idProduto
                            );

                            NovoCliente.getProdutosConsumidos.push(NovoProduto)

                    })
                }               

                this.clientes.push(NovoCliente)
            }
        })
    }
}

const listaClientesComProdutosServicos = [
    // --- Cliente 1 ---
    {
        nome: 'Amanda Souza Lima',
        nomeSocial: 'Amanda Lima',
        genero: 'F',
        cpf: {
            valor: '123.456.789-01',
            dataEmissao: new Date(2000, 5, 10)
        },
        rg: {
            valor: '12.345.678-1',
            dataEmissao: new Date(2000, 5, 10)
        },
        telefone: new Telefone('(11)', '91234-5678'),
        produtosConsumidos: [
            { nomeProduto: 'Água Micelar 6 em 1', descricaoProduto: 'Limpa, demaquila, tonifica, suaviza, refresca e hidrata a pele.', valorProduto: 37.00, idProduto: 1 },
            { nomeProduto: 'Sérum Vitamina C', descricaoProduto: 'Ilumina, uniformiza o tom da pele e combate radicais livres.', valorProduto: 65.00, idProduto: 3 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Limpeza de Pele', descServico: 'Limpeza profunda da pele do rosto.', precoServico: 75.00, idServico: 17 }
        ]
    },
    // --- Cliente 2 ---
    {
        nome: 'Bruno Henrique Silva',
        nomeSocial: 'Bruno Silva',
        genero: 'M',
        cpf: {
            valor: '234.567.890-12',
            dataEmissao: new Date(1999, 8, 22)
        },
        rg: {
            valor: '23.456.789-2',
            dataEmissao: new Date(1999, 8, 22)
        },
        telefone: new Telefone('(21)', '92345-6789'),
        produtosConsumidos: [
            { nomeProduto: 'Shampoo Matizador', descricaoProduto: 'Neutraliza tons amarelados em cabelos loiros e grisalhos.', valorProduto: 39.00, idProduto: 10 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Corte de Cabelo Masculino', descServico: 'Corte de cabelo tradicional para homens.', precoServico: 40.00, idServico: 1 },
            { nomeServico: 'Barba Completa', descServico: 'Aparar, desenhar e hidratar a barba.', precoServico: 35.00, idServico: 3 }
        ]
    },
    // --- Cliente 3 ---
    {
        nome: 'Carla Mendes Oliveira',
        nomeSocial: 'Carla Mendes',
        genero: 'F',
        cpf: {
            valor: '345.678.901-23',
            dataEmissao: new Date(2001, 2, 15)
        },
        rg: {
            valor: '34.567.890-3',
            dataEmissao: new Date(2001, 2, 15)
        },
        telefone: new Telefone('(31)', '93456-7890'),
        produtosConsumidos: [
            { nomeProduto: 'Máscara Facial de Argila Verde', descricaoProduto: 'Remove impurezas e controla a oleosidade da pele.', valorProduto: 29.90, idProduto: 2 },
            { nomeProduto: 'Creme Clareador de Manchas', descricaoProduto: 'Auxilia na uniformização da pele e clareamento de manchas.', valorProduto: 67.00, idProduto: 18 },
            { nomeProduto: 'Lenços Demaquilantes', descricaoProduto: 'Remove maquiagem com suavidade e praticidade.', valorProduto: 20.00, idProduto: 19 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Corte de Cabelo Feminino', descServico: 'Corte de cabelo estilizado para mulheres.', precoServico: 60.00, idServico: 2 }
        ]
    },
    // --- Cliente 4 ---
    {
        nome: 'Daniel Costa Ramos',
        nomeSocial: 'Daniel Ramos',
        genero: 'M',
        cpf: {
            valor: '456.789.012-34',
            dataEmissao: new Date(1998, 11, 5)
        },
        rg: {
            valor: '45.678.901-4',
            dataEmissao: new Date(1998, 11, 5)
        },
        telefone: new Telefone('(41)', '94567-8901'),
        produtosConsumidos: [
            { nomeProduto: 'Tônico Capilar Antiqueda', descricaoProduto: 'Estimula o crescimento e fortalece os fios.', valorProduto: 49.00, idProduto: 5 },
            { nomeProduto: 'Desodorante Natural em Creme', descricaoProduto: 'Proteção eficaz sem alumínio ou parabenos.', valorProduto: 31.00, idProduto: 7 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Barba Completa', descServico: 'Aparar, desenhar e hidratar a barba.', precoServico: 35.00, idServico: 3 },
            { nomeServico: 'Design de Barba', descServico: 'Modelagem e alinhamento da barba.', precoServico: 32.00, idServico: 19 }
        ]
    },
    // --- Cliente 5 ---
    {
        nome: 'Eduarda Martins Rocha',
        nomeSocial: 'Eduarda Rocha',
        genero: 'F',
        cpf: {
            valor: '567.890.123-45',
            dataEmissao: new Date(2002, 7, 19)
        },
        rg: {
            valor: '56.789.012-5',
            dataEmissao: new Date(2002, 7, 19)
        },
        telefone: new Telefone('(51)', '95678-9012'),
        produtosConsumidos: [
            { nomeProduto: 'Base Facial Hidratante', descricaoProduto: 'Uniformiza a pele com cobertura leve e efeito natural.', valorProduto: 59.00, idProduto: 11 },
            { nomeProduto: 'Batom Hidratante com FPS', descricaoProduto: 'Coloração suave com proteção solar para os lábios.', valorProduto: 22.00, idProduto: 16 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Manicure', descServico: 'Corte, lixamento e esmaltação das unhas das mãos.', precoServico: 35.00, idServico: 12 },
            { nomeServico: 'Pedicure', descServico: 'Corte, lixamento e esmaltação das unhas dos pés.', precoServico: 38.00, idServico: 13 },
            { nomeServico: 'Depilação', descServico: 'Depilação com cera quente ou fria.', precoServico: 55.00, idServico: 14 }
        ]
    },
    // --- Cliente 6 ---
    {
        nome: 'Felipe Augusto Dias',
        nomeSocial: 'Felipe Dias',
        genero: 'M',
        cpf: {
            valor: '678.901.234-56',
            dataEmissao: new Date(1997, 3, 28)
        },
        rg: {
            valor: '67.890.123-6',
            dataEmissao: new Date(1997, 3, 28)
        },
        telefone: new Telefone('(61)', '96789-0123'),
        produtosConsumidos: [
            { nomeProduto: 'Creme Noturno Revitalizante', descricaoProduto: 'Repara intensamente a pele durante o sono.', valorProduto: 72.00, idProduto: 4 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Massagem Relaxante', descServico: 'Massagem corporal para relaxamento.', precoServico: 80.00, idServico: 15 }
        ]
    },
    // --- Cliente 7 ---
    {
        nome: 'Gabriela Ferreira Pinto',
        nomeSocial: 'Gabriela Pinto',
        genero: 'F',
        cpf: {
            valor: '789.012.345-67',
            dataEmissao: new Date(2003, 1, 12)
        },
        rg: {
            valor: '78.901.234-7',
            dataEmissao: new Date(2003, 1, 12)
        },
        telefone: new Telefone('(71)', '97890-1234'),
        produtosConsumidos: [
            { nomeProduto: 'Creme Firmador para o Corpo', descricaoProduto: 'Melhora a elasticidade da pele com uso contínuo.', valorProduto: 58.00, idProduto: 8 },
            { nomeProduto: 'Óleo Corporal Relaxante', descricaoProduto: 'Com lavanda e camomila para relaxar o corpo e a mente.', valorProduto: 46.00, idProduto: 9 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Hidratação Capilar', descServico: 'Tratamento de hidratação profunda nos fios.', precoServico: 70.00, idServico: 5 },
            { nomeServico: 'Escova Progressiva', descServico: 'Alisamento temporário dos cabelos.', precoServico: 180.00, idServico: 6 }
        ]
    },
    // --- Cliente 8 ---
    {
        nome: 'Henrique Lopes Almeida',
        nomeSocial: 'Henrique Almeida',
        genero: 'M',
        cpf: {
            valor: '890.123.456-78',
            dataEmissao: new Date(1996, 9, 3)
        },
        rg: {
            valor: '89.012.345-8',
            dataEmissao: new Date(1996, 9, 3)
        },
        telefone: new Telefone('(81)', '98901-2345'),
        produtosConsumidos: [
            { nomeProduto: 'Shampoo Infantil Neutro', descricaoProduto: 'Fórmula suave, ideal para uso diário em crianças.', valorProduto: 22.00, idProduto: 6 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Escova Modeladora', descServico: 'Escova para modelar e finalizar penteados.', precoServico: 45.00, idServico: 20 }
        ]
    },
    // --- Cliente 9 ---
    {
        nome: 'Isabela Castro Figueiredo',
        nomeSocial: 'Isabela Castro',
        genero: 'F',
        cpf: {
            valor: '901.234.567-89',
            dataEmissao: new Date(2004, 4, 25)
        },
        rg: {
            valor: '90.123.456-9',
            dataEmissao: new Date(2004, 4, 25)
        },
        telefone: new Telefone('(91)', '99012-3456'),
        produtosConsumidos: [
            { nomeProduto: 'Máscara de Cílios Volume Extremo', descricaoProduto: 'Realça e define os cílios com efeito duradouro.', valorProduto: 35.00, idProduto: 12 },
            { nomeProduto: 'Esfoliante Corporal com Açúcar', descricaoProduto: 'Remove células mortas e deixa a pele macia e perfumada.', valorProduto: 42.00, idProduto: 13 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Peeling de Diamante', descServico: 'Esfoliação facial com microdermoabrasão.', precoServico: 110.00, idServico: 18 }
        ]
    },
    // --- Cliente 10 ---
    {
        nome: 'João Pedro Cardoso',
        nomeSocial: 'João Cardoso',
        genero: 'M',
        cpf: {
            valor: '012.345.678-90',
            dataEmissao: new Date(1995, 6, 14)
        },
        rg: {
            valor: '01.234.567-0',
            dataEmissao: new Date(1995, 6, 14)
        },
        telefone: new Telefone('(92)', '90123-4567'),
        produtosConsumidos: [
            { nomeProduto: 'Iluminador Facial em Bastão', descricaoProduto: 'Destaca os pontos altos do rosto com brilho natural.', valorProduto: 28.00, idProduto: 14 },
            { nomeProduto: 'Creme Modelador de Cachos', descricaoProduto: 'Define os cachos sem pesar e com ação anti-frizz.', valorProduto: 36.00, idProduto: 15 },
            { nomeProduto: 'Batom Hidratante com FPS', descricaoProduto: 'Coloração suave com proteção solar para os lábios.', valorProduto: 22.00, idProduto: 16 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Mechas', descServico: 'Mechas e luzes para realce dos fios.', precoServico: 150.00, idServico: 8 },
            { nomeServico: 'Coloração', descServico: 'Coloração completa dos cabelos.', precoServico: 120.00, idServico: 7 }
        ]
    },
    // --- Cliente 11 ---
    {
        nome: 'Karen Dias Barbosa',
        nomeSocial: 'Karen Barbosa',
        genero: 'F',
        cpf: {
            valor: '135.246.357-91',
            dataEmissao: new Date(2001, 10, 8)
        },
        rg: {
            valor: '13.524.635-1',
            dataEmissao: new Date(2001, 10, 8)
        },
        telefone: new Telefone('(93)', '91234-5678'),
        produtosConsumidos: [
            { nomeProduto: 'Gel de Limpeza Facial Oil-Free', descricaoProduto: 'Remove o excesso de oleosidade sem ressecar.', valorProduto: 30.00, idProduto: 17 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Botox Capilar', descServico: 'Redução de volume e frizz.', precoServico: 130.00, idServico: 10 }
        ]
    },
    // --- Cliente 12 ---
    {
        nome: 'Lucas Matheus Vieira',
        nomeSocial: 'Lucas Vieira',
        genero: 'M',
        cpf: {
            valor: '246.357.468-02',
            dataEmissao: new Date(1998, 12, 21)
        },
        rg: {
            valor: '24.635.746-2',
            dataEmissao: new Date(1998, 12, 21)
        },
        telefone: new Telefone('(94)', '92345-6789'),
        produtosConsumidos: [
            { nomeProduto: 'Creme Clareador de Manchas', descricaoProduto: 'Auxilia na uniformização da pele e clareamento de manchas.', valorProduto: 67.00, idProduto: 18 },
            { nomeProduto: 'Ampola de Brilho Capilar', descricaoProduto: 'Tratamento intensivo para brilho imediato nos cabelos.', valorProduto: 19.90, idProduto: 20 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Selagem Térmica', descServico: 'Tratamento para selar as cutículas dos fios.', precoServico: 110.00, idServico: 9 }
        ]
    },
    // --- Cliente 13 ---
    {
        nome: 'Mariana Gomes Teixeira',
        nomeSocial: 'Mariana Teixeira',
        genero: 'F',
        cpf: {
            valor: '357.468.579-13',
            dataEmissao: new Date(2000, 8, 30)
        },
        rg: {
            valor: '35.746.857-3',
            dataEmissao: new Date(2000, 8, 30)
        },
        telefone: new Telefone('(95)', '93456-7890'),
        produtosConsumidos: [
            { nomeProduto: 'Creme Firmador para o Corpo', descricaoProduto: 'Melhora a elasticidade da pele com uso contínuo.', valorProduto: 58.00, idProduto: 8 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Selagem Térmica', descServico: 'Tratamento para selar as cutículas dos fios.', precoServico: 110.00, idServico: 9 },
            { nomeServico: 'Escova Modeladora', descServico: 'Escova para modelar e finalizar penteados.', precoServico: 45.00, idServico: 20 }
        ]
    },
    // --- Cliente 14 ---
    {
        nome: 'Nicolas Rocha Pires',
        nomeSocial: 'Nicolas Pires',
        genero: 'M',
        cpf: {
            valor: '468.579.680-24',
            dataEmissao: new Date(1999, 2, 17)
        },
        rg: {
            valor: '46.857.968-4',
            dataEmissao: new Date(1999, 2, 17)
        },
        telefone: new Telefone('(96)', '94567-8901'),
        produtosConsumidos: [
            { nomeProduto: 'Desodorante Natural em Creme', descricaoProduto: 'Proteção eficaz sem alumínio ou parabenos.', valorProduto: 31.00, idProduto: 7 },
            { nomeProduto: 'Óleo Corporal Relaxante', descricaoProduto: 'Com lavanda e camomila para relaxar o corpo e a mente.', valorProduto: 46.00, idProduto: 9 },
            { nomeProduto: 'Ampola de Brilho Capilar', descricaoProduto: 'Tratamento intensivo para brilho imediato nos cabelos.', valorProduto: 19.90, idProduto: 20 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Sobrancelha Design', descServico: 'Design e limpeza de sobrancelhas.', precoServico: 28.00, idServico: 4 }
        ]
    },
    // --- Cliente 15 ---
    {
        nome: 'Olivia Martins Cunha',
        nomeSocial: 'Olivia Cunha',
        genero: 'F',
        cpf: {
            valor: '579.680.791-35',
            dataEmissao: new Date(2002, 11, 6)
        },
        rg: {
            valor: '57.968.079-5',
            dataEmissao: new Date(2002, 11, 6)
        },
        telefone: new Telefone('(97)', '95678-9012'),
        produtosConsumidos: [
            { nomeProduto: 'Lenços Demaquilantes', descricaoProduto: 'Remove maquiagem com suavidade e praticidade.', valorProduto: 20.00, idProduto: 19 }
        ],
        servicosConsumidos: [
            { nomeServico: 'Escova Modeladora', descServico: 'Escova para modelar e finalizar penteados.', precoServico: 45.00, idServico: 20 },
            { nomeServico: 'Limpeza de Pele', descServico: 'Limpeza profunda da pele do rosto.', precoServico: 75.00, idServico: 17 }
        ]
    }
]