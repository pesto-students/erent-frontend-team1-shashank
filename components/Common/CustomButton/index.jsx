import { CustomButton } from "./style";

const index = ({ children, ...props }) => {
    return <CustomButton {...props}>{children}</CustomButton>;
};

export default index;
