import Card from "../components/Card";

import motionBanner1 from "../assets/videos/MotionBanner1.mp4";
import motionBanner2 from "../assets/videos/MotionBanner2.mp4";

import banner1 from "../assets/banners/imagemSond.webp";
import banner2 from "../assets/banners/imagemTileLine.png";
function Home() {
  const onClickChange = () => {
    alert("Hello World");
  };
  return (
    <>
      <main className="max-w-[1220px] px-[10px] py-[40px] m-auto ">
        <div className="newsFlex flex flex-col min-[600px]:flex-row gap-y-[40px] gap-x-[20px] ">
          <div className="newsLeft flex flex-col gap-[40px]">
            <Card
              img={banner2}
              title="Come and discover who we are and what our work is"
              btnTitle="More"
              onClick={onClickChange}
            />

            <video
              src={motionBanner2}
              className="w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] "
              autoPlay={true}
              loop={true}
              muted={true}
            ></video>
          </div>
          <div className="newsRight flex flex-col min-[600px]:flex-col-reverse  gap-[40px]">
            <Card
              img={banner1}
              title="Come and discover who we are and what our work is"
              btnTitle="More"
              onClick={onClickChange}
            />

            <video
              src={motionBanner1}
              className="w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] "
              autoPlay={true}
              loop={true}
              muted={true}
            ></video>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
