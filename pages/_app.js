import { StyledThemeProvider } from "@definitions/styled-components";

import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <StyledThemeProvider>
            <Component {...pageProps} />
        </StyledThemeProvider>
    );
}

export default MyApp;
