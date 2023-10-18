import styled from "styled-components";

export const Body = styled.div`
    background-color: #0c1821;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    color: #ccc0dc !important;
    justify-content: space-between;
`;

export const SessionLinks = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
`;

export const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    color: inherit !important;
`;

export const Children = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    padding: 0 40px;
`;