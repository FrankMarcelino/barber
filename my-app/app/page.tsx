import { Search, SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  {
    /* <Header /> */
  }
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="">Olá, Ana Paula</h2>
        <p>Sábado, 08 de Fevereiro</p>
        <div className="intems-center flex gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image src="/espaco.jpg" fill className="object-cover" alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default Home
