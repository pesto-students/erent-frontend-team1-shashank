import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notification } from "antd";

import "@lib/firebase";
import { StyledThemeProvider } from "@definitions/styled-components/styled-components";
import AuthServices from "@services/AuthServices";
import { loginWithGoogle } from "@definitions/actions/login";
import wrapper from "@lib/store";
import { addToken } from "@lib/reducers/users.reducers";
import MasterLayout from "@layouts/MasterLayout";

require("../styles/variables.less");
import GlobalStyle from "@styles/globalStyles";

function MyApp({ Component, pageProps }) {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!users.token && !token) {
            AuthServices.waitForUser(async (userData) => {
                const response = await loginWithGoogle(userData.idToken);
                if (!response.success) {
                    notification.error({
                        message: response.error,
                    });
                } else {
                    dispatch(addToken(response.token));
                }
            });
        } else if (token) {
            dispatch(addToken(token));
            //TODO: GET user data from API
        }
    }, [dispatch, users.token]);

    return (
        <>
            <GlobalStyle />
            <StyledThemeProvider>
                <MasterLayout>
                    <Component {...pageProps} />
                </MasterLayout>
            </StyledThemeProvider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
