import { Link } from "react-router-dom"

export default function CleaningModal() {
  return (
    <>
      <h3>En Limpieza</h3>
      <p>Está seguro que quiere finalizar la limpieza?</p>
      <div>
        <Link to=""><button>Aceptar</button></Link>
        <Link to="/"><button>Cancelar</button></Link>
      </div>
    </>
  )
}