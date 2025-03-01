type btnProps = {
  onClick: () => void;
};
const Button = ({ children, onClick }: React.PropsWithChildren<btnProps>) => {
  return (
    <>
      <button
        className="bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.6)]  hover:shadow-[0_2px_8px_rgba(255,255,255,0.6)] transition duration-500 trasform hover:scale-105  px-[20px] py-[8px] font-bold text-[1rem] rounded-[40px] "
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
