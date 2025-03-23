import { Link } from "react-router-dom";

// impor de componentes
import CardHome from "../../components/custom/CardHome";

//import de imagens e videos 
import motionBanner1 from "../../assets/videos/motionbanner1.mp4";
import motionBanner2 from "../../assets/videos/MotionBanner2.mp4";
import BannerAnuncio from "@/assets/videos/bannerAnuncio.mp4";

import banner1 from "../../assets/image/bannerCard.webp";
import banner2 from "../../assets/image/BannerCard2.png";

const Home = () => {

    const MotionButton = 'hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] || hover:scale-105 transition transform duration-300 ';

    // simularção de componente de banner e card
    return (
        <main className="py-16 ">

            <section className="max-w-[1220px] px-2.5 mx-auto">
                <h1 className="text-3xl min-[600px]:text-6xl font-bold text-center || max-w-[800px] m-auto pb-16 || drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    The Power of audioVisual Harmonic Sound
                </h1>

                <h4 className="text-2xl font-semibold text-center || pb-2.5">Find your Sound FX</h4>

                {/* <div className="bg-white/20 backdrop-blur-xl || border-1 border-white rounded-full || text-white || py-2 px-5 m-auto || placeholder:text-white placeholder:font-medium || max-w-[600px] || flex ">
                    <input type="text" placeholder="Search" className="w-full focus:outline-none" />
                    <img src={search} alt="Search" width={30} />
                </div> */}

                <div className="text-center pt-5">
                    <Link to={'/sound'} className={`${MotionButton} bg-white rounded-full px-5 py-2.5 || text-black font-semibold `}>
                        Search SoundFX
                    </Link>
                </div>

            </section>

            <section className="py-20 min-[800px]:py-40">
                <video src={BannerAnuncio} className="w-full" autoPlay loop muted controls></video>
            </section>

            <section className="max-w-[1220px] px-2.5 mx-auto">
                <h2 className="text-2xl font-bold text-center || pb-10">Come discover the power of audiovisual</h2>
                <div className="flex flex-col min-[600px]:flex-row gap-y-10 gap-x-5 ">
                    <div className="flex flex-col gap-[40px]">

                        <CardHome img={banner2} title="Come and discover who we are and what our work is" btnTitle="More" caminho="/about" />
                        <video src={motionBanner2} className="w-full rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.6)]" autoPlay loop muted ></video>
                    </div>

                    <div className="newsRight flex flex-col min-[600px]:flex-col-reverse gap-[40px]">
                        <CardHome img={banner1} title="Don't just focus on the visuals, the audio is more important" btnTitle="Sound" caminho="/soundList" />
                        <video src={motionBanner1} className="w-full rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.6)]" autoPlay loop muted ></video>
                    </div>
                </div>
            </section>

        </main >
    );
}

export default Home;