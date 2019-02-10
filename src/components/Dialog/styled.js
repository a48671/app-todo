import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    box-size: border-box;
    max-width: 350px;
    margin: 0 auto;
    border-radius: 6px;
    border: 2px solid #3c3c3c;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
`;

export const Header = styled.div`
    padding: 10px 20px;
    font-family: sans-serif;
    font-size: 22px;
    text-align: center;
    color: #fff;
    background-color: #3c3c3c;
`;

export const Content = styled.div`
    min-height: 300px;
    background-color: #f2f3f2;
`;

export const Footer = styled.div`
    display: flex;
    padding: 10px 20px;
    font-family: sans-serif;
    color: #fff;
    background-color: #3c3c3c;
    justify-content: space-between;
`;

export const Button = styled.div`
    padding: 6px 20px;
    font-family: sans-serif;
    color: #3c3c3c;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #aeaeae;
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
    cursor: pointer;
    span {
        display: inline-block;
        padding-top: 3px;
        pointer-events: none;
    }
    svg {
        display: inline-block;
        vertical-align: middle;
        width: 19px;
        margin-left: 10px;
        path {
            fill: #3c3c3c;
        }
    }
`;
