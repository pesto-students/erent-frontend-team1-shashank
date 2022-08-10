import { Modal, Button, Menu } from "antd";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    .ant-modal-content {
        width: 98%;
        margin: auto;

        @media (min-width: ${(props) => props.theme.devices.mobileL}) {
            width: 380px;
        }
    }
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 80%;
    margin: auto;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const LoginUIContainer = styled.div`
    .title {
        text-align: center;
    }

    .button-container {
        width: 250px;
        margin: auto;
        margin-top: 1rem;
        button {
            width: 100%;
            padding: 1rem;
            line-height: normal;

            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: 500;
            font-size: 1.1rem;
        }
    }

    .divider {
        text-align: center;
        margin: 1rem 0;
    }

    .social-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .social-div {
            border: 1px solid ${(props) => props.theme.colors.grey};
            border-radius: 10px;
            padding: 0.3rem;
            height: 40px;
            width: 100px;

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;

            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
        }
    }
`;

export const LoginButton = styled(Button)`
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.primary};
    }
`;

export const CustomMenu = styled(Menu)`
    padding: 1rem 0;
    padding-bottom: 0.2rem;
    .ant-dropdown-menu-item:not(:last-child) {
        padding: 0.4rem 1rem;

        &:hover {
            background: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.white};
        }
    }
`;
