
import "../styles/Card.css"

export const Card = ({card, image, setIdCardSelected, idCardSelected, setIdCardsDone, mainId, setMainId }) => {

   

    const handleSelectClick = (idCouple, id) => {
       
        if(idCardSelected){
            console.log("este es el main id", mainId);
            if(idCardSelected === idCouple){

                if(mainId !== id){
                    alert("Coincide")
                    setIdCardsDone((prevIdsCards) => [...prevIdsCards, idCouple])
                    setIdCardSelected()
                } else{
                    alert("es la misma carta")
                }
            } else {
                alert("No coindice")
            } 
            setIdCardSelected()            
        }else{
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
                <img src="./images/Annie1.jpeg"/>
            </div>: 
            <div className="invisible-container">soy invisble</div>
        }   
        </div>
        
    )
}