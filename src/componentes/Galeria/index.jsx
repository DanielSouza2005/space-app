import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const Galeria = () => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>   
                </SecaoFluida>

                <Populares />
            </GaleriaContainer>
        </>
    );
};

export default Galeria;