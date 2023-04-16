import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import PropTypes from "prop-types";

const SlideUp = ({ children, viewOffset, afterReveal }) => {
  const ref = useRef();
  const slideUp = {
    distance: "200px",
    origin: "bottom",
    opacity: 0,
    duration: 1500,
    viewOffset: {
      bottom: viewOffset,
    },
    afterReveal: afterReveal,
  };

  useEffect(() => {
    ScrollReveal().reveal(ref.current, slideUp);
  }, [ScrollReveal]);

  return <div ref={ref}>{children}</div>;
};

SlideUp.propTypes = {
  childre: PropTypes.node,
};
SlideUp.defaultProps = {
  viewOffset: 400,
};

export default SlideUp;
