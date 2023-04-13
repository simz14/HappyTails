import { useEffect } from "react";
import PropTypes from "prop-types";

const ScrollTop = ({ dependecy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependecy]);
  return null;
};

ScrollTop.propTypes = {
  dependecy: PropTypes.any,
};

export default ScrollTop;
