import { Link } from "react-router-dom";

export default function CleanModal() {
  return (
    <>
      <h3>Limpio</h3>
      <p>Desea iniciar proceso?</p>
      <Link to="/"><button>Cancelar</button></Link>
    </>
  )
}