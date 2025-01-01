import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const BarraLateralEstilizada = styled.aside`
    width: 212px;
`;

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const BarraLateral = ({ itens }) => {
    return(
        <BarraLateralEstilizada>
            <nav>
                <ListaEstilizada>
                    {
                        itens.map((item) => (
                            <ItemNavegacao 
                                key={item.id}
                                iconeAtivo={item.iconeAtivo}
                                iconeInativo={item.iconeInativo}
                                ativo={item.ativo}
                            >
                                {item.texto}
                            </ItemNavegacao>
                        ))
                    }                                     
                </ListaEstilizada>
            </nav>
        </BarraLateralEstilizada>
    );
}

export default BarraLateral;