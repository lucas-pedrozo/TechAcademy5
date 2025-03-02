import Button from "../ui/Button";

type containerProps = {
  title: string;
  img: string;
  btnTitle: string;
  onClick: () => void;
  className?: string;
};

export default function Card({
  title,
  img,
  btnTitle,
  onClick,
  className,
}: containerProps) {
  return (
    <>
      <div
        className={`${
          className || ""
        } bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white p-[15px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]`}
      >
        <img
          src={img}
          alt=""
          className="w-full rounded-[26px] pb-[10px] drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] "
        />
        <p className="text-[1rem] min-[600px]:text-[0,875rem]  text-white pb-[30px]">
          {title}
        </p>
        <div className="directionButton flex justify-end">
          <Button onClick={onClick}>{btnTitle} </Button>
        </div>
      </div>
    </>
  );
}
