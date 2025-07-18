import { Badge } from "./ui/badge"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"
import { Prisma } from "@prisma/client"
import { format, isFuture } from "date-fns"
import { ptBR } from "date-fns/locale"

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include: {
          barbershop: true
        }
      }
    }
  }>
}

// TODO: receber agendamento como prop
const BookingItem = ({ booking }: BookingItemProps) => {
  const isBookingConfirmed = isFuture(booking.date)

  return (
    <>
      <Card className="min-w-[90%]">
        <CardContent className="flex justify-between p-0">
          {/* esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge
              className="w-fit"
              variant={isBookingConfirmed ? "default" : "secondary"}
            >
              {isBookingConfirmed ? "Confirmado" : "Finalizado"}
            </Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={booking.service.barbershop.imageUrl}
                  className="rounded-full"
                />
              </Avatar>
              <p className="text-sm">{booking.service.barbershop.name}</p>
            </div>

            {/* direita */}
          </div>
          {/* direita */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm capitalize">
              {format(booking.date, "MMMM", { locale: ptBR })}
            </p>
            <p className="text-2xl">
              {format(booking.date, "dd", { locale: ptBR })}
            </p>
            <p className="text-sm">
              {format(booking.date, "HH:mm", { locale: ptBR })}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
