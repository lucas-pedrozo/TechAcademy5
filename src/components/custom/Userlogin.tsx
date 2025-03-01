import { Link } from "react-router-dom";

import logoUser from "../../assets/logo/lucas.jpg";

const Userlogin = () => {
  return (
    <div
      className="containerUser flex items-center gap-[10px] bg-[rgba(255, 255, 255, 0.2)]  backdrop-blur-xl border-[1px] border-white rounded-[40px] px-[15px] py-[8px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] 
  animate-fade-down animate-once animate-duration-500 animate-delay-400 animate-ease-out animate-normal
  "
    >
      <img
        src={logoUser}
        alt=""
        className="w-[34px] rounded-[50%] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] "
      />
      <Link to="/Login" className="font-bold text-[1rem] text-white">
        Log in
      </Link>
    </div>
  );
};

export default Userlogin;
