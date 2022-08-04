import { StyledThemeProvider } from "@definitions/styled-components/styled-components";

require("../styles/variables.less");
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
