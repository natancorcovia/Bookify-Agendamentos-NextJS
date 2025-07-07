import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "./_components/ui/avatar"

export default function Home() {
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
        <Card className="mt-6">
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
      </div>
    </div>
  )
}
