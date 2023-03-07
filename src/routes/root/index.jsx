import { 
  AiOutlineMenu, 
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { Header, Main } from "./style";
import { useState } from "react";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import CardsContainer from "../../components/cardsContainer";

//has to be replaced with data from database
import machines from "../../Data/machines"; 
import mobile from "../../Data/mobile";
import areas from "../../Data/areas";
import accesories from "../../Data/accesories";

export default function Root() {

  const [showMenu, setShowMenu] = useState(false);

  const[openCardId, setOpenCardId] = useState('');
  
  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  const handleSetOpenCardId = (cardId) => {
    setOpenCardId(cardId);
  }

  const handleCloseCard = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setOpenCardId('');
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
        <div>
          <CardsContainer
            id="machines"
            cards={machines}
            openCardId={openCardId}
            handleSetOpenCardId={handleSetOpenCardId}
            handleCloseCard={handleCloseCard}
          />
        </div>
        <h2>Equipos Móviles</h2>
        <div>
          <CardsContainer 
            id="mobile"
            cards={mobile} 
            openCardId={openCardId}
            handleSetOpenCardId={handleSetOpenCardId}
            handleCloseCard={handleCloseCard}
          />
        </div>
        <h2>Areas</h2>
        <div>
          <CardsContainer
            id="areas"
            cards={areas} 
            openCardId={openCardId}
            handleSetOpenCardId={handleSetOpenCardId}
            handleCloseCard={handleCloseCard}
          />
        </div>
        <h2>Utensilios</h2>
        <div>
          <CardsContainer
            id="accesories"
            cards={accesories} 
            openCardId={openCardId}
            handleSetOpenCardId={handleSetOpenCardId}
            handleCloseCard={handleCloseCard}
          />
        </div>
      </Main>
      <Outlet />
      <Footer />
    </>
  )
}