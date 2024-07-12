import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FC, SVGProps } from "react"


const Navigation: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <GamepadIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">GameShop</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Action
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Adventure
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Simulation
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            RPG
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Indie
          </Link>
        </nav>
        <div className="relative hidden items-center gap-4 md:flex">
          <Link href="#" className="relative" prefetch={false}>
            <ShoppingCartIcon className="h-6 w-6 text-muted-foreground" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
              3
            </Badge>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="flex flex-col items-start gap-4 p-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <GamepadIcon className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">GameShop</span>
              </Link>
              <nav className="grid gap-2">
                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                  Action
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                  Adventure
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                  Simulation
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                  RPG
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                  Indie
                </Link>
              </nav>
              <Link href="#" className="relative" prefetch={false}>
                <ShoppingCartIcon className="h-6 w-6 text-muted-foreground" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
                  3
                </Badge>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function GamepadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default Navigation;