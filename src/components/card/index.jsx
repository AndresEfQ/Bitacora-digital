import { GiGears, GiBroom } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { Container, StatusIndicator, ProgressScale } from "./style";

export default function Card(props) {

  let hoursSinceLastClean = (new Date() - props.lastCleanedDate) / 3600000;
  if (hoursSinceLastClean > props.cleaningFreq) {
    hoursSinceLastClean = props.cleaningFreq;
  }
  const cleanTimeRemaining = 1 - (hoursSinceLastClean / props.cleaningFreq);

  const statusInfo = {
    process: {
      name: "Proceso",
      action: "Finalizar Proceso",
      route: "process",
    },
    cleaning: {
      name: "En Limpieza",
      action: "Finalizar Limpieza",
      route: "cleaning",
    },
    clean: {
      name: "Limpio",
      action: "Iniciar Proceso",
      route: "clean",
    },
    maintenance: {
      name: "En Mantenimiento",
      action: "Entrega Mantenimiento",
      route: "maintenance",
    },
    toBeCleaned: {
      name: "Pendiente de Limpieza",
      action: "Iniciar Limpieza",
      route: "toBeCleaned",
    },
  }

  return (
    <Container 
      cleanTimeRemaining={cleanTimeRemaining} 
      onClick={() => props.handleSetOpenCardId(props.id)}
      open={props.isOpen}
    >
      <div>
        <StatusIndicator status={props.status} open={props.isOpen} />
        <div>
          <h3>{props.name}</h3>
          <div>{props.status === "process" ?
            props.lot + ' ' + props.product :
            statusInfo[props.status].name   
          }</div>
          <progress
            max={props.cleaningFreq}
            value={hoursSinceLastClean}
          >
            {hoursSinceLastClean}
          </progress>
          <ProgressScale>
            <span>0 h</span>
            <span>{props.cleaningFreq / 3} h</span>
            <span>{(props.cleaningFreq / 3) * 2} h</span>
            <span>{props.cleaningFreq} h</span>
          </ProgressScale>
        </div>
        <div>
          <h4>Bitacoras</h4>
          <div>
            <button><GiGears size={27} color="#ddd" /></button>
            <button><GiBroom size={27} color="#ddd" /></button>
          </div>
        </div>
      </div>
      <div>
        <button id="action-button">{statusInfo[props.status].action}</button>
        <button><BsTools size={27} color="#ddd" /></button>
        <button onClick={(e) => props.handleCloseCard(e)}>
          <CgClose size={27} color="#ddd" />
        </button>
      </div>
    </Container>
  )
}