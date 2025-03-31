import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
function ALterSound() {

    const styleInput = "w-full bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const styleButton = "bg-white px-5 py-2 rounded-full font-bold text-black || cursor-pointer || shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105";

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button>Up</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>alter Sound</AlertDialogTitle>
                    <AlertDialogDescription>
                        <form action="" id="alter" className="flex flex-col gap-4">
                            <input type="text" name="" placeholder="Title Sound" className={styleInput} />
                            <input type="number" name="" placeholder="Author" className={styleInput} />
                            <input type="text" name="" placeholder="Time" className={styleInput} />
                            <input type="file" name="" className={styleInput} />
                        </form>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>close</AlertDialogCancel>
                    <button form="alter" className={styleButton}>Aplicar</button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ALterSound;