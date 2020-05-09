import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Content = styled.div`
    min-height: 60vh;
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
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    button {
        margin: 5px;
    }
`;

export const QuantityForm = styled.div`
    font-size: 1.6rem;
    color: black;
`;

export const SuccefullBuy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
`;

export const SuccefullBuyText = styled.div`
    color: rgba(99, 162, 17, 0.8);
    font-size: 2.6rem;
    text-align: center;
`;

export const SuccefullBuyIcon = styled.img`
    height: 80px;
    width: 80px;
    background-color: rgba(99,162,17,0.25);
    border-radius: 50%;
    padding: 33px;
`;
