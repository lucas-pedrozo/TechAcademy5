import Buttons from "../components/Buttons";
import "./Cards.css";

type cardsProps = {
  text: string;
  img: string;
  textButton: string;
  onClick: () => void;
};

function Cards({ text, img, textButton, onClick }: cardsProps) {
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

export default Cards;
