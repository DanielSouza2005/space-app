import { useState } from "react";

export const useMenu = () => {
    const [menuLateralItens, setMenuLateralItens] = useState([
        {
            id: 0,
            iconeAtivo: "/icones/home-ativo.png",
            iconeInativo: "/icones/home-inativo.png",
            ativo: true,
            texto: "Início"
        },
        {
            id: 1,
            iconeAtivo: "/icones/mais-vistas-ativo.png",
            iconeInativo: "/icones/mais-vistas-inativo.png",
            ativo: false,
            texto: "Mais Vistas"
        },
        {
            id: 2,
            iconeAtivo: "/icones/mais-curtidas-ativo.png",
            iconeInativo: "/icones/mais-curtidas-inativo.png",
            ativo: false,
            texto: "Mais Curtidas"
        },
        {
            id: 3,
            iconeAtivo: "/icones/novas-ativo.png",
            iconeInativo: "/icones/novas-inativo.png",
            ativo: false,
            texto: "Novas"
        },
        {
            id: 4,
            iconeAtivo: "/icones/surpreenda-me-ativo.png",
            iconeInativo: "/icones/surpreenda-me-inativo.png",
            ativo: false,
            texto: "Surpreenda-me"
        }
    ]);

    return { menuLateralItens, setMenuLateralItens };
};