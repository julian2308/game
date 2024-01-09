
import { useEffect, useState } from "react";
import "../styles/Card.css"

export const Card = ({card, image, setIdCardSelected, idCardSelected, setIdCardsDone, mainId, setMainId }) => {


   useEffect(() => {})

    const [isSelected, setIsSelected] = useState(false);

    const handleSelectClick = (idCouple, id) => {
       
        if(idCardSelected){
            console.log("este es el main id", mainId);
            if(idCardSelected === idCouple){

                if(mainId !== id){
                    alert("Coincide")
                    setIsSelected(true)
                    setTimeout(() => {
                        setIdCardsDone((prevIdsCards) => [...prevIdsCards, idCouple])
                        setIdCardSelected()   
                    }, 1000);
                    
                    

                } else{
                    setIsSelected(false)
                    setMainId(99);
                }
            } else {
                //alert("No coindice")
                setIsSelected(true)
                setTimeout(() => {
                    setIsSelected(false);
                }, 1000);
                
                
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