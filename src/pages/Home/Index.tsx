import "./index.css";
import Containers from "../../components/Containers";
import imagemSound from "../../assets/imagemsound.webp";

function Home() {
  const onClickChange = () => {};
  return (
    <>
      <div className="home">
        <Containers
          img={imagemSound}
          text="Come and discover who we are and what our work is"
          onClick={onClickChange}
          textButton="More"
        />
      </div>
    </>
  );
}

export default Home;
