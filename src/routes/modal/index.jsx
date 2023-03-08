import { useParams } from "react-router-dom";
import { useDisableScroll } from "../../customHooks/useDisableScroll";
import ProcessModal from "../../components/processModal";
import CleaningModal from "../../components/CleaningModal";
import CleanModal from "../../components/CleanModal";
import MaintenanceModal from "../../components/maintenanceModal";
import ToBeCleanedModal from "../../components/toBeCleanedModal";
import { StyledDiv } from "./style";

// change import to fetch data from database
import machines from "../../Data/machines";
import mobile from "../../Data/mobile";
import areas from "../../Data/areas";
import accesories from "../../Data/accesories";

export default function Modal() {

  useDisableScroll({ element: document.body, disabled: true});
  const params = useParams();

  // might be improved with a proper database query
  let card;
  if (machines.some(card => card.id === params.cardId)) {
    card = machines.find(card => card.id === params.cardId);
  } else if (mobile.some(card => card.id === params.cardId)) {
    card = mobile.find(card => card.id === params.cardId);
  } else if (areas.some(card => card.id === params.cardId)) {
    card = areas.find(card => card.id === params.cardId);
  } else if (accesories.some(card => card.id === params.cardId)) {
    card = accesories.find(card => card.id === params.cardId);
  }

  const modalContent = {
    process: <ProcessModal />,
    cleaning: <CleaningModal />,
    clean: <CleanModal />,
    maintenance: <MaintenanceModal />,
    toBeCleaned: <ToBeCleanedModal />,
  }

  return (
    <StyledDiv>
      <div>
        <h2>{card.name}</h2>
        {modalContent[card.status]}
      </div>
    </StyledDiv>
  )
}