import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    padding: 10px 40px 10px 20px;
    font-face: sans-serif;
    &:nth-child(even) {
        background-color: #e4e2e2;
    }
`;

export const Close = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    right: 20px;
    bottom: 0;
    left: auto;
    margin: auto 0;
    transform: rotate(45deg);
    cursor: pointer;
    &::after,
    &::before {
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
    &::after {
        width: 100%;
        height: 2px;
    }
    &::before {
        width: 2px;
        height: 100%;
    }
`;

export const Checkbox = styled.div`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 25px;
    height: 25px;
    border: 2px solid #9c9b9b;
    border-radius: 50%;
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
            fill: #9c9b9b;
        }
    }
`;

export const Title = styled.div`
    display: inline-block;
    vertical-align: middle;
    padding: 0 0 0 10px;
    max-width: calc(100% - 26px);
`;