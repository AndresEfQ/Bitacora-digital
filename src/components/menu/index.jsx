import { StyledDiv } from "./style";
import { 
  AiOutlineClose, 
  AiOutlineSync, 
  AiOutlineSetting, 
  AiOutlineShop,
  AiOutlineFlag,
} from "react-icons/ai";
import { BiCycling } from "react-icons/bi";

export default function Menu(props) {
  return (
    <>
      <StyledDiv visible={props.visible} hiddenSyncIcon={true}>
        <div>
          <div>
            <div id="sync-icon">
              <AiOutlineSync size={20} color="#888" />
            </div>
            <form action="">
              <input
                type="search"
                placeholder="Buscar"
              />
            <AiOutlineClose size={20} color="#666" onClick={props.closeMenu}/>
            </form>
          </div>
          <div>
            <ul>
              <li><AiOutlineFlag size={20} /> Equipos Fijos</li>
              <li><BiCycling size={20} /> Equipos Móviles</li>
              <li><AiOutlineShop size={20} /> Áreas</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <AiOutlineSetting size={20}/>
                Configuración
              </li>
            </ul>
          </div>
        </div>
      </StyledDiv>
    </>
  )
}