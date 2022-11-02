import styled from "styled-components";

export const MainContainer = styled.div`
    .description {
        border-bottom: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .flex {
        display: flex;
    }
    .align-center {
        align-items: center;
    }
    .space-between {
        justify-content: space-between;
    }
    .mt {
        margin-top: 5px;
    }
`;

export const LabelContainer = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #e8e9f1;
    filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    svg:not(:root).svg-inline--fa,
    svg:not(:host).svg-inline--fa {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        height: 25px;
        color: #53d8bb;
    }
`;
export const LabelTitle = styled.p`
    margin: 0;
    font-family: "Roboto Mono", monospace;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
`;

export const UlLIst = styled.ul`
    list-style: none;
    padding: 5px;
    li {
        display: flex;
        margin-bottom: 20px;
    }
`;
