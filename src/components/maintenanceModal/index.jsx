import { Link } from "react-router-dom";

export default function MaintenanceModal() {
  return (
    <>
      <h3>Mantenimiento</h3>
      <p>Está seguro que desea recibir el equipo de mantenimiento? Verifique...</p>
      <Link to="/"><button>Cancelar</button></Link>
    </>
  )
}