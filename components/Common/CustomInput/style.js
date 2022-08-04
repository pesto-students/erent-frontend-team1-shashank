import { Input } from "antd";
import styled from "styled-components";

export const CustomInput = styled(Input)`
    border-top: none;
    border-left: none;
    border-right: none;
    padding-bottom: 0.7rem;
    .ant-input-prefix {
        margin-right: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    &:focus,
    &:hover {
        outline: none !important;
        border-color: grey !important;
        box-shadow: none !important;
    }
`;
