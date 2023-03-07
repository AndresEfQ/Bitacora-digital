import { useState } from "react";
import Card from "../card"

export default function CardContainer(props) {

  const[openCard, setOpenCard] = useState();

  const handleSetOpenCard = (cardId) => {
    setOpenCard(cardId);
  }

  const handleCloseCard = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setOpenCard('');
    console.log(openCard);
  }

  const cards = props.cards.map(card => <Card 
    key={card.id}
    id={card.id}
    props={card.name}
    status={card.status}
    product={card.product}
    lot={card.lot}
    lastCleanedDate={card.lastCleanedDate}
    cleaningFreq={card.cleaningFreq}
    isOpen={openCard === card.id}
    handleSetOpenCard={handleSetOpenCard}
    handleCloseCard={handleCloseCard}
  />)

  return (
    <>
      {cards}
    </>
  );
}