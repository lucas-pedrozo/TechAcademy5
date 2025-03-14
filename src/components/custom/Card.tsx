import { Link } from "react-router-dom";
import { Suspense } from "react";

type ContainerProps = {
  title: string;
  img: string;
  btnTitle: string;
  caminho: string;
  className?: string;
};

async function Card({ title, img, btnTitle, caminho, className }: ContainerProps) {
  return (
    <div
      className={`${className || ""} bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white p-[15px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]`}
    >
      <img
        src={img}
        alt=""
        className="w-full rounded-[26px] pb-[10px] drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)]"
      />
      <p className="text-[1rem] min-[600px]:text-[0.875rem] text-white pb-[30px]">
        {title}
      </p>
      <div className="flex justify-end">
        <Link
          to={caminho}
          className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.6)] py-[8px] px-[20px] rounded-[40px] text-black font-bold transition duration-500 hover:scale-105 hover:shadow-[0px_2px_10px_rgba(255,255,255,1)] cursor-pointer"
        >
          {btnTitle}
        </Link>
      </div>
    </div>
  );
}

export default function AsyncCard(props: ContainerProps) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Card {...props} />
    </Suspense>
  );
}
