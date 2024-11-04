import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{
    width?: number;
    height?: number;
  }>({});

  useEffect(() => {
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    };

    setWindowDimensions(getWindowDimensions());

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
