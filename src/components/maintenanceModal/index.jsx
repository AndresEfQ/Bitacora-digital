import { Link } from "react-router-dom";

export default function MaintenanceModal() {
  return (
    <>
      <h3>Mantenimiento</h3>
      <p>Está seguro que desea recibir el equipo de mantenimiento? Verifique que el equipo se encuentre completamente armado y que el área de Validaciones haya verificado el estado de calificación del equipo</p>
      <div>
        <Link to=""><button>Aceptar</button></Link>
        <Link to="/"><button>Cancelar</button></Link>
      </div>
    </>
  )
}