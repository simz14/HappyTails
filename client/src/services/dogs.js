import dachshund from "../assets/dachshund1/dachshund.jpg";
import dachshund1 from "../assets/dachshund1/dachshund1.webp";
import dachshund2 from "../assets/dachshund1/dachshund2.jpg";
import dachshund3 from "../assets/dachshund1/dachshund3.jpg";

import beagle from "../assets/beagle/beagle.jpg";
import beagle1 from "../assets/beagle/beagle1.webp";
import beagle2 from "../assets/beagle/beagle2.jpg";
import beagle3 from "../assets/beagle/beagle3.jpg";

import yorkshire from "../assets/yorkshire/yorkshire.jpg";
import yorkshire1 from "../assets/yorkshire/yorkshire1.jpg";
import yorkshire2 from "../assets/yorkshire/yorkshire2.webp";

import shibainu from "../assets/shibainu/shibainu.jpg";
import shibainu1 from "../assets/shibainu/shibainu1.jpg";
import shibainu2 from "../assets/shibainu/shibainu2.jpg";
import shibainu3 from "../assets/shibainu/shibainu3.jpg";

import dachshundv1 from "../assets/dachshund2/dachshund1.jpg";
import dachshundv2 from "../assets/dachshund2/dachshundv2.jpg";
import dachshundv3 from "../assets/dachshund2/dachshundv3.jpg";
import dachshundv4 from "../assets/dachshund2/dachshundv4.jpg";

import CockerSpaniel from "../assets/cockerspaniel/CockerSpaniel.jpg";
import CockerSpaniel1 from "../assets/cockerspaniel/cockerspaniel1.jpg";
import CockerSpaniel2 from "../assets/cockerspaniel/cockerspaniel2.jpg";

import Chihuahua from "../assets/chihuahua/Chihuahua.jpg";
import Chihuahua1 from "../assets/chihuahua/chihuahua1.jpg";
import Chihuahua2 from "../assets/chihuahua/chihuahua2.webp";

import berner from "../assets/berner/berner.jpg";
import berner1 from "../assets/berner/berner1.jpg";
import berner2 from "../assets/berner/berner2.jpg";
import berner3 from "../assets/berner/berner3.jpeg";

