import { Modal, Button, Menu } from "antd";
import styled from "styled-components";

export const BannerImage = styled.div`
    width: 100%;
    margin: auto;
    min-height: 550px;
    position: relative;
    padding: 50px;
    background: ${(props) => props.theme.colors.secondary};
    @media screen and (min-width: 100px) and (max-width: 768px){
        width: 100%;
        min-height: auto;
    }

    .bannerContainer{
        width: 80%;
        margin: auto;
        position: relative;
        @media screen and (min-width: 100px) and (max-width: 768px){
            width: 100%;

            img{
                width: 100%;
                height: auto;
            }
        }
    }

    img {
        // width: 100%;
        // height: 100%;
    }

    .bannerForm{
        width: 400px;
        background: #fff;
        padding: 30px;
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);

        @media screen and (min-width: 100px) and (max-width: 768px){
            display: none;
        }
        
        input, select{
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            margin-bottom: 15px;
            color: #787878;
            border-radius: 2px;
            outline: none;
        }
        div.formControl{
            display: flex;
            align-items: stretch;

            button.findproperty, button.reset{
                width: 150px;
                background: #13b18c;
                color: #fff;
                height: 40px;
                border: none;
                cursor: pointer;
                flex-grow:8;
            }
            button.reset{
                background: #fff;
                color: #787878;
                flex-grow:4;
                border: 1px solid #787878;
                margin-left: 10px;
            }
        }
        .rangeSliderDiv{
            position : relative;
            .RangeSlider{
                .rangePrice{
                    text-align: right;
                    padding-right: 12px;
                    .ant-input-number{
                        border: none;
                        width: 32px;
                        max-width: 32px;
                        .ant-input-number-handler-wrap{
                            display: none;
                        }
                        .ant-input-number-input-wrap{
                            width: auto;
                            input{
                                border: none;
                                pointer-events: none;
                                padding: 0;
                                margin-bottom: 0;
                                width:auto;
                                // text-align: center;
                            }
                        }
                    }
                }
                .RangeSliderDivSection{
                    position: relative;
                    p{
                        position: absolute;
                        top: -37px;
                    }
                    .ant-slider{
                        margin: 10px 3px 10px -3px;
                    }
                }
            }
        }
    }

`;


export const LatestProperty = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    padding: 50px;
    background: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 100px) and (max-width: 768px){
        padding: 20px;
    }

    h3{
        color: #13b18c;
    }
    h1{
        font-size: 32px;
        color: #212121;
        font-weight:
    }


`;

export const LatestPropertyList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    @media screen and (min-width: 100px) and (max-width: 768px){
        width: 100%;
    }
    
    .propertyList{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        flex-basis: 31%;
        position: relative;
        border-radius: 4px;
        box-shadow: 0 4px 18px 0 rgb(194 200 213 / 30%);
        height: 350px;
        overflow: hidden;
        @media screen and (min-width: 100px) and (max-width: 768px){
            flex-basis: 100%;
        }
        &::before{
            content: "";
            height: 70%;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            transition: all 0.3s ease-in-out;
            pointer-events: none;
            background: linear-gradient(to top, #000, transparent);
            opacity: 80%;
            z-index: 5;
        }

        img{
            width: 100%;
            border-radius: 4px;
        }

        .propertyDetails{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 9;
            padding: 50px 25px 10px;
            background: transparent;
            border: none;
            color: #fff;
            text-align: left;

            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0;
                background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
                transition: 0.4s ease-in-out;
                z-index: -1;
            }

            h2{
                color: #fff
            }
            h4{
                color: #fff;
                border-bottom: 1px solid rgba(255, 255, 255, .2);
                padding-bottom: 10px;
                font-weight: 500;
                &:hover{
                    color: #13b18c;
                    cursor: pointer;
                }
            }
            .amenity{
                span{
                    width: 33%;
                    display: inline-block;
                }
                span.bed{
                    text-align: left;
                }
                span.shower{
                    text-align: center;
                }
                span.area{
                    text-align: right;
                }
            }
        }
    }

    .viewallproperties{
        padding: 17px 40px 17px 40px;
        border-radius: 4px;
        color: #00c194;
        background: #dceeea;
        border: none;
        margin: 30px auto 0;
        &:hover{
            cursor: pointer;
            background: #00c194;
            color: #fff
        }
    }
`;

export const WhyChooseUs = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    padding: 50px;
    background: ${(props) => props.theme.colors.secondary};
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 100px) and (max-width: 768px){
        padding: 20px;
    }

    h3{
        color: #13b18c;
    }
    h1{
        font-size: 32px;
        color: #212121;
        font-weight:
    }

`;

export const WhyChooseReason = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    @media screen and (min-width: 100px) and (max-width: 768px){
        width: 100%;
    }

    .whychoosereasonbox{
        // display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 33%;
        position: relative;
        border-radius: 4px;
        padding: 50px;
        cursor: pointer;
        @media screen and (min-width: 100px) and (max-width: 768px){
            flex-basis: 100%;
            padding: 10px;
        }
        
        .avatar{
            width: 100px;
            height: 100px;
            background: #fff;
            border-radius: 50%;
            margin: 20px auto;

            span{
                font-size: 50px;
                font-weight: 200;
                line-height: 120px;
                color: #13b18c;
            }
            &:hover{
                background: #13b18c;
                color: #fff;
                cursor: pointer;
            }
        }
        h3{
            font-size: 22px;
            color: #212121;
        }
        p{
            color: #70778B;
            font-size: 14px;
            padding: 0 60px;
            @media screen and (min-width: 100px) and (max-width: 768px){
                padding: 0px 0px;
            }
        }
        &:hover .avatar{
            background: #13b18c;
            color: #fff;
            cursor: pointer;

            span{
                color: #fff;
            }
        }
        
    }
    img.paralaxImage{
        position: absolute;
        right:0;
        bottom: 0;
        @media screen and (min-width: 100px) and (max-width: 768px){
            display: none;
        }
    }
`;
