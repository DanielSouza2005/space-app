import styled from "styled-components";

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    min-height: 328px;
    margin: 0;
    background-size: cover;
    max-width: 100%;
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    border-radius: 20px;
`;

const TextoDestaqueEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`;

const Banner = ({ imagem, texto }) => {
    return (
        <FigureEstilizada
            $backgroundImage={imagem}
        >
            <TextoDestaqueEstilizado>
                {texto}
            </TextoDestaqueEstilizado>
        </FigureEstilizada>
    );
};

export default Banner;