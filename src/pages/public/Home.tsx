
import CardHome from "../../components/custom/CardHome";

import motionBanner1 from "../../assets/videos/motionbanner1.mp4";
import BannerAnuncio from "@/assets/videos/bannerAnuncio.mp4";

import banner1 from "../../assets/image/bannerCard.webp";
import banner2 from "../../assets/image/BannerCard2.png";

const Home = () => {
    // simularção de componente de banner e card
    return (
        <main className="max-w-[1220px] px-2.5 py-14 mx-auto">

            <h1 className="text-4xl font-bold text-center || max-w-[611px] mx-auto pb-12">Come discover the power of audiovisual</h1>


            <div className="flex flex-col gap-y-10 ">
                <div className="flex gap-5">
                    <CardHome img={banner2} title="Come and discover who we are and what our work is" btnTitle="More" caminho="/about" />

                    <div className="font-medium pt-2.5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque ex quisquam iure voluptas rem minus libero est nesciunt nobis debitis, deserunt eligendi, suscipit aperiam voluptate? Quo consequuntur fuga cum!</p>
                    </div>
                </div>

                <video src={BannerAnuncio} className="w-full rounded-2xl" autoPlay loop muted></video>

                <div className="flex items-start gap-5">
                    <CardHome img={banner1} title="Don't just focus on the visuals, the audio is more important" btnTitle="More" caminho="/about" />

                    <video src={motionBanner1} className="w-full  rounded-2xl" autoPlay loop muted></video>
                </div>
            </div>

        </main >
    );
}

export default Home;