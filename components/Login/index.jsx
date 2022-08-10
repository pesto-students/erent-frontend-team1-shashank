import { Tooltip } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

import LoginUI from "./LoginUI";

import { UserIcon } from "@definitions/icons";

import { CustomModal, LoginButton } from "./style";
import common from "@definitions/styled-components/colors/common";
import UserDropdown from "./UserDropdown";

const Login = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const users = useSelector((state) => state.users);

    const handleToggleModal = () => {
        setIsShowModal((prevState) => !prevState);
    };

    return (
        <div>
            {users.token ? (
                <UserDropdown />
            ) : (
                <Tooltip
                    placement="bottomLeft"
                    title="Login"
                    color={common.colors.primary}
                >
                    <LoginButton
                        shape="circle"
                        icon={<UserIcon size="1.3rem" />}
                        onClick={handleToggleModal}
                    />
                </Tooltip>
            )}
            {isShowModal && (
                <CustomModal
                    visible={isShowModal}
                    onOk={handleToggleModal}
                    onCancel={handleToggleModal}
                    footer={null}
                    title={null}
                >
                    <LoginUI handleToggleModal={handleToggleModal} />
                </CustomModal>
            )}
        </div>
    );
};

export default Login;
