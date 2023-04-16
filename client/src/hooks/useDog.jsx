import { useEffect } from "react";
import useDogs from "./useDogs";
import { useState } from "react";

const useDog = (id) => {
  const { dogs, loading } = useDogs();
  const [dog, setDog] = useState({});

  useEffect(() => {
    setDog(dogs.find((dog) => dog.id == id));
  }, [dogs]);

  return { dog, loading };
};

export default useDog;
