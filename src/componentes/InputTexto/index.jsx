import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const ContainerEstilizado = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    width: 602px;
    border-radius: 10px;
    border-style: solid;
    border-color: #C98CF1;
    background: transparent;
    padding: 12px 16px;
    box-sizing: border-box;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    &:focus {
        outline: none; 
        border-color: #C98CF1;
    }
`;

const CiSearchEstilizado = styled(CiSearch)`
    color: #C98CF1;
    height: 28px;
    width: 28px;
    position: absolute;
    cursor: pointer;
    right: 18px;
`;

const InputTexto = ({ type="text", aoAlterar }) => {

    const aoDigitar = (evento) => {
        aoAlterar(String(evento.target.value));
    }

    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
                placeholder="O que você procura?"
                type={type} 
                onChange={aoDigitar}
            />
            <CiSearchEstilizado alt="Ícone de Lupa"/>
        </ContainerEstilizado>
    );
}

export default InputTexto;