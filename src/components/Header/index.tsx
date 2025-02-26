import "./index.css";
import logo from "../../assets/Mask.png";
import menu from "../../assets/menu.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Harmonic</p>
        </div>
        <div className="login">
          <img src={logo} alt="" />
          <p>Lucas.p</p>
        </div>
      </div>
    </>
  );
}
