import { Container,  } from "./style";
import StatusIndicator from "../statusIndicator";
import ProgressBar from "../progressBar";

export default function Card(props) {
  <Container>
    <StatusIndicator status={props.status}/>
    <div>
      {props.name}
      {props.status}
      <ProgressBar lastCleanedDate={props.lastCleanedDate}/>
    </div>
    <div>
      <button>Bitacora Uso</button>
      <button>Bitacora Limpieza</button>
    </div>

  </Container>
}