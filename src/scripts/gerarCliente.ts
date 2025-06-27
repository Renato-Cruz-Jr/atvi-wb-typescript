import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";
import CPF from "../modelo/cpf";
import Cadastro from "../negocio/cadastro";
import Produto from "../modelo/produto";

export default class geraCliente extends Cadastro{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public cadastrar(): void {
        Clientlist.forEach(Clientlist=>{
            let nome,nomeSocial,genero,cpf,rg, telefone;

            if(Clientlist.nomeSocial != undefined){
                nome = Clientlist.nome;
                nomeSocial = Clientlist.nomeSocial;
                genero = Clientlist.genero;
                rg = new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao);
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao);
                telefone = Clientlist.telefone;

                const NovoCliente = new Cliente(
                    nome,
                    nomeSocial,
                    cpf,       
                    genero
                );
                

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(telefone)
                this.clientes.push(NovoCliente)

            } else{
                nome = Clientlist.nome;            
                genero = Clientlist.genero;
                rg.push(new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao))
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao)
                telefone.push(Clientlist.telefone);
    
                const NovoCliente = new Cliente(
                    nome,
                    'não informado',
                    genero,
                    cpf
                );
                this.clientes.push(NovoCliente)        
            }
        })
    }

}

const Clientlist = [
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
        telefone: new Telefone('(11)', '91234-5678')
    },
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
        telefone: new Telefone('(21)', '92345-6789')
    },
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
        telefone: new Telefone('(31)', '93456-7890')
    },
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
        telefone: new Telefone('(41)', '94567-8901')
    },
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
        telefone: new Telefone('(51)', '95678-9012')
    },
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
        telefone: new Telefone('(61)', '96789-0123')
    },
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
        telefone: new Telefone('(71)', '97890-1234')
    },
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
        telefone: new Telefone('(81)', '98901-2345')
    },
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
        telefone: new Telefone('(91)', '99012-3456')
    },
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
        telefone: new Telefone('(92)', '90123-4567')
    },
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
        telefone: new Telefone('(93)', '91234-5678')
    },
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
        telefone: new Telefone('(94)', '92345-6789')
    },
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
        telefone: new Telefone('(95)', '93456-7890')
    },
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
        telefone: new Telefone('(96)', '94567-8901')
    },
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
        telefone: new Telefone('(97)', '95678-9012')
    },
    {
        nome: 'Paulo Henrique Batista',
        nomeSocial: 'Paulo Batista',
        genero: 'M',
        cpf: {
            valor: '680.791.802-46',
            dataEmissao: new Date(1997, 7, 13)
        },
        rg: {
            valor: '68.079.180-6',
            dataEmissao: new Date(1997, 7, 13)
        },
        telefone: new Telefone('(98)', '96789-0123')
    },
    {
        nome: 'Quésia Lopes Fernandes',
        nomeSocial: 'Quésia Fernandes',
        genero: 'F',
        cpf: {
            valor: '791.802.913-57',
            dataEmissao: new Date(2003, 3, 2)
        },
        rg: {
            valor: '79.180.291-7',
            dataEmissao: new Date(2003, 3, 2)
        },
        telefone: new Telefone('(99)', '97890-1234')
    },
    {
        nome: 'Rafael Souza Tavares',
        nomeSocial: 'Rafael Tavares',
        genero: 'M',
        cpf: {
            valor: '802.913.024-68',
            dataEmissao: new Date(1996, 1, 25)
        },
        rg: {
            valor: '80.291.302-8',
            dataEmissao: new Date(1996, 1, 25)
        },
        telefone: new Telefone('(11)', '98901-2345')
    },
    {
        nome: 'Sabrina Costa Nunes',
        nomeSocial: 'Sabrina Nunes',
        genero: 'F',
        cpf: {
            valor: '913.024.135-79',
            dataEmissao: new Date(2004, 6, 18)
        },
        rg: {
            valor: '91.302.413-9',
            dataEmissao: new Date(2004, 6, 18)
        },
        telefone: new Telefone('(12)', '99012-3456')
    },
    {
        nome: 'Thiago Almeida Prado',
        nomeSocial: 'Thiago Prado',
        genero: 'M',
        cpf: {
            valor: '024.135.246-80',
            dataEmissao: new Date(1995, 4, 9)
        },
        rg: {
            valor: '02.413.524-0',
            dataEmissao: new Date(1995, 4, 9)
        },
        telefone: new Telefone('(13)', '90123-4567')
    },
    {
        nome: 'Ursula Mendes Braga',
        nomeSocial: 'Ursula Braga',
        genero: 'F',
        cpf: {
            valor: '135.246.357-91',
            dataEmissao: new Date(2001, 9, 27)
        },
        rg: {
            valor: '13.524.635-1',
            dataEmissao: new Date(2001, 9, 27)
        },
        telefone: new Telefone('(14)', '91234-5678')
    },
    {
        nome: 'Victor Hugo Barros',
        nomeSocial: 'Victor Barros',
        genero: 'M',
        cpf: {
            valor: '246.357.468-02',
            dataEmissao: new Date(1998, 10, 15)
        },
        rg: {
            valor: '24.635.746-2',
            dataEmissao: new Date(1998, 10, 15)
        },
        telefone: new Telefone('(15)', '92345-6789')
    },
    {
        nome: 'Wesley Santos Lima',
        nomeSocial: 'Wesley Lima',
        genero: 'M',
        cpf: {
            valor: '357.468.579-13',
            dataEmissao: new Date(2000, 12, 3)
        },
        rg: {
            valor: '35.746.857-3',
            dataEmissao: new Date(2000, 12, 3)
        },
        telefone: new Telefone('(16)', '93456-7890')
    },
    {
        nome: 'Xuxa Meneghel',
        nomeSocial: 'Xuxa',
        genero: 'F',
        cpf: {
            valor: '468.579.680-24',
            dataEmissao: new Date(1999, 5, 20)
        },
        rg: {
            valor: '46.857.968-4',
            dataEmissao: new Date(1999, 5, 20)
        },
        telefone: new Telefone('(17)', '94567-8901')
    },
    {
        nome: 'Yasmin Oliveira Souza',
        nomeSocial: 'Yasmin Souza',
        genero: 'F',
        cpf: {
            valor: '579.680.791-35',
            dataEmissao: new Date(2002, 2, 14)
        },
        rg: {
            valor: '57.968.079-5',
            dataEmissao: new Date(2002, 2, 14)
        },
        telefone: new Telefone('(18)', '95678-9012')
    },
    {
        nome: 'Zeca Pagodinho',
        nomeSocial: 'Zeca',
        genero: 'M',
        cpf: {
            valor: '680.791.802-46',
            dataEmissao: new Date(1997, 8, 7)
        },
        rg: {
            valor: '68.079.180-6',
            dataEmissao: new Date(1997, 8, 7)
        },
        telefone: new Telefone('(19)', '96789-0123')
    },
    {
        nome: 'Ana Paula Souza',
        nomeSocial: 'Ana Paula',
        genero: 'F',
        cpf: {
            valor: '791.802.913-57',
            dataEmissao: new Date(2003, 7, 29)
        },
        rg: {
            valor: '79.180.291-7',
            dataEmissao: new Date(2003, 7, 29)
        },
        telefone: new Telefone('(20)', '97890-1234')
    },
    {
        nome: 'Brenda Silva Costa',
        nomeSocial: 'Brenda Costa',
        genero: 'F',
        cpf: {
            valor: '802.913.024-68',
            dataEmissao: new Date(1996, 6, 11)
        },
        rg: {
            valor: '80.291.302-8',
            dataEmissao: new Date(1996, 6, 11)
        },
        telefone: new Telefone('(21)', '98901-2345')
    },
    {
        nome: 'Caio César Nogueira',
        nomeSocial: 'Caio Nogueira',
        genero: 'M',
        cpf: {
            valor: '913.024.135-79',
            dataEmissao: new Date(2004, 10, 23)
        },
        rg: {
            valor: '91.302.413-9',
            dataEmissao: new Date(2004, 10, 23)
        },
        telefone: new Telefone('(22)', '99012-3456')
    },
    {
        nome: 'Diana Torres Almeida',
        nomeSocial: 'Diana Almeida',
        genero: 'F',
        cpf: {
            valor: '024.135.246-80',
            dataEmissao: new Date(1995, 2, 16)
        },
        rg: {
            valor: '02.413.524-0',
            dataEmissao: new Date(1995, 2, 16)
        },
        telefone: new Telefone('(23)', '90123-4567')
    }
]