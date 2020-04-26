import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    z-index: 10;
    top: 0px;
    right: 0px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    color:  rgba(99, 162, 17, 0.8) !important;
`;

export const UL = styled.ul`
    display: flex;
    height: ${(props) => (props.showTopHeader ? '60px' : '0px')};
    opacity: ${(props) => (props.showTopHeader ? 100 : 0)};
    width: 100%;
    flex-direction: row;
    animation-delay: 2s;
    animation-duration: 2s;
    background-color: #ffffff;
    transition: 0.2s linear;
    a {
        color: rgba(99, 162, 17, 0.8);
    }
`;

export const LI = styled.ul`
    font-size: 1.6em;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`;

export const Title = styled.ul`
    position: relative;
    font-size: 1.5em;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    background-color: white;
    color: color: rgba(99, 162, 17, 0.8);;
`;

export const ResponsiveToggle = styled.div`
    display: ${(props) => (props.showResponsiveMode ? 'initial' : 'none')};
    position: absolute;
    z-index: 30;
    top: 20px;
    left: 20px;
    padding: 7px 10px 5px 8px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
`;

export const ResponsiveImage = styled.img`
    height: 20px;
    width: 20px;
`;
