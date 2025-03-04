import Card from "../../components/custom/Card";

import motionBanner1 from "../../assets/videos/MotionBanner1.mp4";
import motionBanner2 from "../../assets/videos/MotionBanner2.mp4";
import banner1 from "../../assets/banners/imagemSond.webp";
import banner2 from "../../assets/banners/imagemTileLine.png";
import banner3 from "../../assets/banners/bannerAnucio.png";
import Layout from "../../components/layout/LayoutHome";

import bg from "../../assets/ImageBg/BG1.png";

function Home() {
  return (
    <Layout backgroundImage={bg}>
      <main className="max-w-[1220px] px-[10px] py-[40px] m-auto ">
        <div className="newsFlex flex flex-col min-[600px]:flex-row gap-y-[40px] gap-x-[20px] ">
          <div className="newsLeft flex flex-col gap-[40px]">
            <Card
              img={banner2}
              title="Come and discover who we are and what our work is"
              btnTitle="More"
              caminho="/about"
              className="animate-fade-right animate-duration-500 animate-delay-300 animate-ease-out "
            />

            <video
              src={motionBanner2}
              className="w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] animate-fade-right animate-duration-500 animate-delay-350 animate-ease-out "
              autoPlay={true}
              loop={true}
              muted={true}
            ></video>
          </div>
          <div className="newsRight flex flex-col min-[600px]:flex-col-reverse  gap-[40px]">
            <Card
              img={banner1}
              title="Don't just focus on the visuals, the audio is more important"
              btnTitle="Sound"
              caminho="/SoundList"
              className="animate-fade-left animate-duration-500 animate-delay-300 animate-ease-out"
            />

            <video
              src={motionBanner1}
              className="w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]  animate-fade-left animate-duration-500 animate-delay-300 animate-ease-out"
              autoPlay={true}
              loop={true}
              muted={true}
            ></video>
          </div>
        </div>
        <h2 className="text-white text-[26px] min-[600px]:text-[40px] font-bold  py-[40px] text-center">
          Come discover the power of audiovisual
        </h2>

        <img src={banner3} alt="" className="w-full" />
      </main>
    </Layout>
  );
}

export default Home;
