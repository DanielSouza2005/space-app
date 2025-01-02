import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const FigureContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px; 
    width: 100%;
`;

const Galeria = ({ fotos = [], aoSelecionarFoto }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>

                    <FigureContainer>
                        {
                            fotos.map((foto) => (
                                <Imagem
                                    key={foto.id}
                                    foto={foto}
                                    aoSolicitarZoom={aoSelecionarFoto}
                                />
                            ))
                        }
                    </FigureContainer>
                </SecaoFluida>

                <Populares />
            </GaleriaContainer>
        </>
    );
};

export default Galeria;