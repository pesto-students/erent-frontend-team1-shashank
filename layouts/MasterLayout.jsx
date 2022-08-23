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
                    <button className="addProperty">Add Property</button>
                    </MenuItem>
                    <MenuItem>
                        <Login />
                    </MenuItem>
                </MenuItems>
            </CustomHeader>
            <CustomContent>{children}</CustomContent>
            <CustomFooter>
                <div className="topFooter">
                    <div className="footerbox">
                        <LogoContainer>
                            <Image
                                src="https://res.cloudinary.com/ruhanrk/image/upload/v1660138263/eRent/eRentLogo_zyouuz.png"
                                alt="homelisti"
                                width={50}
                                height={50}
                            />
                            <p>Homelisti</p>
                        </LogoContainer>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>

                    <div className="footerbox">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog & Articles</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footerbox">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog & Articles</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footerbox">
                        <h3>Contact Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="bottomFooter">
                    Homelisti ©{moment().format("YYYY")}
                </div>
            </CustomFooter>
        </CustomLayout>
    );
};

export default MasterLayout;
