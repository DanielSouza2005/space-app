import styled from "styled-components";
import InputTexto from "../InputTexto";

const HeaderEstilizado = styled.header`
    padding: 40px 0;
    display: flex;
    justify-content: space-between;

    img {
        max-width: 212px;
    }
`;

const Cabecalho = ({ aoPesquisar }) => {
    return(
        <HeaderEstilizado>
            <img 
                src="/imagens/logo.png"
                alt="Teste"
            />

            <InputTexto 
                aoAlterar={(valor) => aoPesquisar(valor)}
                type="text"
            />
        </HeaderEstilizado>
    );
}

export default Cabecalho;