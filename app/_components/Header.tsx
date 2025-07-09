import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { QuickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="Logo da página" src="/logo.svg" height={18} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
              <div className="flex items-center gap-3 border-b border-solid py-5">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
                </Avatar>
                <div>
                  <p className="font-bold">Natan Silva</p>
                  <p className="text-sm">natan@silva.com.br</p>
                </div>
              </div>
              {/* inicio e agendamento */}
              <div className="flex flex-col gap-1 border-b border-solid py-5">
                <SheetClose asChild>
                  <Button
                    className="justify-start gap-2"
                    variant="ghost"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon size={18} />
                      Início
                    </Link>
                  </Button>
                </SheetClose>

                <Button variant="ghost" className="justify-start gap-2">
                  <CalendarIcon size={18} />
                  Agendamentos
                </Button>
              </div>
              {/* botoes serviços */}
              <div className="flex flex-col gap-1 border-b border-solid py-5">
                {QuickSearchOptions.map((option) => (
                  <Button
                    key={option.title}
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    <Image
                      src={option.imgUrl}
                      alt={option.title}
                      width={18}
                      height={18}
                    />
                    {option.title}
                  </Button>
                ))}
              </div>
              <div className="flex flex-col gap-1 py-5">
                <Button variant="ghost" className="justify-start">
                  <LogOutIcon size={18} />
                  Sair da conta
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
