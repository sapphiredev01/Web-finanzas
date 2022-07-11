import { useEffect, useState } from "react";

export const useDesktop = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 820);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 820);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return isDesktop;
};
