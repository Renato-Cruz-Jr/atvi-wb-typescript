import Servico from "../modelo/servico";
import Cadastro from "../negocio/cadastro";

export default class geraServico extends Cadastro {
    private servicos: Array<Servico>

    constructor( servicos:Array<Servico> ) {
        super()
        this.servicos = servicos
    }

    public cadastrar(): void {
        servList.forEach(servList => {
            let nomeServico, descServico, precoServico, idServico;
            
            nomeServico = servList.nomeServico;
            descServico = servList.descServico;
            precoServico = servList.precoServico;
            idServico = servList.idServico;  

            const NovoServico = new Servico(
                nomeServico,
                descServico,
                precoServico,
                idServico
            )
            this.servicos.push(NovoServico)

        });
    }
}

const servList = [
    {
        nomeServico: 'Corte de Cabelo Masculino',
        descServico: 'Corte de cabelo tradicional para homens.',
        precoServico: 40.00,
        idServico: 1
    },
    {
        nomeServico: 'Corte de Cabelo Feminino',
        descServico: 'Corte de cabelo estilizado para mulheres.',
        precoServico: 60.00,
        idServico: 2
    },
    {
        nomeServico: 'Barba Completa',
        descServico: 'Aparar, desenhar e hidratar a barba.',
        precoServico: 35.00,
        idServico: 3
    },
    {
        nomeServico: 'Sobrancelha Design',
        descServico: 'Design e limpeza de sobrancelhas.',
        precoServico: 28.00,
        idServico: 4
    },
    {
        nomeServico: 'Hidratação Capilar',
        descServico: 'Tratamento de hidratação profunda nos fios.',
        precoServico: 70.00,
        idServico: 5
    },
    {
        nomeServico: 'Escova Progressiva',
        descServico: 'Alisamento temporário dos cabelos.',
        precoServico: 180.00,
        idServico: 6
    },
    {
        nomeServico: 'Coloração',
        descServico: 'Coloração completa dos cabelos.',
        precoServico: 120.00,
        idServico: 7
    },
    {
        nomeServico: 'Mechas',
        descServico: 'Mechas e luzes para realce dos fios.',
        precoServico: 150.00,
        idServico: 8
    },
    {
        nomeServico: 'Selagem Térmica',
        descServico: 'Tratamento para selar as cutículas dos fios.',
        precoServico: 110.00,
        idServico: 9
    },
    {
        nomeServico: 'Botox Capilar',
        descServico: 'Redução de volume e frizz.',
        precoServico: 130.00,
        idServico: 10
    },
    {
        nomeServico: 'Unhas de Gel',
        descServico: 'Alongamento e esmaltação em gel.',
        precoServico: 90.00,
        idServico: 11
    },
    {
        nomeServico: 'Manicure',
        descServico: 'Corte, lixamento e esmaltação das unhas das mãos.',
        precoServico: 35.00,
        idServico: 12
    },
    {
        nomeServico: 'Pedicure',
        descServico: 'Corte, lixamento e esmaltação das unhas dos pés.',
        precoServico: 38.00,
        idServico: 13
    },
    {
        nomeServico: 'Depilação',
        descServico: 'Depilação com cera quente ou fria.',
        precoServico: 55.00,
        idServico: 14
    },
    {
        nomeServico: 'Massagem Relaxante',
        descServico: 'Massagem corporal para relaxamento.',
        precoServico: 80.00,
        idServico: 15
    },
    {
        nomeServico: 'Massagem Modeladora',
        descServico: 'Massagem para redução de medidas.',
        precoServico: 95.00,
        idServico: 16
    },
    {
        nomeServico: 'Limpeza de Pele',
        descServico: 'Limpeza profunda da pele do rosto.',
        precoServico: 75.00,
        idServico: 17
    },
    {
        nomeServico: 'Peeling de Diamante',
        descServico: 'Esfoliação facial com microdermoabrasão.',
        precoServico: 110.00,
        idServico: 18
    },
    {
        nomeServico: 'Design de Barba',
        descServico: 'Modelagem e alinhamento da barba.',
        precoServico: 32.00,
        idServico: 19
    },
    {
        nomeServico: 'Escova Modeladora',
        descServico: 'Escova para modelar e finalizar penteados.',
        precoServico: 45.00,
        idServico: 20
    }
]