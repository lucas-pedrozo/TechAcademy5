import React, { useEffect } from "react";

type LayoutProps = {
    backgroundImage: string;
    children: React.ReactNode;
}

const LayoutHome: React.FC<LayoutProps> = ({ backgroundImage, children }) => {

    useEffect(() => {
        if (backgroundImage) {
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
            document.body.style.transition = "background-image 0.5s ease-in-out";
        }
    }, [backgroundImage]);

    return <div>
        {children}
    </div>;
};

export default LayoutHome;
