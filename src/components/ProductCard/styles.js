import styled from 'styled-components';

export const Container = styled.div`
    min-height: 60vh;
`;

export const Form = styled.div`
    padding: 20px;
    min-height: 430px;
    margin: 20px 40px 0px 40px;
    position: relative;
    background-color: #f6f2ef;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.17);
    width: 18vw;
    cursor: pointer;
    @media only screen and (max-width: 885px) {       
        width: 250px;
    };
    &:hover img {
        height: 240px;
    }
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
`;

export const FormPrice = styled.div`
    color: #ff5564;
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 600;
    text-align: center;
`;

export const Image = styled.img`
    height: 200px;
    transition: height 0.1s linear;
`;

export const ButtonForm = styled.div`
    text-align: center;
    margin: 30px 0px 10px 0px;
`;
