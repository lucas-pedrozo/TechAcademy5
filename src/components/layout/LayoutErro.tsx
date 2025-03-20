import React, { useEffect } from "react";

interface LayoutProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const LayoutError: React.FC<LayoutProps> = ({ backgroundImage, children }) => {
  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundRepeat = "cover";
      document.body.style.backgroundPosition = "top";
    }
  }, [backgroundImage]);

  return <div>{children}</div>;
};

export default LayoutError;
