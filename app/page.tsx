import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/BarbershopItem"

export default async function Home() {
  // Chama meu banco de dados
  const barbershop = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        {/* texto */}
        <h2 className="text-xl font-bold">Olá, Natan!</h2>
        <p>Segunda-feira, 07 de julho.</p>

        {/* busca */}
        <div className="mt-6 flex items-center gap-1">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* busca rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button variant="secondary" className="gap-2">
            <Image alt="cabelo" src="/cabelo.svg" width={16} height={16} />
            Cabelo
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image alt="barba" src="/barba.svg" width={16} height={16} />
            Barba
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image
              alt="acabamento"
              src="/acabamento.svg"
              width={16}
              height={16}
            />
            Acabamento
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image alt="barba" src="/barba.svg" width={16} height={16} />
            Barba
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image alt="barba" src="/barba.svg" width={16} height={16} />
            Barba
          </Button>
        </div>

        {/* banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende com os melhores!"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* agendamentos */}
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmados</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                    className="rounded-full"
                  />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>

              {/* direita */}
            </div>
            {/* direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Julho</p>
              <p className="text-2xl">07</p>
              <p className="text-sm">16:00</p>
            </div>
          </CardContent>
        </Card>
        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* populares */}
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
