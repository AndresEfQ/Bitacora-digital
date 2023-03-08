import { Link } from "react-router-dom";

export default function ToBeCleanedModal() {
  return (
    <>
      <h3>Pendiente de Limpieza</h3>
      <p>Iniciar limpieza?</p>
      <Link to="/"><button>Cancelar</button></Link>
    </>
  )
}