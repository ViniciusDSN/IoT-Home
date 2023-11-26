import styled from "styled-components";

export const Body = styled.div`
    background-color: #1E2128;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    color: #e0e0e2 !important;
    justify-content: space-between;
`;

export const LogoImage = styled.img`
    height: 65px;
`;

export const SessionLinks = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
`;

export const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    color: inherit !important;
    margin: 0 15px; /* ajuste conforme necessário */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Icon = styled.div`
    font-size: 30px;
`;

export const UserIconContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`;

export const UserIcon = styled.div`
    font-size: 50px;
`;

export const Children = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    padding: 0 40px;
`;