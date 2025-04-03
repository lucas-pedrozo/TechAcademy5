
import { Link } from "react-router-dom";

function Admin() {

    const SyCotainer = "bg-white/10 backdrop-blur-xl rounded-2xl border-1 border-white/50  || w-[50%] h-40 || flex justify-center items-center"

    const MotionSyCont = "hover:scale-104 transition transform duration-300 hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"

    return (

        <main className="max-w-[1220px] mx-auto p-2.5 min-h-[50vh]  || flex justify-center items-center ">

            <div className="flex flex-col justify-center gap-5 | w-full">

                <div className="flex gap-5">
                    <Link to={'/adminuser'} className={`${SyCotainer} ${MotionSyCont}`}>
                        <span className="">
                            User Administration
                        </span>
                    </Link>

                    <Link to={'/user'} className={`${SyCotainer} ${MotionSyCont}`}>
                        <span className="">
                            Adm Author
                        </span>
                    </Link>
                </div>

                <div className="flex gap-5">
                    <Link to={'/uploadSound'} className={`${SyCotainer} ${MotionSyCont}`}>
                        <span className="">
                            Upload Sound
                        </span>
                    </Link>

                    <Link to={'/buscarSound'} className={`${SyCotainer} ${MotionSyCont}`}>
                        <span className="">
                            Amd Sound
                        </span>
                    </Link>
                </div>
            </div >

        </main >
    );
}

export default Admin; 