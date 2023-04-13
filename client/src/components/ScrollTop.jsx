import { useEffect } from "react";

const ScrollTop = ({ dependecy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependecy]);
  return null;
};
export default ScrollTop;
