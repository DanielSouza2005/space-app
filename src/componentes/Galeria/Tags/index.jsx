import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
    display: flex;
    gap: 22px;
    align-items: center;
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-weight: 400;
    font-size: 26px;
    line-height: 48px;
`;

const Tag = styled.button`
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    height: 56px;
    color: #FFFFFF;
    background-color: rgba(217, 217, 217, 0.3);
    border: 2px solid transparent;
    border-color : #7878e6;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      border-color: #C98CF1;
    }
`;

const Tags = ({ aoFiltrarPorTag }) => {
    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag => (
                <Tag 
                    key={tag.id}
                    onClick={() => aoFiltrarPorTag(tag.id)}    
                >
                    {tag.titulo}
                </Tag>
            ))}
        </TagsContainer>
    );
};

export default Tags;