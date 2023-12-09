
import "../styles/Card.css"

export const Card = ({idFind, image, selectIdCard, idCardSelected, setIdCardDone, setCards}) => {

    const handleSelectClick = (idFind) => {


        if(idCardSelected){

            if(idCardSelected === idFind){
                alert("Coincide")
                setIdCardDone((prevIdsCards) => [...prevIdsCards, idFind])
                selectIdCard()
            } else {
                alert("No coindice")
            } 
        }else{
            selectIdCard(idFind)
            console.log(idCardSelected);
        }

    }



    return(
        <div className="container" onClick={() => handleSelectClick(idFind)}>
            <div>
                Carta con id {idFind}
            </div>
        </div>
    )
}