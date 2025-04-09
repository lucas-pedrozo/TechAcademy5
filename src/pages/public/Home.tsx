import { Link } from "react-router-dom";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// impor de componentes
import CardHome from "@/components/custom/CardHome";

//import de imagens e videos 
import motionBanner1 from "@/assets/videos/motionbanner1.mp4";
import motionBanner2 from "@/assets/videos/MotionBanner2.mp4";
import BannerAnuncio from "@/assets/videos/bannerAnuncio.mp4";

import banner1 from "@/assets/image/bannerCard.webp";
import banner2 from "@/assets/image/BannerCard2.png";


const Home = () => {

    const MotionButton = 'hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] || hover:scale-105 transition transform duration-300 ';

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
    }, [])


    return (
        <main>
            <section className="max-w-[1220px] px-2.5 pt-26 || min-[600px]:pt-40 mx-auto">
                <h1 className="text-3xl min-[600px]:text-6xl font-bold text-center || max-w-[800px] m-auto pb-16 || drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" data-aos="fade-up">
                    The Power of audioVisual Harmonic Sound
                </h1>

                <h4 className="text-2xl font-semibold text-center || pb-2.5" data-aos="fade-up">Find your Sound FX</h4>

                <div className="text-center pt-5" data-aos="fade-up">
                    <Link to={'/sound'} className={`${MotionButton} bg-white rounded-full px-5 py-2.5 || text-black font-semibold `}>
                        Search SoundFX
                    </Link>
                </div>

            </section>

            <section className="py-20 min-[800px]:py-40">
                <video src={BannerAnuncio} className="w-full" autoPlay loop muted data-aos="fade-up"></video>
            </section>

            <section className="max-w-[1220px] px-2.5 pb-20 mx-auto overflow-hidden">

                <h2 className="text-2xl font-bold text-center || pb-10" data-aos="fade-up">
                    Come discover the power of audiovisual
                </h2>

                <div className="flex flex-col min-[600px]:flex-row gap-y-10 gap-x-5 ">

                    <div className="flex flex-col gap-[40px]">
                        <CardHome img={banner2} title="Come and discover who we are and what our work is" btnTitle="More" caminho="/about" AOS="fade-right" />
                        <Link to={'/sound'}><video src={motionBanner2} className="w-full rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.6)]" autoPlay loop muted data-aos="fade-right" ></video></Link>
                    </div>

                    <div className="newsRight flex flex-col min-[600px]:flex-col-reverse gap-[40px]">
                        <CardHome img={banner1} title="Don't just focus on the visuals, the audio is more important" btnTitle="Sound" caminho={'/sound'} AOS="fade-left" />
                        <Link to={'/sound'}><video src={motionBanner1} className="w-full rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.6)]" autoPlay loop muted data-aos="fade-left"></video></Link>
                    </div>

                </div>
            </section>
        </main >
    );
}

export default Home;