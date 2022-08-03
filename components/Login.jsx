import { Button } from "antd";

import { magic } from "@lib/magic-client";

const Login = () => {
    const handleClick = async () => {
        try {
            const didToken = await magic.auth.loginWithMagicLink({
                email: "test+success@magic.link",
            });
            const response = await magic.user.getMetadata();
            console.log("didToken", didToken);
            console.log("response", response);
        } catch (error) {
            console.log("error", error);
        }
    };
    return (
        <div>
            <Button onClick={handleClick} type="primary">
                Login/Signup
            </Button>
        </div>
    );
};

export default Login;
