import React, { useEffect } from "react";

interface LayoutProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ backgroundImage, children }) => {
  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
    }
  }, [backgroundImage]);

  return <div>{children}</div>;
};

export default Layout;
