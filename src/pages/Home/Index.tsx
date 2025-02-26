import "./index.css";
import Containers from "../../components/Containers";
import imagemSound from "../../assets/imagemsound.webp";
import imagemTimeLine from "../../assets/imagemTimeLine.png";
import bannerAnimado1 from "../../assets/bannerAnimado1.mp4";

function Home() {
  const onClickChange = () => {
    alert("Hello World");
  };
  return (
    <>
      <div className="home">
        <div className="newsFlex">
          <div className="newsLeft">
            <Containers
              img={imagemTimeLine}
              text="Come and discover who we are and what our work is"
              onClick={onClickChange}
              textButton="More"
            />
            <video
              src={bannerAnimado1}
              autoPlay
              loop
              muted
              className="video"
            ></video>
          </div>
          <div className="newsRight">
            <video
              src={bannerAnimado1}
              autoPlay
              loop
              muted
              className="video"
            ></video>
            <Containers
              img={imagemSound}
              text="Don't just focus on the visuals, the audio is more important"
              onClick={onClickChange}
              textButton="Sound"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
