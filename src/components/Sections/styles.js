import styled from 'styled-components';

export const Container = styled.div`
    min-height: 60vh;
    margin: 60px;
`;

export const FruitSection = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    color: rgba(232, 241, 87, 1);
    transition: opacity 0.3s linear;
    &:hover {
        opacity: 0.5;
        color: white !important;
    }
`;

export const FruitTitle = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 10rem;
    font-weight: bold;
`;

export const FruitsImage = styled.img`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
`;


export const VegetablesSection = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    color: rgba(232, 241, 87, 1);
    transition: opacity 0.3s linear;
    &:hover {
        opacity: 0.5;
        color: white !important;
    }
`;

export const VegetablesTitle = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 10rem;
    font-weight: bold;
`;

export const VegetablesImage = styled.img`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
`;
