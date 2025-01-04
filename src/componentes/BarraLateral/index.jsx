import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import { useMenu  } from "../../hooks/useMenu";

const BarraLateralEstilizada = styled.aside`
    flex: 0 0 250px;   
    max-width: 100%;
`;

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const BarraLateral = () => {

    const { menuLateralItens } = useMenu();

    return(
        <BarraLateralEstilizada>
            <nav>
                <ListaEstilizada>
                    {
                        menuLateralItens.map((item) => (
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