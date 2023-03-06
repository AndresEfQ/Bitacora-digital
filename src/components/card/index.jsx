import { Container, StatusIndicator, ProgressScale } from "./style";

export default function Card(props) {

  let hoursSinceLastClean = (new Date() - props.lastCleanedDate) / 3600000;

  if (hoursSinceLastClean > props.cleaningFreq) {
    hoursSinceLastClean = props.cleaningFreq;
  }
  
  console.log(1 - (hoursSinceLastClean / props.cleaningFreq));

  const statusNames = {
    process: "Proceso",
    cleaning: "En Limpieza",
    clean: "Limpio",
    maintenance: "En Mantenimiento",
    toBeCleaned: "Pendiente de Limpieza",
  }

  return (
    <Container cleanTimeRemaining={1 - (hoursSinceLastClean / props.cleaningFreq)}>
      <StatusIndicator status={props.status} />
      <div>
        <h3>{props.name}</h3>
        <div>{statusNames[props.status]}</div>
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
        <button>Bitacora Uso</button>
        <button>Bitacora Lpza</button>
      </div>
    </Container>
  )
}