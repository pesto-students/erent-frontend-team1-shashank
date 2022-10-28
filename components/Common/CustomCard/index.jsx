import { CustomCard } from "./style";

const index = ({ children, ...props }) => {
    return <CustomCard {...props}>{children}</CustomCard>;
};

export default index;
