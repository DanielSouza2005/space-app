import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiExpandDiagonalLine } from "react-icons/ri";

import tags from "../Tags/tags.json";

const FigureEstilizada = styled.figure`
    margin: 0;
    position: relative;
    width: ${(props) => (props.$expandida ? '90%' : '98%')};
    max-width: 100%;
    display: flex;
    flex-direction: column;
`;

const ImagemEstilizada = styled.img`
    border-radius: 20px 20px 0px 0px;
    width: 100%;
    max-width: 100%;
`;

const FigCaptionEstilizada = styled.figcaption`
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: #001634;
    bottom: 0;
    width: 100%;
    border-radius: 0px 0px 20px 20px;
    justify-content: space-between; 
    box-sizing: border-box;
`;

const HeaderEstilizado = styled.header`
    margin: 0 0 0 1.5rem;

    h3 {
        color: #FFFFFF;     
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;    
        margin: 1rem 0 0;   
        font-family: 'GandhiSansBold';
    }

    h4 {
        color: #FFFFFF;  
        font-size: 16px;
        margin: .2rem 0 1rem 0;  
        flex-grow: 1;
        font-family: 'GandhiSansRegular';
    }
`;

const FooterEstilizado = styled.footer`
    display: flex;
    align-items: center;
    margin: 1rem;
    justify-content: space-between;
    gap: 10px;

    svg {
        cursor: pointer;
        margin: .125rem;
    }
`;

const TagEstilizada = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 12px;
    font-family: 'GandhiSansBold';
`;

const IconProps = {
    size: 26,
    color: "#FFFFFF"
};

const Imagem = ({ foto, expandida = false, aoSolicitarZoom, aoFavoritar }) => {

    const tagAtual = tags.find((tag) => tag.id === foto.tagId)?.titulo || null;

    return (
        <FigureEstilizada
            $expandida={expandida}
            id={`foto-${foto.id}`}
        >
            {
                (!expandida && tagAtual) &&
                <TagEstilizada>
                    {tagAtual}
                </TagEstilizada>
            }

            <ImagemEstilizada
                src={foto.path}
                alt={foto.alt}
            />

            <FigCaptionEstilizada>
                <HeaderEstilizado>
                    <h3>{foto.titulo}</h3>
                    <h4>{foto.fonte}</h4>
                </HeaderEstilizado>
                <FooterEstilizado>
                    {
                        foto.favorita ?
                            <FaHeart
                                {...IconProps}
                                alt="Icone de favorito"
                                onClick={() => aoFavoritar(foto)}
                            />
                            :
                            <FaRegHeart
                                {...IconProps}
                                alt="Icone de favorito"
                                onClick={() => aoFavoritar(foto)}
                            />
                    }

                    {
                        !expandida &&
                        <RiExpandDiagonalLine
                            {...IconProps}
                            alt="Icone de expandir"
                            onClick={() => aoSolicitarZoom(foto)}
                        />
                    }
                </FooterEstilizado>
            </FigCaptionEstilizada>
        </FigureEstilizada>
    );
};

export default Imagem;