import Card from "../card"

export default function cardContainer(props) {

  const cards = props.cards.map(card => <Card 
    key={card.id} 
    name={card.name}
    status={card.status} 
    lastCleanedDate={card.lastCleanedDate}
  />)

  return (
    <>
      {cards}
    </>
  );
}