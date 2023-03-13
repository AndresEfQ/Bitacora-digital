import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiGears, GiBroom } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { Container, StatusIndicator, ProgressScale } from "./style";

export default function Card(props) {

  const hoursSinceLastClean = ((new Date() - props.card.lastCleanedDate) / 3600000).toFixed(2);

  const cleanTimeRemaining = 1 - (hoursSinceLastClean / props.card.cleaningFreq);

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
    <motion.div layout>
      <Container
        cleanTimeRemaining={cleanTimeRemaining}
        onClick={() => props.handleSetOpenCardId(props.card.id)}
        open={props.isOpen}
      >
        <motion.div layout>
          <StatusIndicator status={props.card.status} open={props.isOpen} />
          <div>
            <h3>{props.card.name}</h3>
            <div>{props.card.status === "process" ?
              props.card.lot + ' ' + props.card.product :
              statusInfo[props.card.status].name
            }</div>
            <progress
              max={props.card.cleaningFreq}
              value={hoursSinceLastClean}
            >
              {hoursSinceLastClean}
            </progress>
            <ProgressScale>
              <span>0 h</span>
              <span>{props.card.cleaningFreq / 3} h</span>
              <span>{(props.card.cleaningFreq / 3) * 2} h</span>
              <span>{props.card.cleaningFreq} h</span>
            </ProgressScale>
          </div>
          <div>
            <h4>Bitacoras</h4>
            <div>
              <button><GiGears size={27} color="#ddd" /></button>
              <button><GiBroom size={27} color="#ddd" /></button>
            </div>
          </div>
        </motion.div>
        <div>
          <CgClose size={20} color="#666" onClick={(e) => props.handleCloseCard(e)} />
          <ul>
            <li>
              <h4>Producto Anterior:</h4>
              <p>{props.card.lastProduct}</p>
            </li>
            <li>
              <h4>Lote:</h4>
              <p>{props.card.lastLot}</p>
            </li>
            <li>
              <h4>Última limpieza:</h4>
              <p>
                {
                  props.card.lastCleanedDate
                  .toISOString()
                  .split('T')[0]
                  .split('-')
                  .reverse()
                  .join('-')
                } {' / '} {
                  props.card.lastCleanedDate
                  .toISOString()
                  .split('T')[1]
                  .slice(0, 5)
                }
              </p>
            </li>
            <li>
              <h4>Horas desde la última limpieza:</h4>
              <p>{hoursSinceLastClean}</p>
            </li>
          </ul>
        </div>
        <div>
          <Link to={props.card.id}>
            <button id="action-button">{statusInfo[props.card.status].action}</button>
          </Link>
          <button><BsTools size={27} color="#ddd" /></button>
        </div>
      </Container>
    </motion.div>
  )
}