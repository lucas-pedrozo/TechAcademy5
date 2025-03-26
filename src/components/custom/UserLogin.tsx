import { Link } from "react-router-dom";

const UserLogin = () => {

    const Motion = "font-semibold text-white/50 hover:text-white  ||  hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-102 trasition duration-300"

    return (
        <Link to={'/login'} className={` flex items-center gap-1.5 || px-5 py-2 || bg-white/5 backdrop-blur-xl rounded-full || border-white/20 border-1 ${Motion}`} >
            Log in
        </Link>
    )
}

export default UserLogin;