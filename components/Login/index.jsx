import { Button } from "antd";
import { useState } from "react";

import LoginUI from "./LoginUI";

import { CustomModal } from "./style";

const Login = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleToggleModal = () => {
        setIsShowModal((prevState) => !prevState);
    };

    return (
        <div>
            <Button onClick={handleToggleModal} type="primary">
                Login/Signup
            </Button>
            {isShowModal && (
                <CustomModal
                    visible={isShowModal}
                    onOk={handleToggleModal}
                    onCancel={handleToggleModal}
                    footer={null}
                    title={null}
                >
                    <LoginUI />
                </CustomModal>
            )}
        </div>
    );
};

export default Login;
