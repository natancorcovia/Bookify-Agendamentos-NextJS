import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    // Apaga dados antigos para evitar duplicação
    await prisma.booking.deleteMany() // Apaga primeiro os bookings (filhos)
    await prisma.barbershopService.deleteMany() // Depois apaga os serviços
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
    // Nomes criativos para as barbearias
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
      "Corte e Estilo",
    ]

    // Endereços fictícios para as barbearias
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
      "Praça das Tesouras, 123",
    ]

    const services = [
      {
        name: "Corte de Cabelo",
        description: "Estilo personalizado com as últimas tendências.",
        price: 60.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Barba",
        description: "Modelagem completa para destacar sua masculinidade.",
        price: 40.0,
        imageUrl:
          "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
      },
      {
        name: "Pézinho",
        description: "Acabamento perfeito para um visual renovado.",
        price: 35.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
      {
        name: "Sobrancelha",
        description: "Expressão acentuada com modelagem precisa.",
        price: 20.0,
        imageUrl:
          "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
      },
      {
        name: "Massagem",
        description: "Relaxe com uma massagem revigorante.",
        price: 50.0,
        imageUrl:
          "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
      },
      {
        name: "Hidratação",
        description: "Hidratação profunda para cabelo e barba.",
        price: 25.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
    ]

    // Criar 10 barbearias com nomes e endereços fictícios
    const barbershops = []
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i]
      const address = addresses[i]
      const imageUrl = images[i]

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
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
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        })
      }

      barbershops.push(barbershop)
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect()
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error)
  }
}

seedDatabase()
