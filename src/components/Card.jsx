
import { useState } from "react";
import "../styles/Card.css"

export const Card = ({card, image, setIdCardSelected, idCardSelected, setIdCardsDone, mainId, setMainId, idsCardsDone }) => {

   
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectClick = (idCouple, id) => {
       
        if(idCardSelected){
            console.log("este es el main id", mainId);
            if(idCardSelected === idCouple){

                if(mainId !== id){
                    alert("Coincide")
                    setIdCardsDone((prevIdsCards) => [...prevIdsCards, idCouple])
                    setIdCardSelected()
                } else{
                    setIsSelected(false)
                    alert("es la misma carta")
                }
            } else {
                alert("No coindice")
            } 
            setIdCardSelected()            
        }else{

            setIsSelected(true)
            setIdCardSelected(idCouple)
            setMainId(id)
            console.log(idCardSelected);
        }
    }



    return(
        <div>
        {
            card.idFind !== 0 ? 
            <div className="container" onClick={() => handleSelectClick(card.idFind, card.id)}>
                {
                    isSelected ? 
                    <img src={image}/> : null
                }

            </div>: 
            <div className="invisible-container">soy invisble</div>
        }   
        </div>
        
    )
}