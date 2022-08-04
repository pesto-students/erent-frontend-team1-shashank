import { Button } from "antd";
import styled from "styled-components";

export const CustomButton = styled(Button)`
    border-radius: ${(props) => props.theme.borderRadius.button}px;
`;
