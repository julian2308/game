import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const initialCards = [
    {
      id: 1,
      idFind: 1,
      image: "",
    },
    {
      id: 2,
      idFind: 1,
      image: "",
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
  ];

  const [idCardSelected, setIdCardSelected] = useState();
  const [idsCardsDone, setIdsCardsDone] = useState([]);
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {

    const filterCards = cards.filter((card) => !idsCardsDone.includes(card.idFind))
    setCards(filterCards)
  }, [idsCardsDone])

  return (
    <div className="App">
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <Card
              idFind={card.idFind}
              selectIdCard={setIdCardSelected}
              idCardSelected={idCardSelected}
              setIdCardDone={setIdsCardsDone}
              setCards = {setCards}
              key={card.id}
            />
          );
        })}
      </div>
      <button onClick={() => console.log(idsCardsDone)}> cards done</button>
    </div>
  );
}

export default App;
