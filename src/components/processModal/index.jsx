import { Link } from "react-router-dom";

export default function ProcessModal() {
  return (
    <>
      <h3>En Proceso</h3>
      <p>Desea finalizar el proceso?</p>
      <Link to="/"><button>Cancelar</button></Link>
    </>
  )
}