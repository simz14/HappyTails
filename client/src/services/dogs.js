import dachshund from "../assets/dachshund1/dachshund.jpg";
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
        color: "Brown",
        size: "11kg",
        petId: 39983224,
        story:
          "Velfire is a young dog who had been abandoned by his previous owners. Velfire is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Velfire the love and attention he deserved.",
      },
      {
        id: 2,
        name: "Gilbert",
        breed: "Yorkshire Terrier",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        img: yorkshire,
        color: "Gray",
        size: "8kg",
        petId: 85983424,
        story:
          "Gilbert is a loyal companion who would make a great addition to any family. He is a senior dog with a gentle disposition and a lot of love to give. Gilbert had been surrendered by his previous owner, but he didn't let that bring him down. He is always wagging his tail and ready to make new friends. Gilbert enjoys going for walks and lounging in the sun. He also loves to be petted and would nuzzle his head into her human's lap. Gilbert is being fostered by a family who had fallen in love with her, but they knew that he needed a permanent home.",
      },
      {
        id: 3,
        name: "Puppy Back",
        breed: "Chiba Inu",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        img: chibainu,
        color: "Blonde",
        size: "5kg",
        petId: 36473424,
        story:
          "Puppy Back is a sweet and playful pup who is looking for his forever home. Puppy Back loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Puppy Back had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 4,
        name: "Spencer",
        breed: "Dachshund",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        img: dachshund2,
        color: "Black",
        size: "11kg",
        petId: 85936145,
        story:
          "Spencer is a sweet and playful pup who is looking for his forever home. Spencer loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Spencer had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 5,
        name: "Mei Mei",
        breed: "Cocker Spaniel",
        sex: "Female",
        age: 4,
        location: "Menlo Park, CA",
        img: CockerSpaniel,
        color: "Brown",
        size: "15kg",
        petId: 85234524,
        story:
          "Mei Mei is a loyal companion who would make a great addition to any family. Mei Mei had been surrendered by her previous owner, but she didn't let that bring her down. She is always wagging her tail and ready to make new friends. Mei Mei enjoys going for walks and lounging in the sun. She also loves to be petted and would nuzzle her head into her human's lap. Mei Mei is being fostered by a family who had fallen in love with her, but they know that she needs a permanent home. ",
      },
      {
        id: 6,
        name: "Revela",
        breed: "Chihuahua",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        img: Chihuahua,
        color: "Blonde",
        size: "5kg",
        petId: 25973423,
        story:
          "Revela is a sweet and playful pup who is looking for his forever home. Revela loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Revela had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 7,
        name: "Paxton",
        breed: "Beagle",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        img: beagle,
        color: "Brown",
        size: "16kg",
        petId: 85983555,
        story:
          "Paxton is a young dog who had been abandoned by his previous owners. Paxton is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Paxton the love and attention he deserved.",
      },
      {
        id: 8,
        name: "Merrelyn",
        breed: "Berner Sennenhund",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        img: berner,
        color: "Black",
        size: "25kg",
        petId: 11183424,
        story:
          "Merrelyn is a loyal companion who would make a great addition to any family. Merrelyn had been surrendered by her previous owner, but she didn't let that bring her down. She is always wagging her tail and ready to make new friends. Merrelyn enjoys going for walks and lounging in the sun. She also loves to be petted and would nuzzle her head into her human's lap. Merrelyn is being fostered by a family who had fallen in love with her, but they know that she needs a permanent home.",
      },
      {
        id: 9,
        name: "Ramon",
        breed: "Golden Retriever",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        img: goldenRetriever,
        color: "Blonde",
        size: "20kg",
        petId: 85923424,
        story:
          "Ramon is a young dog who had been abandoned by his previous owners. Ramon is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Ramon the love and attention he deserved.",
      },
    ]);
  });
  return response;
};
