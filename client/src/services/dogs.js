import dachshund from "../assets/dachshund.jpg";
import yorkshire from "../assets/yorkshire.jpg";
import chibainu from "../assets/chibainu.jpg";
import dachshund2 from "../assets/dachshund2.jpg";
import CockerSpaniel from "../assets/CockerSpaniel.jpg";
import Chihuahua from "../assets/Chihuahua.jpg";
import beagle from "../assets/beagle.jpg";
import berner from "../assets/berner.jpg";
import goldenRetriever from "../assets/goldenRetriever.jpg";

export const fetchDogs = () => {
  const response = new Promise((res, rej) => {
    res([
      {
        id: 1,
        name: "Velfire",
        breed: "Dachshund",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        img: dachshund,
      },
      {
        id: 2,
        name: "Gilbert",
        breed: "Yorkshire Terrier",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        img: yorkshire,
      },
      {
        id: 3,
        name: "Puppy Back",
        breed: "Chiba Inu",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        img: chibainu,
      },
      {
        id: 4,
        name: "Spencer",
        breed: "Dachshund",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        img: dachshund2,
      },
      {
        id: 5,
        name: "Mei Mei",
        breed: "Cocker Spaniel",
        sex: "Female",
        age: 4,
        location: "Menlo Park, CA",
        img: CockerSpaniel,
      },
      {
        id: 6,
        name: "Revela",
        breed: "Chihuahua",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        img: Chihuahua,
      },
      {
        id: 7,
        name: "Paxton",
        breed: "Beagle",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        img: beagle,
      },
      {
        id: 8,
        name: "Merrelyn",
        breed: "Berner Sennenhund",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        img: berner,
      },
      {
        id: 9,
        name: "Ramon",
        breed: "Berner Sennenhund",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        img: goldenRetriever,
      },
    ]);
  });
  return response;
};
