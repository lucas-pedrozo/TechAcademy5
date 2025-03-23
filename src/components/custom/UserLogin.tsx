import { Link } from "react-router-dom";

const UserLogin = () => {
    return (
        <Link to={'/login'} className={` flex items-center gap-1.5 || px-5 py-2 || bg-white/5 backdrop-blur-xl rounded-full || border-white/20 border-1`} >

            <p className="font-semibold text-white/50 hover:text-white  || trasition duration-300">Log in</p>

        </Link>
    )
}

export default UserLogin;