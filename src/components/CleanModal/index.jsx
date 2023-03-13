import { Link } from "react-router-dom";

export default function CleanModal(props) {
  return (
    <>
      <h3>Limpio</h3>
      <p>Desea iniciar proceso?</p>
      <div>
        <Link to="/validation"><button>Ok</button></Link>
        <Link to="/"><button>Cancelar</button></Link>
      </div>
    </>
  )
}