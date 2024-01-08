import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {

  function shuffleArray(array) {
    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray; 
  }

  const initialCards = [
    {
      id: 1,
      idFind: 1,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie1.jpeg",
    },
    {
      id: 2,
      idFind: 1,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie1.jpeg",
    },
    {
      id: 3,
      idFind: 2,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie2.jpeg",
    },
    {
      id: 4,
      idFind: 2,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie2.jpeg",
    },
    {
      id: 5,
      idFind: 3,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie3.jpeg",
    },
    {
      id: 6,
      idFind: 3,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie3.jpeg",
    },
    {
      id: 7,
      idFind: 4,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie4.jpeg",
    },
    {
      id: 8,
      idFind: 4,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie4.jpeg",
    },
    {
      id: 9,
      idFind: 5,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie5.jpeg",
    },
    {
      id: 10,
      idFind: 5,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie5.jpeg",
    },
    {
      id: 11,
      idFind: 6,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie6.jpeg",
    },
    {
      id: 12,
      idFind: 6,
      image: "https://raw.githubusercontent.com/julian2308/game/master/images/Annie6.jpeg",
    },
  ];

  
  const [cardsToRender, setCardsToRender] = useState(shuffleArray(initialCards));
  const [idCardSelected, setIdCardSelected] = useState();
  const [mainId, setMainId] = useState();
  const [idsCardsDone, setIdsCardsDone] = useState([]);
  const [cards, setCards] = useState(initialCards);


  useEffect(() => {
    let modifiedCards = cardsToRender.map((card) => {
      if(idsCardsDone.includes(card.idFind)){
        return {
          id: card.id,
          idFind:0
        }
      } else{
        return card
      }
    })
    setCards(modifiedCards)

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsCardsDone])

  return (
    <div className="main-container">
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              image={card.image}
              setIdCardSelected={setIdCardSelected}
              idCardSelected={idCardSelected}
              mainId={mainId}
              setMainId={setMainId}
              setIdCardsDone={setIdsCardsDone}
              idsCardsDone = {idsCardsDone}
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
