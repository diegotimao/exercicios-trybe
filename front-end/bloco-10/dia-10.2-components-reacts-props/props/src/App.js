import React from "react";
// import Greting from "./components/Greating";
// import Image from "./components/Image";

import Albuns from "./components/Album";

function App() {
  // Declaração do objeto contendo informações do album01
  const album01 = {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG",
    title: "Mylo Xyloto",
    releaseDate: {
      year: "2011",
      month: "10",
      day: "24",
    },
    others: {
      recordCompany: "Capitol, Parlophone",
      formats: "CD, digital",
    },
  };

  // Declaração do objeto contendo informações do album02
  const album02 = {
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg",
    title: "Ghost Stories",
    releaseDate: {
      year: "2014",
      month: "05",
      day: "16",
    },
    others: {
      recordCompany: "Parlophone",
      formats: "CD, digital",
    },
  };

  return (
    <>
      <Albuns album={album01} />
      <Albuns album={album02} />
    </>
  );
}

export default App;

// exemplo de props
// {/* <Greting name="Diego" lastName="cavalcanti" />
//       <Image
//         source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
//         alternativeText="Imagem de gato admirando a a paisagem"
//       /> */}
