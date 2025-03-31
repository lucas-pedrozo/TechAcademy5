import { ButtonFiltro } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import FiltroContainer from "@/components/custom/FiltroContainer";

type props = {
    className?: string;
}

function Filtro({ className }: props) {
    return (
        <Sheet>
            <SheetTrigger asChild className="flex items-center">
                <ButtonFiltro className={className}>
                    Filter
                </ButtonFiltro>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Harmonic Sound</SheetTitle>
                </SheetHeader>

                <div className="grid gap-4">
                    <FiltroContainer />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Filtro;