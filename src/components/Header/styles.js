import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: relative;
    background-color: white;
    margin-bottom: 5vh;
`;

export const HeaderElement = styled.div`
    position: relative;
    background-color: #f3f4f6;
    height: 60vh;
    margin: 4vh 6vw 0vh 6vw;
    text-align: center;
    border-radius: 2px;
`;

export const HeaderTexts = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    width: 50%;
    height: 100%;
`;

export const HeaderTitle = styled.p`
    color: rgba(99, 162, 17, 0.8);
    font-size: 5rem;
    letter-spacing: 10px;
`;

export const HeaderSubtitle = styled.p`
    color: rgba(99, 162, 17, 0.8);
    font-size: 1.5rem;
    letter-spacing: 10px;
`;

export const Shadow = styled.div`
    position: absolute;
    z-index: 10;
    top: 5%;
    left: 45%;
    background-color: #e1e1e1;
    opacity: 0;
    height: 35vh;
    width: 35vh;
    border-radius: 50%;
`;

export const Fruits = styled.div`
    position: absolute;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 20;
    height: 100%;
    width: 50%;
    right: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    box-shadow: 0px 0px 10px #999;
`;
