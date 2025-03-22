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
            document.body.style.backgroundPosition = " top center";
        }
    }, [backgroundImage]);

    return <div>
        {children}
    </div>;
};

export default LayoutHome;