import goldenRetriever from "../assets/goldenRetriever/goldenRetriever.jpg";
import goldenRetriever1 from "../assets/goldenRetriever/goldenRetriever1.jpg";
import goldenRetriever2 from "../assets/goldenRetriever/goldenRetriever2.jpg";
import goldenRetriever3 from "../assets/goldenRetriever/goldenRetriever3.jpg";

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
        imgs: [dachshund, dachshund1, dachshund2, dachshund3],
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
        imgs: [yorkshire, yorkshire1, yorkshire2],
        color: "Gray",
        size: "8kg",
        petId: 85983424,
        story:
          "Gilbert is a loyal companion who would make a great addition to any family. He is a senior dog with a gentle disposition and a lot of love to give. Gilbert had been surrendered by his previous owner, but he didn't let that bring him down. He is always wagging his tail and ready to make new friends. Gilbert enjoys going for walks and lounging in the sun. He also loves to be petted and would nuzzle his head into her human's lap. Gilbert is being fostered by a family who had fallen in love with her, but they knew that he needed a permanent home.",
      },
      {
        id: 3,
        name: "Puppy Back",
        breed: "Shiba Inu",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        imgs: [shibainu, shibainu1, shibainu2, shibainu3],
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
        imgs: [dachshundv1, dachshundv2, dachshundv3, dachshundv4],
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
        imgs: [CockerSpaniel, CockerSpaniel1, CockerSpaniel2],
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
        imgs: [Chihuahua, Chihuahua1, Chihuahua2],
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
        imgs: [beagle, beagle1, beagle2, beagle3],
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
        imgs: [berner, berner1, berner2, berner3],
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
        imgs: [
          goldenRetriever,
          goldenRetriever1,
          goldenRetriever2,
          goldenRetriever3,
        ],
        color: "Blonde",
        size: "20kg",
        petId: 85923424,
        story:
          "Ramon is a young dog who had been abandoned by his previous owners. Ramon is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Ramon the love and attention he deserved.",
      },
      {
        id: 10,
        name: "Velfire",
        breed: "Dachshund",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        imgs: [dachshund, dachshund1, dachshund2, dachshund3],
        color: "Brown",
        size: "11kg",
        petId: 39983224,
        story:
          "Velfire is a young dog who had been abandoned by his previous owners. Velfire is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Velfire the love and attention he deserved.",
      },
      {
        id: 11,
        name: "Gilbert",
        breed: "Yorkshire Terrier",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        imgs: [yorkshire, yorkshire1, yorkshire2],
        color: "Gray",
        size: "8kg",
        petId: 85983424,
        story:
          "Gilbert is a loyal companion who would make a great addition to any family. He is a senior dog with a gentle disposition and a lot of love to give. Gilbert had been surrendered by his previous owner, but he didn't let that bring him down. He is always wagging his tail and ready to make new friends. Gilbert enjoys going for walks and lounging in the sun. He also loves to be petted and would nuzzle his head into her human's lap. Gilbert is being fostered by a family who had fallen in love with her, but they knew that he needed a permanent home.",
      },
      {
        id: 12,
        name: "Puppy Back",
        breed: "Shiba Inu",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        imgs: [shibainu, shibainu1, shibainu2, shibainu3],
        color: "Blonde",
        size: "5kg",
        petId: 36473424,
        story:
          "Puppy Back is a sweet and playful pup who is looking for his forever home. Puppy Back loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Puppy Back had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 13,
        name: "Spencer",
        breed: "Dachshund",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        imgs: [dachshundv1, dachshundv2, dachshundv3, dachshundv4],
        color: "Black",
        size: "11kg",
        petId: 85936145,
        story:
          "Spencer is a sweet and playful pup who is looking for his forever home. Spencer loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Spencer had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 14,
        name: "Mei Mei",
        breed: "Cocker Spaniel",
        sex: "Female",
        age: 4,
        location: "Menlo Park, CA",
        imgs: [CockerSpaniel, CockerSpaniel1, CockerSpaniel2],
        color: "Brown",
        size: "15kg",
        petId: 85234524,
        story:
          "Mei Mei is a loyal companion who would make a great addition to any family. Mei Mei had been surrendered by her previous owner, but she didn't let that bring her down. She is always wagging her tail and ready to make new friends. Mei Mei enjoys going for walks and lounging in the sun. She also loves to be petted and would nuzzle her head into her human's lap. Mei Mei is being fostered by a family who had fallen in love with her, but they know that she needs a permanent home. ",
      },
      {
        id: 15,
        name: "Revela",
        breed: "Chihuahua",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        imgs: [Chihuahua, Chihuahua1, Chihuahua2],
        color: "Blonde",
        size: "5kg",
        petId: 25973423,
        story:
          "Revela is a sweet and playful pup who is looking for his forever home. Revela loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Revela had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 16,
        name: "Paxton",
        breed: "Beagle",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        imgs: [beagle, beagle1, beagle2, beagle3],
        color: "Brown",
        size: "16kg",
        petId: 85983555,
        story:
          "Paxton is a young dog who had been abandoned by his previous owners. Paxton is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Paxton the love and attention he deserved.",
      },
      {
        id: 17,
        name: "Merrelyn",
        breed: "Berner Sennenhund",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        imgs: [berner, berner1, berner2, berner3],
        color: "Black",
        size: "25kg",
        petId: 11183424,
        story:
          "Merrelyn is a loyal companion who would make a great addition to any family. Merrelyn had been surrendered by her previous owner, but she didn't let that bring her down. She is always wagging her tail and ready to make new friends. Merrelyn enjoys going for walks and lounging in the sun. She also loves to be petted and would nuzzle her head into her human's lap. Merrelyn is being fostered by a family who had fallen in love with her, but they know that she needs a permanent home.",
      },
      {
        id: 18,
        name: "Ramon",
        breed: "Golden Retriever",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        imgs: [
          goldenRetriever,
          goldenRetriever1,
          goldenRetriever2,
          goldenRetriever3,
        ],
        color: "Blonde",
        size: "20kg",
        petId: 85923424,
        story:
          "Ramon is a young dog who had been abandoned by his previous owners. Ramon is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Ramon the love and attention he deserved.",
      },
      {
        id: 19,
        name: "Velfire",
        breed: "Dachshund",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        imgs: [dachshund, dachshund1, dachshund2, dachshund3],
        color: "Brown",
        size: "11kg",
        petId: 39983224,
        story:
          "Velfire is a young dog who had been abandoned by his previous owners. Velfire is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Velfire the love and attention he deserved.",
      },
      {
        id: 20,
        name: "Gilbert",
        breed: "Yorkshire Terrier",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        imgs: [yorkshire, yorkshire1, yorkshire2],
        color: "Gray",
        size: "8kg",
        petId: 85983424,
        story:
          "Gilbert is a loyal companion who would make a great addition to any family. He is a senior dog with a gentle disposition and a lot of love to give. Gilbert had been surrendered by his previous owner, but he didn't let that bring him down. He is always wagging his tail and ready to make new friends. Gilbert enjoys going for walks and lounging in the sun. He also loves to be petted and would nuzzle his head into her human's lap. Gilbert is being fostered by a family who had fallen in love with her, but they knew that he needed a permanent home.",
      },
      {
        id: 21,
        name: "Puppy Back",
        breed: "Shiba Inu",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        imgs: [shibainu, shibainu1, shibainu2, shibainu3],
        color: "Blonde",
        size: "5kg",
        petId: 36473424,
        story:
          "Puppy Back is a sweet and playful pup who is looking for his forever home. Puppy Back loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Puppy Back had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 22,
        name: "Spencer",
        breed: "Dachshund",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        imgs: [dachshundv1, dachshundv2, dachshundv3, dachshundv4],
        color: "Black",
        size: "11kg",
        petId: 85936145,
        story:
          "Spencer is a sweet and playful pup who is looking for his forever home. Spencer loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Spencer had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 23,
        name: "Mei Mei",
        breed: "Cocker Spaniel",
        sex: "Female",
        age: 4,
        location: "Menlo Park, CA",
        imgs: [CockerSpaniel, CockerSpaniel1, CockerSpaniel2],
        color: "Brown",
        size: "15kg",
        petId: 85234524,
        story:
          "Mei Mei is a loyal companion who would make a great addition to any family. Mei Mei had been surrendered by her previous owner, but she didn't let that bring her down. She is always wagging her tail and ready to make new friends. Mei Mei enjoys going for walks and lounging in the sun. She also loves to be petted and would nuzzle her head into her human's lap. Mei Mei is being fostered by a family who had fallen in love with her, but they know that she needs a permanent home. ",
      },
      {
        id: 24,
        name: "Revela",
        breed: "Chihuahua",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        imgs: [Chihuahua, Chihuahua1, Chihuahua2],
        color: "Blonde",
        size: "5kg",
        petId: 25973423,
        story:
          "Revela is a sweet and playful pup who is looking for his forever home. Revela loves to play and is always up for a game of tug-of-war or fetch. She is also very affectionate and enjoyes cuddling with her human friends. Revela had been rescued from a shelter and is being fostered by a family who adores her, but they know that he needs a family of his own. ",
      },
      {
        id: 25,
        name: "Paxton",
        breed: "Beagle",
        sex: "Male",
        age: 4,
        location: "Oakland, CA",
        imgs: [beagle, beagle1, beagle2, beagle3],
        color: "Brown",
        size: "16kg",
        petId: 85983555,
        story:
          "Paxton is a young dog who had been abandoned by his previous owners. Paxton is a playful pup who loved to run and play fetch. Despite his energy, he is well-behaved and responded well to commands. He is also very friendly and enjoyed meeting new people and other dogs. He is currently being fostered by a family who loved him dearly, but they knew that he needed a permanent home. They hope that someone would come along soon and give Paxton the love and attention he deserved.",
      },
      {
        id: 26,
        name: "Merrelyn",
        breed: "Berner Sennenhund",
        sex: "Female",
        age: 3,
        location: "Menlo Park, CA",
        imgs: [berner, berner1, berner2, berner3],
        color: "Black",
        size: "25kg",
        petId: 11183424,
        story:
          "Merrelyn is a loyal companion who would make a great addition to any family. Merrelyn had been surrendered by her previous owner, but she didn't let that bring her down. She is always wagging her tail and ready to make new friends. Merrelyn enjoys going for walks and lounging in the sun. She also loves to be petted and would nuzzle her head into her human's lap. Merrelyn is being fostered by a family who had fallen in love with her, but they know that she needs a permanent home.",
      },
      {
        id: 27,
        name: "Ramon",
        breed: "Golden Retriever",
        sex: "Male",
        age: 2,
        location: "Oakland, CA",
        imgs: [
          goldenRetriever,
          goldenRetriever1,
          goldenRetriever2,
          goldenRetriever3,
        ],
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
