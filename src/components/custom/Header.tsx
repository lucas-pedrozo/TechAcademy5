import logoSite from "../../assets/image/Mask.png";
import logoGit from "@/assets/icons/github.svg"

// link para navegação do site no header
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import MenuHeader from "./MenuHeader";
import UserLoginActive from "./UserLoginActive";

const Header = () => {

    //animation zoom Link
    const MotionZoom = 'hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] || hover:scale-105 transition transform duration-300 || font-semibold text-white/50 hover:text-white';

    // motion header 
    const MotionHeader = 'animate-fade-down animate-duration-500 animate-ease-out animate-normal';

    // função para quando usuario estiver logado
    const isUserLogin = true;

    return (
        <div className={`px-2.5`}>
            <header className={`${MotionHeader} px-5 py-2.5 mx-auto mt-5 || flex justify-between items-center gap-5 || bg-[#232323]/40  backdrop-blur-xl || rounded-full  ||| min-[1000px]:max-w-[700px] `}>

                <nav className=" flex items-center gap-5">
                    <Link to={'/home'}>
                        <img src={logoSite} alt="Harmonic Sound" className="w-8 rounded-full " />
                    </Link>

                    <div className="hidden min-[1000px]:flex gap-5 ">
                        <Link to={'/home'} className={`${MotionZoom}`} >Home</Link>
                        <Link to={'sound'} className={`${MotionZoom}`} >Sound</Link>
                        <Link to={'contact'} className={`${MotionZoom}`} >Contact</Link>
                        <Link to={'about'} className={`${MotionZoom}`} >About</Link>
                    </div>
                </nav>

                {/* Link para User Link Login Conft User */}
                <div className="flex items-center gap-2">

                    <a href="https://github.com/lucas-pedrozo/TechAcademy5.git" className="hidden min-[500px]:flex items-center gap-1.5 || px-5 py-2 rounded-full || font-semibold || shadow-[0_0_8px_rgba(22,186,203,0.4)] hover:shadow-[0_0_10px_rgba(22,186,203,1)] transition duration-300"
                        style={{ backgroundColor: '#6900e2', backgroundImage: 'linear-gradient(135deg, #6900e2 0%, #00e2bd 100%)' }}>
                        <img src={logoGit} alt="github" />
                        GitHub
                    </a>

                    <div className={`${!isUserLogin ? 'hidden' : 'flex'}`}>
                        <UserLogin />
                    </div>

                    <div className={`${!isUserLogin ? 'flex' : 'hidden'}`}>
                        <UserLoginActive />
                    </div>

                    <div className="block min-[1000px]:hidden">
                        <MenuHeader />
                    </div>
                </div>
            </header >
        </div >
    );
}

export default Header;


