import { MenuButton } from "@/components/ui/button"
import iconsMenu from "../../assets/icons/menu.svg"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "react-router-dom"

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
                        <ul className="flex flex-col gap-4 || text-center">
                            <li>
                                <Link to={'/home'}
                                    className={`font-bold || `}
                                >HOME</Link>
                            </li>
                            <li>
                                <Link to={'sound'}
                                    className={`font-bold || `}
                                >SOUND</Link>
                            </li>
                            <li>
                                <Link to={'contact'}
                                    className={`font-bold || `}
                                >CONTACT</Link>
                            </li>
                            <li>
                                <Link to={'about'}
                                    className={`font-bold ||`}
                                >ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MenuHeader;