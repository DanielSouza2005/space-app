import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { IoCloseOutline } from "react-icons/io5";

const OverLay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const DialogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    margin: 0;
    border: none;
    border-radius: 20px;
    padding: 0;
    border: 0;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
    width: 900px;
    background: transparent;

    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            padding: 0;
            background: transparent;
            border: 0;
        }
    }
`;

const BtnFecharEstilizado = styled(IoCloseOutline)`
    cursor: pointer;
    color: #FFFFFF;
`;

const ModalZoom = ({ foto, aoFechar, aoFavoritar }) => {
    return (
        <>
            {
                foto &&
                <>
                    <OverLay />
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>
                        <Imagem
                            foto={foto}
                            expandida={true}
                            aoFavoritar={aoFavoritar}
                        />
                        <form method="dialog">
                            <button>
                                <BtnFecharEstilizado
                                    size={36}
                                    alt={"Ícone de fechar"}
                                />
                            </button>
                        </form>
                    </DialogEstilizado>
                </>
            }
        </>
    );
};

export default ModalZoom;