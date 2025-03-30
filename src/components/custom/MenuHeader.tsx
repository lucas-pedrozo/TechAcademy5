import { MenuButton } from "@/components/ui/Button"
import iconsMenu from "../../assets/icons/menu.svg"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Link } from "react-router-dom"

import logoGit from "../../assets/icons/github.svg"

function MenuHeader() {
    return (
        <Sheet>
            <SheetTrigger asChild className="flex items-center">
                <MenuButton>
                    <img src={iconsMenu} alt="Menu" />
                </MenuButton>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Harmonic Sound</SheetTitle>

                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div >
                        <ul className="flex flex-col gap-4 || text-center pb-5">
                            <li>
                                <SheetClose asChild>
                                    <Link to="/home" className="font-bold">HOME</Link>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <Link to="/sound" className="font-bold">SOUND</Link>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <Link to="/contact" className="font-bold">CONTACT</Link>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <Link to="/about" className="font-bold">ABOUT</Link>
                                </SheetClose>
                            </li>
                        </ul>

                        <a href="https://github.com/lucas-pedrozo/TechAcademy5.git" className="flex justify-center items-center gap-1.5 || px-5 py-2 rounded-full || font-semibold || shadow-[0_0_8px_rgba(22,186,203,0.4)] hover:shadow-[0_0_10px_rgba(22,186,203,1)] transition duration-300"
                            style={{ backgroundColor: '#6900e2', backgroundImage: 'linear-gradient(135deg, #6900e2 0%, #00e2bd 100%)' }}>
                            <img src={logoGit} alt="github" />
                            GitHub
                        </a>

                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MenuHeader;