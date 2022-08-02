import { StyledThemeProvider } from "@definitions/styled-components";

import "antd/dist/antd.css";
import GlobalStyle from "@styles/globalStyles";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <StyledThemeProvider>
                <Component {...pageProps} />
            </StyledThemeProvider>
        </>
    );
}

export default MyApp;
