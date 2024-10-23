import { MenuIcon } from "lucide-react"
import { Card, CardContent } from "./card"
import { Button } from "./button"
import Image from "next/image"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="logo" src="/logo.png" width={120} height={18} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
