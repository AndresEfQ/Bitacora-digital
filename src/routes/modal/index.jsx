import { useParams, Link } from "react-router-dom";
import { useDisableScroll } from "../../customHooks/useDisableScroll";
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
    process: {title: "En Proceso", message: "¿Desea finalizar el proceso?"},
    cleaning: {title: "En Limpieza", message: "¿Desea finalizar la limpieza? \nRealice una inspección visual detallada del equipo o el área, y solicite la inspección visual al Jefe de Producción, QF Supervisor de Producción o al Auxiliar de Producción"},
    clean: {title: "Limpio", message: "¿Desea iniciar proceso?"},
    maintenance: {title: "En Mantenimiento", message: `¿Está seguro que desea recibir el equipo de mantenimiento? \nSolicite al Jefe de Producción o al QF Supervisor de Producción que verifique que el equipo se encuentre completamente armado y que el área de Validaciones haya verificado el estado calificado del equipo si aplica.`},
    toBeCleaned: {title: "Pendiente de Limpieza", message: "¿Desea iniciar la limpieza?"},
  }

  return (
    <StyledDiv>
      <div>
        <h2>{card.name}</h2>
        <h3>{modalContent[card.status].title}</h3>
        {modalContent[card.status].message.split('\n').map(text => <p>{text}</p>)}
        <div>
          <Link to=""><button>Aceptar</button></Link>
          <Link to="/"><button>Cancelar</button></Link>
      </div>
      </div>
    </StyledDiv>
  )
}