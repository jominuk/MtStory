import { useCallback, useEffect, useState } from "react";

const Scrolls = (scrollPosition) => {
  const [Locations, setLocations] = useState(0);

  const handleScroll = useCallback(() => {
    setLocations(window.scrollY);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageStyles = {
    position: Locations > scrollPosition ? "static" : "relative",
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
    transform:
      Locations > scrollPosition ? "translateY(0)" : "translateY(-100px)",
    opacity: Locations > scrollPosition ? 1 : 0,
  };

  return imageStyles;
};

export default Scrolls;
