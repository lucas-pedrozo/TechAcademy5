import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

function Admin() {

    // separation of style components
    const styleCotainer = "bg-white/10 backdrop-blur-xl rounded-2xl border-1 border-white/50  || w-[46%] h-40 || flex justify-center items-center"
    const MotionStyleCont = "hover:scale-104 transition transform duration-300 hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
    const styleMain = "max-w-[1220px] min-h-[50vh] mx-auto p-2.5 || flex justify-center items-center";

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
    }, [])

    return (
        <main className={`${styleMain}`}>
            <div className="w-full flex flex-col justify-center">
                <div className="flex flex-wrap gap-5">

                    {/* routes Admin Author */}
                    <Link to={'/adminAuthor'} className={`${styleCotainer} ${MotionStyleCont}`} data-aos="fade-up">
                        <span>Adm Author</span>
                    </Link>

                    {/* routes Upload Sound */}
                    <Link to={'/uploadSound'} className={`${styleCotainer} ${MotionStyleCont}`} data-aos="fade-up">
                        <span>Upload Sound</span>
                    </Link>

                    {/* routes Admin Sound */}
                    <Link to={'/buscarSound'} className={`${styleCotainer} ${MotionStyleCont}`} data-aos="fade-up">
                        <span>Amd Sound</span>
                    </Link>

                    {/* routes Admin Category */}
                    <Link to={'/adminCategory'} className={`${styleCotainer} ${MotionStyleCont}`} data-aos="fade-up">
                        <span>Amd category</span>
                    </Link>

                </div>
            </div>
        </main>
    );
}

export default Admin; 