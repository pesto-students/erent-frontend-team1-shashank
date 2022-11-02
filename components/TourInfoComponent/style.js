import { Button } from "antd";
import styled from "styled-components";

export const DateSelection = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    width: 50px;
    text-align: center;
    margin: 3px;
    span:nth-child(2) {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        color: #000000;
    }
`;

export const TourSelectionButton = styled(Button)`
    background: #fff;
    border: 1px solid green;
    flex: 0.5;
    margin: 10px;
    background: #fff;
    border: 1px solid green;
    border-radius: 3px;
`;
