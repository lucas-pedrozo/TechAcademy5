import LogoUser from "../../assets/image/lucas.jpg"

// link para a navegação do site
import { Link } from "react-router-dom";

const UserLogin = () => {
    return (
        <Link to={'/Login'} className={` flex items-center gap-1.5 || px-2.5 py-2 || bg-[rgba(255,255,255,0.2)] backdrop-blur-xl rounded-full || border-white- border-1 `} >

            <img src={LogoUser} alt="logoUser" className="w-8 rounded-full" />

            <p className="font-bold pr-1">Log in</p>
        </Link>
    )
}

export default UserLogin;