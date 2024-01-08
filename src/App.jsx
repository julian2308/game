import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const initialCards = [
    {
      id: 1,
      idFind: 1,
      image: "images/Annie1.jpeg",
    },
    {
      id: 2,
      idFind: 1,
      image: "images/Annie1.jpeg",
    },
    {
      id: 3,
      idFind: 2,
      image: "",
    },
    {
      id: 4,
      idFind: 2,
      image: "",
    },
    {
      id: 5,
      idFind: 3,
      image: "",
    },
    {
      id: 6,
      idFind: 3,
      image: "",
    },
    {
      id: 7,
      idFind: 4,
      image: "",
    },
    {
      id: 8,
      idFind: 4,
      image: "",
    },
    {
      id: 9,
      idFind: 5,
      image: "",
    },
    {
      id: 10,
      idFind: 5,
      image: "",
    },
    {
      id: 11,
      idFind: 6,
      image: "",
    },
    {
      id: 12,
      idFind: 6,
      image: "",
    },
  ];

  const [idCardSelected, setIdCardSelected] = useState();
  const [mainId, setMainId] = useState();
  const [idsCardsDone, setIdsCardsDone] = useState([]);
  const [cards, setCards] = useState(initialCards);



  useEffect(() => {

    let modifiedCards = initialCards.map((card) => {
      if(idsCardsDone.includes(card.idFind)){
        return {
          id: card.id,
          idFind:0
        }
      } else{
        return card
      }
    })

    shuffleArray(modifiedCards)
    

    setCards(modifiedCards)
    console.log(modifiedCards);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsCardsDone])

  return (
    <div className="main-container">
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              setIdCardSelected={setIdCardSelected}
              idCardSelected={idCardSelected}
              mainId={mainId}
              setMainId={setMainId}
              setIdCardsDone={setIdsCardsDone}
              setCards = {setCards}
              key={card.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
