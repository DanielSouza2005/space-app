import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const menuLateralItens = [
  {
    id: 0,
    iconeAtivo: "/icones/home-ativo.png",
    iconeInativo: "/icones/home-inativo.png",
    ativo: true,
    texto: "Início"
  },
  {
    id: 1,
    iconeAtivo: "/icones/mais-vistas-ativo.png",
    iconeInativo: "/icones/mais-vistas-inativo.png",
    ativo: false,
    texto: "Mais Vistas"
  },
  {
    id: 2,
    iconeAtivo: "/icones/mais-curtidas-ativo.png",
    iconeInativo: "/icones/mais-curtidas-inativo.png",
    ativo: false,
    texto: "Mais Curtidas"
  },
  {
    id: 3,
    iconeAtivo: "/icones/novas-ativo.png",
    iconeInativo: "/icones/novas-inativo.png",
    ativo: false,
    texto: "Novas"
  },
  {
    id: 4,
    iconeAtivo: "/icones/surpreenda-me-ativo.png",
    iconeInativo: "/icones/surpreenda-me-inativo.png",
    ativo: false,
    texto: "Surpreenda-me"
  },
];

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />

      <Cabecalho />
      <BarraLateral 
        itens={menuLateralItens}
      />
      
    </FundoGradiente>
  )
}

export default App
