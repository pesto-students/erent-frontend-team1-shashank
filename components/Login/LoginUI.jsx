/* eslint-disable @next/next/no-img-element */
import { Typography, notification } from "antd";
import { useDispatch } from "react-redux";

import CustomButton from "@components/Common/CustomButton";
import AuthServices from "@services/AuthServices";
import { GoogleIcon } from "@definitions/icons";
import { loginWithGoogle } from "@definitions/actions/login";
import { addToken } from "@lib/reducers/users.reducers";

import { ImageContainer, LoginUIContainer } from "./style";

const LoginUI = ({ handleToggleModal }) => {
    const dispatch = useDispatch();

    const handleGoogleLogin = async () => {
        const { error, idToken } = await AuthServices.loginWithGoogle();

        if (error) {
            notification.error({
                message: error,
            });
            return;
        }

        const response = await loginWithGoogle(idToken);
        if (!response.success) {
            notification.error({
                message: response.error,
            });
        } else {
            dispatch(addToken(response.token));
            handleToggleModal();
        }
    };

    return (
        <LoginUIContainer>
            <ImageContainer>
                <img
                    src="https://res.cloudinary.com/ruhanrk/image/upload/v1659618956/eRent/login_t5pidj.jpg"
                    alt="login vector"
                />
            </ImageContainer>
            <h1 className="title">Login</h1>
            <div className="button-container">
                <CustomButton type="primary">Guest Login</CustomButton>
            </div>
            <div className="divider">
                <Typography.Paragraph type="secondary">
                    Or, login with...
                </Typography.Paragraph>
            </div>
            <div className="social-container">
                <div className="social-div" onClick={handleGoogleLogin}>
                    <GoogleIcon size={25} />
                </div>
            </div>
        </LoginUIContainer>
    );
};

export default LoginUI;
