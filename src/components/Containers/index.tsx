import Buttons from "../Buttons";
import "./index.css";

type containerProps = {
  text: string;
  img: string;
  textButton: string;
  onClick: () => void;
};

export default function Containers({
  text,
  img,
  textButton,
  onClick,
}: containerProps) {
  return (
    <>
      <div className="Card">
        <img src={img} alt="" />
        <p>{text}</p>
        <div className="directionButton">
          <Buttons onClick={onClick}>{textButton} </Buttons>
        </div>
      </div>
    </>
  );
}
