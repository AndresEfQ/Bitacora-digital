import Card from "../card"

export default function CardContainer(props) {

  /* const[openCard, setOpenCard] = useState(); */

  /* const handleSetOpenCard = (cardId) => {
    setOpenCard(cardId);
  } */

  /* const handleCloseCard = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setOpenCard('');
  } */

  const cards = props.cards.map(card => <Card 
    key={card.id}
    id={card.id}
    name={card.name}
    status={card.status}
    product={card.product}
    lot={card.lot}
    lastCleanedDate={card.lastCleanedDate}
    cleaningFreq={card.cleaningFreq}
    isOpen={props.openCardId === card.id}
    handleSetOpenCardId={props.handleSetOpenCardId}
    handleCloseCard={props.handleCloseCard}
  />)

  return (
    <>
      {cards}
    </>
  );
}