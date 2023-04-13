import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};
export default ScrollTop;
