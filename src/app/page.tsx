import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"

const Home = () => {
  return (
    <div>
      {/* Hedaer */}
      <Header />
      <div className="p-5">
        {/* Texto */}
        <h2 className="text-xl font-bold">Olá Matheus</h2>
        <p>Quarta-Feira, 07 de agosto</p>

        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..."></Input>
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Imagem */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamento */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="items-cneter flex gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* Direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">07</p>
              <p className="text-sm">15:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
