import { Dropdown, Button, notification } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { UserLoggedInIcon } from "@definitions/icons";

import { logout } from "@lib/reducers/users.reducers";

import { LoginButton, CustomMenu } from "./style";

const UserDropdown = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        notification.info({
            message: "Successfully logged out",
        });
    };

    const menu = (
        <CustomMenu
            items={[
                {
                    label: (
                        <Link href="/" className="item">
                            <a>My Profile</a>
                        </Link>
                    ),
                    key: "0",
                },
                {
                    label: (
                        <Link href="/" className="item">
                            <a>Dashboard</a>
                        </Link>
                    ),
                    key: "1",
                },
                {
                    type: "divider",
                },
                {
                    label: (
                        <Button onClick={handleLogout} danger type="text">
                            Logout
                        </Button>
                    ),
                    key: "3",
                },
            ]}
        />
    );
    return (
        <Dropdown overlay={menu} trigger={["click"]}>
            <LoginButton
                shape="circle"
                icon={<UserLoggedInIcon size="1.3rem" />}
            />
        </Dropdown>
    );
};

export default UserDropdown;
