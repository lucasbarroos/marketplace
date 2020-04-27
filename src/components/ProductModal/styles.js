import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Content = styled.div`
    height: 60vh;
    width: 30vw;
    background-color: ghostwhite;
    border-radius: 5px;
`;

export const FruitImageContainer = styled.div`
    text-align: center;
    width: 100%;
`;

export const FruitImage = styled.img`
    max-height: 30vh;
`;

export const FormTitle = styled.div`
    color: black;
    font-size: 1.6rem;
    text-align: center;
`;

export const FormDescription = styled.div`
    color: black;
    font-size: 1.2rem;
    text-align: center;
    padding: 0px 20px 0px 20px;
`;

export const FormPrice = styled.div`
    color: #ff5564;
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 600;
    text-align: center;
`;

export const FormButton = styled.div`
    text-align: center;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const QuantityForm = styled.div`
    font-size: 1.6rem;
    color: black;
`;
