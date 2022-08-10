import moment from "moment";
import Image from "next/image";

import Login from "@components/Login";

import {
    CustomLayout,
    CustomHeader,
    LogoContainer,
    MenuItems,
    MenuItem,
    CustomContent,
    CustomFooter,
} from "./style";

const MasterLayout = ({ children }) => {
    return (
        <CustomLayout className="layout">
            <CustomHeader>
                <LogoContainer>
                    <Image
                        src="https://res.cloudinary.com/ruhanrk/image/upload/v1660138263/eRent/eRentLogo_zyouuz.png"
                        alt="homelisti"
                        width={50}
                        height={50}
                    />
                    <p>Homelisti</p>
                </LogoContainer>
                <MenuItems>
                    <MenuItem>
                        <Login />
                    </MenuItem>
                </MenuItems>
            </CustomHeader>
            <CustomContent>{children}</CustomContent>
            <CustomFooter>Homelisti ©{moment().format("YYYY")}</CustomFooter>
        </CustomLayout>
    );
};

export default MasterLayout;
