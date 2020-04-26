import styled from 'styled-components';

export const Container = styled.div`
    z-index: 20;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.95);
    display: ${(props) => (props.show ? 'initial' : 'none')};
    transition: 2s;
`;

export const Elements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
`;

export const Label = styled.div`
    font-size: 2.5em;
    color: white;
    font-weight: 500;
`;
