import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export const CustomLayout = styled(Layout)`
    // background: ${(props) => props.theme.colors.secondary};
    width: 100%;
    // height: 100%;
`;

export const CustomHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.colors.white};
    box-shadow: 0 5px 10px 0 rgb(87 101 128 / 12%);
    @media screen and (min-width: 100px) and (max-width: 768px){
        padding: 0 10px;
    }
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
        @media screen and (min-width: 100px) and (max-width: 768px){
            display: none;
        }
    }
`;

export const MenuItems = styled.ul``;
export const MenuItem = styled.li`
    list-style-type: none;
    display: inline-block;
    padding: 0 10px;
    button.addProperty{
        border: none;
        padding: 0 20px;
        border-radius: 25px;
        height: 40px;
        line-height: 40px;
        margin-top: 18px;
        background-color: #00c194;
        color: #fff;
        @media screen and (min-width: 100px) and (max-width: 768px){
            height: 30px;
            line-height: 30px;
            margin-top: 30px;
        }
    }
    button.loginbtn{
        position: relative;
        top: 6px;
    }
    &::marker{
        display: none;
    }
`;

export const CustomContent = styled(Content)`
    margin: 0rem 0;
    // padding: 0 50px;
`;

export const CustomFooter = styled(Footer)`
    text-align: center;
    font-family: "Pacifico", cursive;
    background: url('https://res.cloudinary.com/ruhanrk/image/upload/v1661085084/eRent/footer-2-bg_md9y2k.jpg') no-repeat;
    font-size: 1rem;
    color: #fff;
    padding: 50px 0 0;
    background-position: center;
    background-attachment: fixed;

    .topFooter{
        width: 80%;
        margin: 0 auto;
        @media screen and (min-width: 100px) and (max-width: 768px){
            width: 100%;
        }
        .footerbox{
            width: 25%;
            text-align: left;
            padding-bottom: 50px;
            display: inline-block;
            @media screen and (min-width: 100px) and (max-width: 768px){
                width: 90%;
            }
            div{
                text-align: left;
                display: flex;
                align-items: start;
                justify-content: start;
                align-items: start;
            }
            p{
                font-family: 'Roboto Mono',monospace;
            }
            h3{
                font-size: 20px;
                color: #fff;
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 5px;
                    background: #00C194;
                    left: 0;
                    bottom: -10px;
                    border-radius: 4px;
                }
            }
            ul{
                margin: 0;
                padding: 0;
                padding-left: 16px;
                margin-top: 20px;
                li{
                    display: list-item;
                    a{
                        color: #fff;
                    }
                    &:hover a{
                        color: #00C194
                    }
                }
            }
        }
    }

    .bottomFooter{
        text-align: center;
        font-family: "Pacifico", cursive;
        background: #082039;
        font-size: 1rem;
        color: #fff;
        padding: 20px 0;

    }
`;
