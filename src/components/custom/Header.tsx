import logoSite from "../../assets/image/Mask.png";

// link para navegação do site no header
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import MenuHeader from "./MenuHeader";
import UserLoginActive from "./UserLoginActive";

const Header = () => {

    //animation zoom Link
    const shadow = 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]';

    // função para quando usuario estiver logado
    const isUserLogin = () => {
        return false;
    };

    return (
        <div className="px-2.5">
            <header className={`max-w-[1240px] px-5 py-2.5 mx-auto mt-5  || flex justify-between items-center || bg-[rgba(255,255,255,0.1)]  backdrop-blur-xl ${shadow} || rounded-full border-gray-300 border-1`}>

                <Link to={'/home'} className="flex items-center gap-2.5">
                    <img src={logoSite} alt="Harmonic Sound" className="w-12 rounded-full" />
                    <p className="font-bold hidden min-[500px]:block">HARMONIC SOUND</p>
                </Link>

                <nav className="flex items-center gap-3.5">
                    <ul className="hidden min-[900px]:flex gap-2.5">
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

                    <div className={`${!isUserLogin ? 'hidden' : 'flex'}`}>
                        <UserLogin />
                    </div>

                    <div className={`${!isUserLogin ? 'flex' : 'hidden'}`}>
                        <UserLoginActive />
                    </div>

                    <div className="block min-[900px]:hidden">
                        <MenuHeader />
                    </div>

                </nav>
            </header>
        </div>
    );
}

export default Header;


