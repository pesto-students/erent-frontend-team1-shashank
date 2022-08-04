/* eslint-disable @next/next/no-img-element */
import { MdOutlineAlternateEmail, MdFacebook } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Typography } from "antd";

import CustomInput from "@components/Common/CustomInput";
import CustomButton from "@components/Common/CustomButton";

import loginVector from "@assets/login.jpg";

import { ImageContainer, LoginUIContainer } from "./style";

const LoginUI = () => {
    return (
        <LoginUIContainer>
            <ImageContainer>
                <img
                    src="https://res.cloudinary.com/ruhanrk/image/upload/v1659618956/eRent/login_t5pidj.jpg"
                    alt="login vector"
                />
            </ImageContainer>
            <h1 className="title">Login</h1>
            <div className="input-container">
                <CustomInput
                    type="email"
                    name="email"
                    prefix={<MdOutlineAlternateEmail color="gray" />}
                    placeholder="Email ID"
                />
                <CustomInput
                    type="password"
                    name="password"
                    prefix={<BsShieldLockFill color="gray" />}
                    placeholder="Password"
                />
            </div>
            <div className="button-container">
                <CustomButton type="primary">Guest Login</CustomButton>
            </div>
            <div className="divider">
                <Typography.Paragraph type="secondary">
                    Or, login with...
                </Typography.Paragraph>
            </div>
            <div className="social-container">
                <div className="social-div">
                    <FcGoogle size={25} />
                </div>
                <div className="social-div">
                    <MdFacebook size={25} color="#4267B2" />
                </div>
                <div className="social-div">
                    <AiFillApple size={25} />
                </div>
            </div>
        </LoginUIContainer>
    );
};

export default LoginUI;
