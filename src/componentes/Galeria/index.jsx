import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
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

const Galeria = ({ fotosGaleria = [], fotosPopulares = [], aoSelecionarFoto, aoFavoritar }) => {
    return (
        <>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>

                    <FigureContainer>
                        {
                            fotosGaleria.map((foto) => (
                                <Imagem
                                    key={foto.id}
                                    foto={foto}
                                    aoSolicitarZoom={aoSelecionarFoto}
                                    aoFavoritar={aoFavoritar}
                                />
                            ))
                        }
                    </FigureContainer>
                </SecaoFluida>

                <Populares
                    fotosPopulares={fotosPopulares}
                />
            </GaleriaContainer>
        </>
    );
};

export default Galeria;