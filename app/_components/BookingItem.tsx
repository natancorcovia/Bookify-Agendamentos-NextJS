import { Badge } from "./ui/badge"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

// TODO: receber agendamento como prop
const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
