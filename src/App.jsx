import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";

import bannerBackground from "./assets/banner.png";
import fotos from "./data/fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <FundoGradiente>
      <AppContainer>

        <EstilosGlobais />

        <Cabecalho />

        <MainContainer>
          <BarraLateral />

          <ConteudoGaleria>
            <Banner
              imagem={bannerBackground}
              texto={"A galeria mais completa de fotos do espaço!"}
            />

            <Galeria
              fotos={fotosGaleria}
              aoSelecionarFoto={foto => setFotoSelecionada(foto)}
            />
          </ConteudoGaleria>
        </MainContainer>

      </AppContainer>

      <ModalZoom
        foto={fotoSelecionada}  
        aoFechar={() => setFotoSelecionada(null)}      
      />
    </FundoGradiente>
  );
};

export default App
