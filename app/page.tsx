import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/BarbershopItem"
import { QuickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/BookingItem"
import Search from "./_components/Search"
import Link from "next/link"

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
        <div className="mt-6">
          <Search />
        </div>

        {/* busca rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {QuickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imgUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
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
        <BookingItem />
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
    </div>
  )
}
