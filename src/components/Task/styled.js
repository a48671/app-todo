import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    font-family: sans-serif;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    padding: 10px 40px 10px 20px;
    &:nth-child(even) {
        background-color: #e4e2e2;
    }
    textarea {
        display: inline-block;
        vertical-align: middle;
        width: calc(100% - 35px);
        color: #333;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 16px;
        resize: none;
        &:focus {
            color: #000;
        }
    }
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
    margin-right: 10px;
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