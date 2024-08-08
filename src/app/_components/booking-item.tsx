import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const BookingItem = () => {
  return (
    <>
      {/* Agendamento */}
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendametos
      </h2>
      <Card className="">
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
    </>
  )
}

export default BookingItem
