import Produto from "../modelo/produto";
import Cadastro from "../negocio/cadastro";

export default class geraProduto extends Cadastro{
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public cadastrar(): void {
        Prodlist.forEach(Prodlist=>{
            let nomeProduto,descricaoProduto,valorProduto,idProduto

            nomeProduto = Prodlist.nomeProduto;
            descricaoProduto = Prodlist.descricaoProduto;
            valorProduto = Prodlist.valorProduto;
            idProduto = Prodlist.idProduto;

            const NovoProduto = new Produto(
                nomeProduto,
                descricaoProduto,
                valorProduto,
                idProduto
            );
            this.produtos.push(NovoProduto)

        })
    }

}

const Prodlist = [
    {
        nomeProduto: 'Água Micelar 6 em 1',
        descricaoProduto: 'Limpa, demaquila, tonifica, suaviza, refresca e hidrata a pele.',
        valorProduto: 37.00,
        idProduto: 1
    },
    {
        nomeProduto: 'Máscara Facial de Argila Verde',
        descricaoProduto: 'Remove impurezas e controla a oleosidade da pele.',
        valorProduto: 29.90,
        idProduto: 2
    },
    {
        nomeProduto: 'Sérum Vitamina C',
        descricaoProduto: 'Ilumina, uniformiza o tom da pele e combate radicais livres.',
        valorProduto: 65.00,
        idProduto: 3
    },
    {
        nomeProduto: 'Creme Noturno Revitalizante',
        descricaoProduto: 'Repara intensamente a pele durante o sono.',
        valorProduto: 72.00,
        idProduto: 4
    },
    {
        nomeProduto: 'Tônico Capilar Antiqueda',
        descricaoProduto: 'Estimula o crescimento e fortalece os fios.',
        valorProduto: 49.00,
        idProduto: 5
    },
    {
        nomeProduto: 'Shampoo Infantil Neutro',
        descricaoProduto: 'Fórmula suave, ideal para uso diário em crianças.',
        valorProduto: 22.00,
        idProduto: 6
    },
    {
        nomeProduto: 'Desodorante Natural em Creme',
        descricaoProduto: 'Proteção eficaz sem alumínio ou parabenos.',
        valorProduto: 31.00,
        idProduto: 7
    },
    {
        nomeProduto: 'Creme Firmador para o Corpo',
        descricaoProduto: 'Melhora a elasticidade da pele com uso contínuo.',
        valorProduto: 58.00,
        idProduto: 8
    },
    {
        nomeProduto: 'Óleo Corporal Relaxante',
        descricaoProduto: 'Com lavanda e camomila para relaxar o corpo e a mente.',
        valorProduto: 46.00,
        idProduto: 9
    },
    {
        nomeProduto: 'Shampoo Matizador',
        descricaoProduto: 'Neutraliza tons amarelados em cabelos loiros e grisalhos.',
        valorProduto: 39.00,
        idProduto: 10
    },
    {
        nomeProduto: 'Base Facial Hidratante',
        descricaoProduto: 'Uniformiza a pele com cobertura leve e efeito natural.',
        valorProduto: 59.00,
        idProduto: 11
    },
    {
        nomeProduto: 'Máscara de Cílios Volume Extremo',
        descricaoProduto: 'Realça e define os cílios com efeito duradouro.',
        valorProduto: 35.00,
        idProduto: 12
    },
    {
        nomeProduto: 'Esfoliante Corporal com Açúcar',
        descricaoProduto: 'Remove células mortas e deixa a pele macia e perfumada.',
        valorProduto: 42.00,
        idProduto: 13
    },
    {
        nomeProduto: 'Iluminador Facial em Bastão',
        descricaoProduto: 'Destaca os pontos altos do rosto com brilho natural.',
        valorProduto: 28.00,
        idProduto: 14
    },
    {
        nomeProduto: 'Creme Modelador de Cachos',
        descricaoProduto: 'Define os cachos sem pesar e com ação anti-frizz.',
        valorProduto: 36.00,
        idProduto: 15
    },
    {
        nomeProduto: 'Batom Hidratante com FPS',
        descricaoProduto: 'Coloração suave com proteção solar para os lábios.',
        valorProduto: 22.00,
        idProduto: 16
    },
    {
        nomeProduto: 'Gel de Limpeza Facial Oil-Free',
        descricaoProduto: 'Remove o excesso de oleosidade sem ressecar.',
        valorProduto: 30.00,
        idProduto: 17
    },
    {
        nomeProduto: 'Creme Clareador de Manchas',
        descricaoProduto: 'Auxilia na uniformização da pele e clareamento de manchas.',
        valorProduto: 67.00,
        idProduto: 18
    },
    {
        nomeProduto: 'Lenços Demaquilantes',
        descricaoProduto: 'Remove maquiagem com suavidade e praticidade.',
        valorProduto: 20.00,
        idProduto: 19
    },
    {
        nomeProduto: 'Ampola de Brilho Capilar',
        descricaoProduto: 'Tratamento intensivo para brilho imediato nos cabelos.',
        valorProduto: 19.90,
        idProduto: 20
    }
];