import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export const CustomLayout = styled(Layout)`
    background: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 100%;
`;

export const CustomHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.colors.white};
    box-shadow: 0 5px 10px 0 rgb(87 101 128 / 12%);
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    p {
        margin: 0;
        font-family: "Pacifico", cursive;
        font-size: 32px;
        color: ${(props) => props.theme.colors.primary};
        margin-left: 1rem;
    }
`;

export const MenuItems = styled.ul``;
export const MenuItem = styled.li``;

export const CustomContent = styled(Content)`
    margin: 2rem 0;
    padding: 0 10px;
    overflow-y: scroll;
`;

export const CustomFooter = styled(Footer)`
    text-align: center;
    font-family: "Pacifico", cursive;
    background: ${(props) => props.theme.colors.white};
    font-size: 1rem;
`;
