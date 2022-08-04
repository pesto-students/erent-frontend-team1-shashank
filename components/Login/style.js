import { Modal } from "antd";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    .ant-modal-content {
        width: 98%;
        margin: auto;

        @media (min-width: ${(props) => props.theme.devices.mobileM}) {
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
            width: 80px;

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
