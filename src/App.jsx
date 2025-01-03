import styled from "styled-components";
import { useState } from "react";

import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import ModalZoom from "./componentes/ModalZoom";

import bannerBackground from "./assets/banner.png";
import fotoGaleria from "./data/fotosGaleria.json";
import fotoPopular from "./data/fotosPopulares.json";
import Rodape from "./componentes/Rodape";
import Tags from "./componentes/Galeria/Tags";

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
  const [fotosGaleria, setFotosGaleria] = useState(fotoGaleria);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [fotosPopulares] = useState(fotoPopular);

  const aoFavoritar = (foto) => {
    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      if (fotoGaleria.id === foto.id) {
        fotoGaleria.favorita = !fotoGaleria.favorita;
      }

      return fotoGaleria;
    }));
  };

  const aoBuscarFotoPorTag = (tag) => {
    if (tag === 0) {
      setFotosGaleria(fotoGaleria);
    }
    else {
      const fotosFiltradas = fotoGaleria.filter((fotoGaleria) => fotoGaleria.tagId === tag);
      setFotosGaleria(fotosFiltradas);
    }
  };

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

            <Tags
              aoFiltrarPorTag={aoBuscarFotoPorTag}
            />

            <Galeria
              fotosGaleria={fotosGaleria}
              fotosPopulares={fotosPopulares}
              aoSelecionarFoto={foto => setFotoSelecionada(foto)}
              aoFavoritar={aoFavoritar}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>

      <Rodape />

      <ModalZoom
        foto={fotoSelecionada}
        aoFavoritar={aoFavoritar}
        aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  );
};

export default App
