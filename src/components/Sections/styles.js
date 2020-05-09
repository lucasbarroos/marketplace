import styled from 'styled-components';

export const Container = styled.div`
    min-height: 60vh;
    margin: 60px;
`;

export const FruitSection = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 5px; 
    color: white;
    transition: opacity 0.3s linear;
    opacity: 0.9;
    &:hover {
        opacity: 0.6;
    }
`;

export const FruitTitle = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 10rem;
    font-weight: bold;
    text-shadow: 0px 0px 10px black;
`;

export const FruitsImage = styled.img`
    width: 100%;
    border-radius: 5px;
    max-height: 460px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
`;

export const VegetablesSection = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 5px;    
    color: white;
    max-height: 460px;
    transition: opacity 0.3s linear;
    opacity: 1;
    &:hover {
        opacity: 0.8;
    }
`;

export const VegetablesTitle = styled.div`
    position: absolute;
    max-height: 460px;
    top: 10%;
    left: 10%;
    font-size: 10rem;
    font-weight: bold;
    text-shadow: 0px 0px 10px black;
`;

export const VegetablesImage = styled.img`
    width: 100%;
    border-radius: 5px;
    max-height: 460px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
`;
