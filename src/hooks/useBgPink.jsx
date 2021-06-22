import { useEffect } from "react";

export const useBgPink = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "pink";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
