import { Link } from "react-router-dom";
type ContainerProps = {
    title: string;
    img: string;
    btnTitle: string;
    caminho: string;
    className?: string;
    AOS?: string;
};
function CardHome({
    title, img, btnTitle, caminho, className, AOS
}: ContainerProps) {

    return (
        <div className={`${className} || w-full p-4 || bg-[rgba(255,255,255,0.1)] backdrop-blur-xl rounded-3xl || border-1 border-white`} data-aos={AOS}>
            <img src={img} className="w-full rounded-3xl pb-2.5" />
            <p className="font-medium text-white pb-8">{title}</p>
            <div className="flex justify-end">
                <Link to={caminho} className="bg-white py-2 px-5 rounded-[40px] text-black font-bold transition duration-500 hover:scale-105 hover:shadow-[0px_2px_10px_rgba(255,255,255,1)] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] cursor-pointer">
                    {btnTitle}
                </Link>
            </div>
        </div>
    );
}

export default CardHome;