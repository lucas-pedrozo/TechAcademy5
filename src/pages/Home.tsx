import "./Home.css";
import Card from "../components/Cards";
import imagemSound from "../assets/imagemsound.webp";
import imagemTimeLine from "../assets/imagemTimeLine.png";
import bannerAnimado1 from "../assets/bannerAnimado1.mp4";
import bannerAnimado2 from "../assets/bannerAnimado2.mp4";

function Home() {
  const onClickChangeMore = () => {
    alert("Hello World");
  };

  const onClickChangeSound = () => {
    alert("Lucas PEdroz");
  };
  return (
    <>
      <main className="home">
        <div className="newsFlex">
          <div className="newsLeft">
            <Card
              img={imagemTimeLine}
              text="Come and discover who we are and what our work is"
              onClick={onClickChangeMore}
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
          <div className="newsRigth">
            <video
              src={bannerAnimado2}
              autoPlay
              loop
              muted
              className="video"
            ></video>
            <Card
              img={imagemSound}
              text="Don't just focus on the visuals, the audio is more important"
              onClick={onClickChangeSound}
              textButton="Sound"
            />
          </div>
        </div>
        <h4>Come discover the power of audiovisual</h4>

        <div className="bannerSound">
          <img src={imagemSound} alt="" className="" />
        </div>
      </main>
    </>
  );
}

export default Home;
