// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    // Apaga dados antigos para evitar duplicação
    await prisma.booking.deleteMany()
    await prisma.barbershopService.deleteMany()
    await prisma.barbershop.deleteMany()

    const images = [
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6HNUfsSGm5UutCwZ6JksPVI9ai7TH0n3cNDE8",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy657pbndtE4OcYIyQijKmLSWrRfJX9oHkFZu8l",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6vg4HPLMSHNxDAGtimhT67Xub1M3pJ8Vf2IZR",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6H2BUTLGm5UutCwZ6JksPVI9ai7TH0n3cNDE8",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6GnGyDRvbHfBlK7oJjPGvS0438cTQywhFdqaX",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6VlXj3tdjUbfoEu6SXY8AB4Tn3vw50NVs9z2W",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy61rWyUpNcW6If3xmPR8ln4oSewzYtJO2rHFNq",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6fasZombVuPG3B7LvqHmpyawQYWNxZ0ADt85R",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6g1eI3oQSEmRVlXbiwU7h5PnDtLeqJC4QITuj",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6kSC4nCHpduvY0nerlzXwOtg1xK8LADbyUEVR",
      "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
    ]

    const creativeNames = [
      "Raízes & Ramos",
      "Pipoca & Balão",
      "Butterfly Nail Art",
      "Central dos Pneus",
      "Água Cristalina",
      "Oficina do Motor",
      "Every Tatto Studio",
      "Lava Rápido Express",
      "Sabrina Lash Designer",
      "Petshop Banho e Tosa",
    ]

    const addresses = [
      "Avenida Jardins, 123",
      "Parque da Diversão, 456",
      "Rua da Estética, 789",
      "Travessia das Rodas, 101",
      "Alameda das águas, 202",
      "Praça dos Motores, 303",
      "Avenida das Agulhas, 404",
      "Rua água e Sabão, 505",
      "Travessa da Unhas Perfeitas, 606",
      "Rua Quinzinho de Barros, 707",
    ]

    const raizesRamosServices = [
      {
        name: "Corte de Grama",
        description:
          "Aparação uniforme da grama para manter seu jardim sempre limpo e bonito.",
        price: 60.0,
        imageUrl: "",
      },
      {
        name: "Poda de Árvores e Arbustos",
        description:
          "Modelagem e controle do crescimento de árvores e arbustos.",
        price: 100.0,
        imageUrl: "",
      },
      {
        name: "Plantio de Flores e Mudas",
        description:
          "Plantio e disposição estética de flores e plantas no jardim.",
        price: 80.0,
        imageUrl: "",
      },
      {
        name: "Adubação do Solo",
        description:
          "Aplicação de adubo orgânico ou químico para enriquecer o solo.",
        price: 40.0,
        imageUrl: "",
      },
      {
        name: "Capinagem",
        description:
          "Remoção de mato e ervas daninhas para evitar pragas e doenças.",
        price: 50.0,
        imageUrl: "",
      },
      {
        name: "Instalação de Sistema de Irrigação",
        description:
          "Montagem de sistema de irrigação para facilitar a manutenção do jardim.",
        price: 150.0,
        imageUrl: "",
      },
    ]

    const pipocaBalaoServices = [
      {
        name: "Aluguel de Brinquedos",
        description:
          "Cama elástica, piscina de bolinhas, escorregador e muito mais para animar a festa.",
        price: 200.0,
        imageUrl: "",
      },
      {
        name: "Decoração Temática",
        description:
          "Montagem de cenários com o tema preferido da criança, incluindo balões e painéis personalizados.",
        price: 450.0,
        imageUrl: "",
      },
      {
        name: "Buffet Infantil",
        description:
          "Serviço de comidinhas que as crianças amam: mini cachorro-quente, pipoca, algodão doce e sucos.",
        price: 600.0,
        imageUrl: "",
      },
      {
        name: "Animador de Festa",
        description:
          "Recreadores com atividades, brincadeiras e personagens para divertir a criançada.",
        price: 300.0,
        imageUrl: "",
      },
      {
        name: "Pintura Facial",
        description:
          "Pinturas artísticas no rosto com tinta atóxica e segura para crianças.",
        price: 120.0,
        imageUrl: "",
      },
      {
        name: "Mesa do Bolo",
        description:
          "Montagem completa da mesa principal com bolo cenográfico, doces personalizados e decoração.",
        price: 500.0,
        imageUrl: "",
      },
    ]

    const butterflyNailArt = [
      {
        name: "Alongamento de Unhas em Gel",
        description:
          "Unhas longas e resistentes com acabamento natural e duradouro.",
        price: 120.0,
        imageUrl: "",
      },
      {
        name: "Manicure Tradicional",
        description:
          "Corte, lixamento, cuticulagem e esmaltação simples com sua cor favorita.",
        price: 35.0,
        imageUrl: "",
      },
      {
        name: "Nail Art Personalizada",
        description:
          "Desenhos exclusivos, pedras e efeitos para unhas que chamam atenção.",
        price: 60.0,
        imageUrl: "",
      },
      {
        name: "Spa das Mãos",
        description:
          "Hidratação, esfoliação e massagem para mãos macias e renovadas.",
        price: 45.0,
        imageUrl: "",
      },
      {
        name: "Manutenção de Unhas em Gel",
        description:
          "Retoques e preenchimento para manter seu alongamento impecável.",
        price: 90.0,
        imageUrl: "",
      },
      {
        name: "Remoção de Alongamento",
        description:
          "Remoção segura do gel ou fibra, preservando a saúde das unhas naturais.",
        price: 40.0,
        imageUrl: "",
      },
    ]

    const centralDosPneus = [
      {
        name: "Troca de Pneu",
        description:
          "Substituição de pneus desgastados por novos com alinhamento básico.",
        price: 80.0,
        imageUrl: "",
      },
      {
        name: "Reparo de Furo",
        description:
          "Conserto rápido e seguro de furos em pneus de carro ou moto.",
        price: 25.0,
        imageUrl: "",
      },
      {
        name: "Alinhamento de Rodas",
        description:
          "Alinhamento para garantir estabilidade e durabilidade dos pneus.",
        price: 70.0,
        imageUrl: "",
      },
      {
        name: "Balanceamento de Rodas",
        description: "Evite trepidações com balanceamento adequado dos pneus.",
        price: 50.0,
        imageUrl: "",
      },
      {
        name: "Calibragem com Nitrogênio",
        description:
          "Calibragem dos pneus com nitrogênio para maior durabilidade.",
        price: 20.0,
        imageUrl: "",
      },
      {
        name: "Rodízio de Pneus",
        description:
          "Troca estratégica da posição dos pneus para desgaste uniforme.",
        price: 35.0,
        imageUrl: "",
      },
    ]

    const aguaCristalina = [
      {
        name: "Limpeza Completa da Piscina",
        description:
          "Remoção de folhas, detritos e aspiração do fundo da piscina.",
        price: 150.0,
        imageUrl: "",
      },
      {
        name: "Tratamento Químico da Água",
        description:
          "Aplicação de cloro, algicida e reguladores de pH para manter a água limpa e saudável.",
        price: 100.0,
        imageUrl: "",
      },
      {
        name: "Manutenção de Filtros e Bombas",
        description:
          "Limpeza e verificação de funcionamento dos equipamentos de filtragem.",
        price: 120.0,
        imageUrl: "",
      },
      {
        name: "Controle de pH e Cloro",
        description:
          "Medição e ajuste dos níveis ideais de pH e cloro da água.",
        price: 80.0,
        imageUrl: "",
      },
      {
        name: "Higienização de Bordas e Azulejos",
        description:
          "Escovação e limpeza profunda das bordas e paredes internas da piscina.",
        price: 90.0,
        imageUrl: "",
      },
      {
        name: "Visita Técnica Preventiva",
        description:
          "Inspeção geral para prevenir problemas e garantir o bom funcionamento da piscina.",
        price: 70.0,
        imageUrl: "",
      },
    ]

    const oficinaDoMotor = [
      {
        name: "Troca de Óleo",
        description:
          "Substituição do óleo do motor e verificação do filtro para melhor desempenho do veículo.",
        price: 120.0,
        imageUrl: "",
      },
      {
        name: "Revisão de Freios",
        description:
          "Inspeção e troca de pastilhas, discos e fluido de freio para sua segurança.",
        price: 250.0,
        imageUrl: "",
      },
      {
        name: "Alinhamento e Balanceamento",
        description:
          "Ajuste da geometria das rodas para evitar desgaste irregular dos pneus.",
        price: 150.0,
        imageUrl: "",
      },
      {
        name: "Troca de Correia Dentada",
        description:
          "Substituição preventiva da correia dentada para evitar danos ao motor.",
        price: 450.0,
        imageUrl: "",
      },
      {
        name: "Diagnóstico Eletrônico",
        description:
          "Leitura de códigos e análise computadorizada para identificar falhas no veículo.",
        price: 100.0,
        imageUrl: "",
      },
      {
        name: "Revisão Geral",
        description:
          "Check-up completo com troca de filtros, fluídos e verificação dos principais sistemas.",
        price: 500.0,
        imageUrl: "",
      },
    ]

    const everyTattoStudio = [
      {
        name: "Tatuagem Pequena",
        description:
          "Tatuagens delicadas de até 5cm, ideais para iniciantes ou detalhes minimalistas.",
        price: 200.0,
        imageUrl: "",
      },
      {
        name: "Tatuagem Média",
        description:
          "Tatuagens entre 6cm e 15cm com mais detalhes e sombreamento.",
        price: 400.0,
        imageUrl: "",
      },
      {
        name: "Tatuagem Grande",
        description:
          "Desenhos maiores e mais complexos, com múltiplas sessões se necessário.",
        price: 800.0,
        imageUrl: "",
      },
      {
        name: "Cobertura (Cover-up)",
        description:
          "Técnica para cobrir tatuagens antigas com novos desenhos personalizados.",
        price: 600.0,
        imageUrl: "",
      },
      {
        name: "Retoque de Tatuagem",
        description:
          "Refazimento de linhas ou preenchimento de cor em tatuagens desbotadas.",
        price: 150.0,
        imageUrl: "",
      },
      {
        name: "Sessão por Hora",
        description:
          "Orçamento por tempo para projetos maiores e mais artísticos.",
        price: 250.0,
        imageUrl: "",
      },
    ]

    const lavaRapidoExpress = [
      {
        name: "Lavagem Completa Externa",
        description: "Lavagem detalhada da lataria, rodas e vidros do veículo.",
        price: 80.0,
        imageUrl: "",
      },
      {
        name: "Lavagem Interna",
        description:
          "Limpeza completa do interior, incluindo aspirador, painéis e vidros internos.",
        price: 100.0,
        imageUrl: "",
      },
      {
        name: "Higienização de Estofados",
        description:
          "Limpeza profunda dos bancos com produtos específicos para remoção de manchas e odores.",
        price: 150.0,
        imageUrl: "",
      },
      {
        name: "Polimento da Lataria",
        description:
          "Restauração do brilho original com polimento profissional e proteção.",
        price: 250.0,
        imageUrl: "",
      },
      {
        name: "Vitrificação",
        description:
          "Aplicação de película protetora para maior durabilidade e brilho da pintura.",
        price: 500.0,
        imageUrl: "",
      },
      {
        name: "Lavagem de Motor",
        description:
          "Limpeza cuidadosa do compartimento do motor para manutenção e estética.",
        price: 120.0,
        imageUrl: "",
      },
    ]

    const sabrinaLashDesigner = [
      {
        name: "Alongamento de Cílios Clássico",
        description:
          "Aplicação de fios individuais para um efeito natural e elegante.",
        price: 150.0,
        imageUrl: "",
      },
      {
        name: "Alongamento de Cílios Volume Russo",
        description:
          "Aplicação de múltiplos fios finos para um efeito mais cheio e volumoso.",
        price: 250.0,
        imageUrl: "",
      },
      {
        name: "Reparo de Cílios",
        description: "Correção e complementação de cílios que perderam fios.",
        price: 120.0,
        imageUrl: "",
      },
      {
        name: "Remoção de Alongamento",
        description:
          "Retirada cuidadosa dos cílios aplicados para preservar os naturais.",
        price: 80.0,
        imageUrl: "",
      },
      {
        name: "Design de Sobrancelhas",
        description: "Modelagem personalizada para harmonizar o rosto.",
        price: 100.0,
        imageUrl: "",
      },
      {
        name: "Tintura de Cílios e Sobrancelhas",
        description: "Coloração para realçar o olhar de forma natural.",
        price: 90.0,
        imageUrl: "",
      },
    ]

    const petshopBanhoeTosa = [
      {
        name: "Banho Simples",
        description:
          "Banho com produtos neutros e água morna para o conforto do pet.",
        price: 40.0,
        imageUrl: "",
      },
      {
        name: "Tosa Higiênica",
        description:
          "Higienização das áreas íntimas para manter o pet limpo e saudável.",
        price: 35.0,
        imageUrl: "",
      },
      {
        name: "Tosa Completa",
        description: "Corte completo conforme a raça ou preferência do tutor.",
        price: 70.0,
        imageUrl: "",
      },
      {
        name: "Corte de Unhas",
        description:
          "Aparação cuidadosa das unhas para evitar ferimentos e desconfortos.",
        price: 20.0,
        imageUrl: "",
      },
      {
        name: "Limpeza de Ouvidos",
        description:
          "Higienização das orelhas com produtos específicos e seguros.",
        price: 25.0,
        imageUrl: "",
      },
      {
        name: "Hidratação de Pelagem",
        description:
          "Tratamento especial para manter os pelos macios e saudáveis.",
        price: 55.0,
        imageUrl: "",
      },
    ]

    // Array com todos os arrays de serviços, na ordem das barbearias
    const allServices = [
      raizesRamosServices,
      pipocaBalaoServices,
      butterflyNailArt,
      centralDosPneus,
      aguaCristalina,
      oficinaDoMotor,
      everyTattoStudio,
      lavaRapidoExpress,
      sabrinaLashDesigner,
      petshopBanhoeTosa,
    ]

    const barbershops = []

    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i]
      const address = addresses[i]
      const imageUrl = images[i]
      const services = allServices[i]

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl,
          phones: ["(11) 99999-9999", "(11) 99999-9999"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
        },
      })

      for (const service of services) {
        await prisma.barbershopService.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            imageUrl: service.imageUrl,
            barbershopId: barbershop.id,
          },
        })
      }

      barbershops.push(barbershop)
    }

    await prisma.$disconnect()
    console.log("Seed finalizado com sucesso!")
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error)
  }
}

seedDatabase()
