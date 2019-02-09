import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    font-family: sans-serif;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    &:nth-child(even) {
        background-color: #e4e2e2;
    }
    `;
    
    export const Content = styled.div`
    padding: 10px 40px 10px 20px;
    position: relative;
    background-color: ${props => props.isEdit ? '#fff' : 'initial'};
`;

export const Close = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    right: 20px;
    bottom: 0;
    left: auto;
    margin: auto 0;
    transform: rotate(45deg);
    cursor: pointer;
    &:after,
    &:before {
        display: block;
        content: '';
        position: absolute;
        background-color: #3c3c3c;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    &:after {
        width: 100%;
        height: 2px;
    }
    &:before {
        width: 2px;
        height: 100%;
    }
    &:hover {
        &:after,
        &:before {
            background-color: red;
        }
    }
`;

export const Edit = styled.svg`
    position: absolute;
    width: 18px;
    top: 0;
    right: 40px;
    bottom: 0;
    left: auto;
    margin: auto 0;
    cursor: pointer;
    path {
        fill: #3c3c3c;
    }
    &:hover {
        path {
            fill: blue;
        }
    }
`;

export const Checkbox = styled.div`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 25px;
    height: 25px;
    border: 2px solid ${props => props.checked ? 'green' : '#9c9b9b'};
    border-radius: 50%;
    background-color: ${props => props.checked ? 'green' : 'transparent'};
    cursor: pointer;
    svg {
        display: block;
        position: absolute;
        top: 1px;
        right: 0;
        bottom: 0;
        left: 1px;
        margin: auto;
        width: 16px;
        path {
            fill: ${props => props.checked ? '#fff' : '#9c9b9b'};
        }
    }
`;

export const Title = styled.div`
    display: inline-block;
    vertical-align: middle;
    padding: 0 0 0 10px;
    max-width: calc(100% - 26px);
    color: ${props => props.checked ? 'green' : '#333'}
    font-size: 18px;
`;

export const Input = styled.input`
    display: inline-block;
    vertical-align: middle;
    padding: 0 0 0 10px;
    max-width: calc(100% - 26px);
    color: #333;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 18px;
`;

export const Buttons = styled.div`
    padding: 10px 20px;
`;

export const Button = styled.div`
    display: block;
    padding: 6px 20px;
    font-family: sans-serif;
    color: #3c3c3c;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #aeaeae;
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
    cursor: pointer;
    margin: 0 0 0 auto;
    width: 100px;
    text-align: center;
    opacity: ${props => props.value ? '1' : '0.3'};
    ${props => props.value ? '' : 'pointer-events: none'};
`;