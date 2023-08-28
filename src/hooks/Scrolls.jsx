import { useCallback, useEffect, useState } from "react";

const Scrolls = () => {
  const [Locations, setLocations] = useState(0);

  const handleScroll = useCallback(() => {
    setLocations(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageStyles = {
    position: Locations > 400 ? "static" : "relative",
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
    transform: Locations > 500 ? "translateY(0)" : "translateY(-100px)",
    opacity: Locations > 400 ? 1 : 0,
  };

  return imageStyles;
};

export default Scrolls;
