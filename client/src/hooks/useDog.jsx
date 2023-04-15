import useDogs from "./useDogs";

const useDog = () => {
  const { dogs } = useDogs();

  const dog = (id) => {
    return dogs.find((dog) => dog.id == id);
  };
  return { dog };
};

export default useDog;
