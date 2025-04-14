type Props = {
    children?: React.ReactNode;
    icons?: string;
    buttonPosition?: string;
}

const GlobalButton = ({ children, icons, buttonPosition }: Props) => {

    const motionButton: string = "shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105";
    const styleButton: string = "bg-white rounded-full font-bold text-black px-5 py-2 cursor-pointer";
    const styleDiv: string = "flex items-center pt-5 px-2.5";

    return (
        <div className={`${styleDiv} ${buttonPosition}`}>
            <button type="submit" className={`${styleButton} ${motionButton}`}>
                {children}
                {icons}
            </button>
        </div>
    )
}

export default GlobalButton;