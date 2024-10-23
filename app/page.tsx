import { SearchIcon } from "lucide-react"
import Header from "./_components/ui/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const home = () => {
  return (
    <div>
      {/* hedaer */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Frank!</h2>
        <p>Quarta-feira, 23 de outuvro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default home
