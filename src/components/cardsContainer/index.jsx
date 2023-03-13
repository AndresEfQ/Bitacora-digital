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
    card={card}
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