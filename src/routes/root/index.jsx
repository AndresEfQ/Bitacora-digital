import { 
  AiOutlineMenu, 
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { Header, Main } from "./style";
import { useState } from "react";
import Menu from "../../components/menu";
import Footer from "../../components/footer";

export default function Root() {

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <>
      <Header>
        <AiOutlineMenu size={25} color="white" onClick={handleShowMenu} />
        <h1>Bitácora Digital</h1>
        <div>
          <AiOutlineSetting size={25} color="white" />
          <AiOutlineSearch size={25} color="white" />
        </div>
      </Header>
      <Menu visible={showMenu} closeMenu={handleShowMenu}/>
      <Main>
        <h2>Equipos Fijos</h2>
        <div></div>
        <h2>Equipos Móviles</h2>
        <div></div>
        <h2>Areas</h2>
        <div></div>
        <h2>Utensilios</h2>
        <div></div>
      </Main>

      <Outlet />
      <Footer />
    </>
  )
}