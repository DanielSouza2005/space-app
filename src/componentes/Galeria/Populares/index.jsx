import styled from "styled-components";
import Titulo from "../../Titulo";

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const FigurePopularEstilizada = styled.figure`
    margin: 0;
    position: relative;
    width: 100%;
    max-width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const ImagemPopularEstilizada = styled.img`
    border-radius: 20px;
    max-width: 212px;
`;

const BotaoEstilizado = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color : #7878e6;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    transition: background-color 0.3s ease;

    &:hover{
        border-color: #C98CF1;
    }
`;

const Populares = ({ fotosPopulares = [] }) => {
    return (
        <section>
            <Titulo $alinhamento="center">Populares</Titulo>

            <ImageContainer>

                {
                    fotosPopulares.map((foto) => (
                        <FigurePopularEstilizada
                            key={foto.id}
                        >
                            <ImagemPopularEstilizada
                                src={foto.path}
                                alt={foto.alt}
                            />
                        </FigurePopularEstilizada>
                    ))
                }

            </ImageContainer>

            <BotaoEstilizado>
                Ver mais
            </BotaoEstilizado>
        </section>
    );
}

export default Populares;