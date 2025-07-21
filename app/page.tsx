import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/BarbershopItem"
import { QuickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/BookingItem"
import Search from "./_components/Search"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_data/get-confirmed-booking"

export default async function Home() {
  const session = await getServerSession(authOptions)
  // Chama meu banco de dados
  const barbershop = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      <Header />
      <div className="p-5">
        {/* texto */}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "seja bem vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

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
        <div className="flex gap-4 overflow-auto whitespace-nowrap px-4 [&::-webkit-scrollbar]:hidden">
          {[
            "/banner-01.jpeg",
            "/banner-02.jpg",
            "/banner-01.jpeg",
            "/banner-02.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="relative mt-6 h-[150px] min-w-[90%] flex-shrink-0"
            >
              <Image
                alt="Promoções da semana!"
                src={src}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>

        {/* agendamentos */}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
              agendamentos
            </h2>

            <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((bookings) => (
                <BookingItem
                  key={bookings.id}
                  booking={JSON.parse(JSON.stringify(bookings))}
                />
              ))}
            </div>
          </>
        )}

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
