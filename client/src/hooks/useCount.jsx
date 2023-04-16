import { useEffect, useState } from "react";

const useCount = (amount) => {
  const [count, setCount] = useState(0);
  const [fire, setFire] = useState(false);

  const countToNumber = () => {
    let value = 0;
    let intervalId;
    intervalId = setInterval(() => {
      if (value !== amount) {
        value += 1;
        setCount(value);
      } else {
        clearInterval(intervalId);
      }
    }, 2000 / amount);
  };

  useEffect(() => {
    if (fire) {
      countToNumber();
    }
  }, [fire]);

  return [count, setFire];
};

export default useCount;
