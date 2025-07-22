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
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6TR05wsEDMql9W0KacuNCEB1Z8VyeJ7L2ztrU",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6VVR3VfdjUbfoEu6SXY8AB4Tn3vw50NVs9z2W",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6hnzYIZirM9Pzux6kQCU7iYGftSay8v1cFHJN",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy680TLGry3B59213OSghAMJjtXfKbPcVD7dzqx",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy68NLMaX3B59213OSghAMJjtXfKbPcVD7dzqxZ",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy60eebI2LLuafPXTti2Q9yw5kpqvSmJVbCFYZB",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6oL64oN8GyxTZXEMj6en27tzqwbu5BmCpdkrR",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6rL14TAFCfmni1Ha2Z5XBzV6DerUqRwO4dJYl",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6Cuhs61kycoq4aBiKAYjEWZhvT1NL0rVwkGdg",
      "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6L9rwON9s6r9RLCk12IuaNtjwpVKThXFZozMy",
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
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6rbC31tAFCfmni1Ha2Z5XBzV6DerUqRwO4dJY",
      },
      {
        name: "Poda de Árvores e Arbustos",
        description:
          "Modelagem e controle do crescimento de árvores e arbustos.",
        price: 100.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy65P35LItE4OcYIyQijKmLSWrRfJX9oHkFZu8l",
      },
      {
        name: "Plantio de Flores e Mudas",
        description:
          "Plantio e disposição estética de flores e plantas no jardim.",
        price: 80.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6frK9h6bVuPG3B7LvqHmpyawQYWNxZ0ADt85R",
      },
      {
        name: "Adubação do Solo",
        description:
          "Aplicação de adubo orgânico ou químico para enriquecer o solo.",
        price: 40.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6dlo81Am8G4BdQZ6hkJprbzlUHOMv3FDwLsiq",
      },
      {
        name: "Capinagem",
        description:
          "Remoção de mato e ervas daninhas para evitar pragas e doenças.",
        price: 50.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6uiQup8ABCXDTcaQLVwf17Ub6mRyqnt2S8IsW",
      },
      {
        name: "Instalação de Sistema de Irrigação",
        description:
          "Montagem de sistema de irrigação para facilitar a manutenção do jardim.",
        price: 150.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6d1JOrSm8G4BdQZ6hkJprbzlUHOMv3FDwLsiq",
      },
    ]

    const pipocaBalaoServices = [
      {
        name: "Aluguel de Brinquedos",
        description:
          "Cama elástica, piscina de bolinhas, escorregador e muito mais para animar a festa.",
        price: 200.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy63kp5eHwx4rsWXqhlQEdNSuJY1jLcK3B6A7ao",
      },
      {
        name: "Decoração Temática",
        description:
          "Montagem de cenários com o tema preferido da criança, incluindo balões e painéis personalizados.",
        price: 450.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6X38IMQOoAtQLwTO8DWBub0Y2N1SFJIG56gr7",
      },
      {
        name: "Buffet Infantil",
        description:
          "Serviço de comidinhas que as crianças amam: mini cachorro-quente, pipoca, algodão doce e sucos.",
        price: 600.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6NcaNGY6MbTHVwun3KayfqNI5CmjFX74ZhDgM",
      },
      {
        name: "Animador de Festa",
        description:
          "Recreadores com atividades, brincadeiras e personagens para divertir a criançada.",
        price: 300.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6FSlrqkfBeTmEHYsDgW791yKcvLUqjI2JNZru",
      },
      {
        name: "Pintura Facial",
        description:
          "Pinturas artísticas no rosto com tinta atóxica e segura para crianças.",
        price: 120.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6y1LwCaPgi83tCTQRUa2oPczhVlNAfpHEkIMZ",
      },
      {
        name: "Mesa do Bolo",
        description:
          "Montagem completa da mesa principal com bolo cenográfico, doces personalizados e decoração.",
        price: 500.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy61B1RgfNcW6If3xmPR8ln4oSewzYtJO2rHFNq",
      },
    ]

    const butterflyNailArt = [
      {
        name: "Alongamento de Unhas em Gel",
        description:
          "Unhas longas e resistentes com acabamento natural e duradouro.",
        price: 120.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6HSY4uu3Gm5UutCwZ6JksPVI9ai7TH0n3cNDE",
      },
      {
        name: "Manicure Tradicional",
        description:
          "Corte, lixamento, cuticulagem e esmaltação simples com sua cor favorita.",
        price: 35.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy60qitYLLuafPXTti2Q9yw5kpqvSmJVbCFYZBx",
      },
      {
        name: "Nail Art Personalizada",
        description:
          "Desenhos exclusivos, pedras e efeitos para unhas que chamam atenção.",
        price: 60.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6wibaqf0kODN34rm6ES5vjwpZYx0sPWgdtUKG",
      },
      {
        name: "Spa das Mãos",
        description:
          "Hidratação, esfoliação e massagem para mãos macias e renovadas.",
        price: 45.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6fFv0a5bVuPG3B7LvqHmpyawQYWNxZ0ADt85R",
      },
      {
        name: "Manutenção de Unhas em Gel",
        description:
          "Retoques e preenchimento para manter seu alongamento impecável.",
        price: 90.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy69RwS6OadkJX6ESi9xgCDRBbsY1w0UTyonjvN",
      },
      {
        name: "Remoção de Alongamento",
        description:
          "Remoção segura do gel ou fibra, preservando a saúde das unhas naturais.",
        price: 40.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6dBz3ZaFm8G4BdQZ6hkJprbzlUHOMv3FDwLsi",
      },
    ]

    const centralDosPneus = [
      {
        name: "Troca de Pneu",
        description:
          "Substituição de pneus desgastados por novos com alinhamento básico.",
        price: 80.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6flu5debVuPG3B7LvqHmpyawQYWNxZ0ADt85R",
      },
      {
        name: "Reparo de Furo",
        description:
          "Conserto rápido e seguro de furos em pneus de carro ou moto.",
        price: 25.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6bMjpTsC7IatWeKTfsjDNMASn28qoGBk0zhRQ",
      },
      {
        name: "Alinhamento de Rodas",
        description:
          "Alinhamento para garantir estabilidade e durabilidade dos pneus.",
        price: 70.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6dA65hvm8G4BdQZ6hkJprbzlUHOMv3FDwLsiq",
      },
      {
        name: "Balanceamento de Rodas",
        description: "Evite trepidações com balanceamento adequado dos pneus.",
        price: 50.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6DwpfP8rQPBt2EJg3sFCwLN5SeXb9o8hR6U7z",
      },
      {
        name: "Calibragem com Nitrogênio",
        description:
          "Calibragem dos pneus com nitrogênio para maior durabilidade.",
        price: 20.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6bHQoqbHC7IatWeKTfsjDNMASn28qoGBk0zhR",
      },
      {
        name: "Rodízio de Pneus",
        description:
          "Troca estratégica da posição dos pneus para desgaste uniforme.",
        price: 35.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6KOjCpw9VEfxMSU9Ilg6NoKpQn2aFJReTGtdm",
      },
    ]

    const aguaCristalina = [
      {
        name: "Limpeza Completa da Piscina",
        description:
          "Remoção de folhas, detritos e aspiração do fundo da piscina.",
        price: 150.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6q0asSeTGPZJO7Qg1dvlzo5C2k3hauVBnMADf",
      },
      {
        name: "Tratamento Químico da Água",
        description:
          "Aplicação de cloro, algicida e reguladores de pH para manter a água limpa e saudável.",
        price: 100.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6SZnWsbO5L1DH7vdQy0i4zPnRUNw8gf2cxjEe",
      },
      {
        name: "Manutenção de Filtros e Bombas",
        description:
          "Limpeza e verificação de funcionamento dos equipamentos de filtragem.",
        price: 120.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6ad1EdKW9CfdqT81vwXknDZWPsigV4RbQxGOI",
      },
      {
        name: "Controle de pH e Cloro",
        description:
          "Medição e ajuste dos níveis ideais de pH e cloro da água.",
        price: 80.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy68OIqg83B59213OSghAMJjtXfKbPcVD7dzqxZ",
      },
      {
        name: "Higienização de Bordas e Azulejos",
        description:
          "Escovação e limpeza profunda das bordas e paredes internas da piscina.",
        price: 90.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6ErH1kgU2iSbvHN1Q4eCKcquxn6JUAVOZGkWR",
      },
      {
        name: "Visita Técnica Preventiva",
        description:
          "Inspeção geral para prevenir problemas e garantir o bom funcionamento da piscina.",
        price: 70.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy680Wh4ri3B59213OSghAMJjtXfKbPcVD7dzqx",
      },
    ]

    const oficinaDoMotor = [
      {
        name: "Troca de Óleo",
        description:
          "Substituição do óleo do motor e verificação do filtro para melhor desempenho do veículo.",
        price: 120.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6P2YW0tq5ZJBtDQTMYHdaEvpNsKzbFly9c6Sm",
      },
      {
        name: "Revisão de Freios",
        description:
          "Inspeção e troca de pastilhas, discos e fluido de freio para sua segurança.",
        price: 250.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6vDRrfRSHNxDAGtimhT67Xub1M3pJ8Vf2IZRC",
      },
      {
        name: "Alinhamento e Balanceamento",
        description:
          "Ajuste da geometria das rodas para evitar desgaste irregular dos pneus.",
        price: 150.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6EskY4u2iSbvHN1Q4eCKcquxn6JUAVOZGkWRt",
      },
      {
        name: "Troca de Correia Dentada",
        description:
          "Substituição preventiva da correia dentada para evitar danos ao motor.",
        price: 450.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6VjY1GndjUbfoEu6SXY8AB4Tn3vw50NVs9z2W",
      },
      {
        name: "Diagnóstico Eletrônico",
        description:
          "Leitura de códigos e análise computadorizada para identificar falhas no veículo.",
        price: 100.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6M0FVVMzoAqHWpzwjkOe9JNLFDnQgfdCuv34I",
      },
      {
        name: "Revisão Geral",
        description:
          "Check-up completo com troca de filtros, fluídos e verificação dos principais sistemas.",
        price: 500.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6EnCzSc2iSbvHN1Q4eCKcquxn6JUAVOZGkWRt",
      },
    ]

    const everyTattoStudio = [
      {
        name: "Tatuagem Pequena",
        description:
          "Tatuagens delicadas de até 5cm, ideais para iniciantes ou detalhes minimalistas.",
        price: 200.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy61W6SGUNcW6If3xmPR8ln4oSewzYtJO2rHFNq",
      },
      {
        name: "Tatuagem Média",
        description:
          "Tatuagens entre 6cm e 15cm com mais detalhes e sombreamento.",
        price: 400.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy69wdvTLadkJX6ESi9xgCDRBbsY1w0UTyonjvN",
      },
      {
        name: "Tatuagem Grande",
        description:
          "Desenhos maiores e mais complexos, com múltiplas sessões se necessário.",
        price: 800.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6HPeyf4Gm5UutCwZ6JksPVI9ai7TH0n3cNDE8",
      },
      {
        name: "Cobertura (Cover-up)",
        description:
          "Técnica para cobrir tatuagens antigas com novos desenhos personalizados.",
        price: 600.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6FCOBw0vfBeTmEHYsDgW791yKcvLUqjI2JNZr",
      },
      {
        name: "Retoque de Tatuagem",
        description:
          "Refazimento de linhas ou preenchimento de cor em tatuagens desbotadas.",
        price: 150.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6pDcoYIuglYuwFZiaDoRUVb8KPxOeBr73XjIM",
      },
      {
        name: "Sessão por Hora",
        description:
          "Orçamento por tempo para projetos maiores e mais artísticos.",
        price: 250.0,
        imageUrl:
          "https://yxtdichn8p.ufs.sh/f/cBFDB4RsNKy6HSQ22V9Gm5UutCwZ6JksPVI9ai7TH0n3cNDE",
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
