"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const clickAndCopy = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado!")
  }
  return (
    <div className="flex justify-between" key={phone}>
      {/* esquerda */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">(15) 99999-9999</p>
      </div>
      {/* direita */}
      <div>
        <Button variant="outline" size="sm" onClick={() => clickAndCopy(phone)}>
          Copiar
        </Button>
      </div>
    </div>
  )
}

export default PhoneItem
