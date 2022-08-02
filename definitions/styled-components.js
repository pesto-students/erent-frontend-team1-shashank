import React, { useMemo, useCallback, createContext } from "react";
import { ThemeProvider } from "styled-components";

import light from "./colors/light";
import dark from "./colors/dark";

export const ThemeContext = createContext({
    theme: "light",
    toggle: () => undefined,
});

export const StyledThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");

    const toggle = useCallback(() => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    }, []);
    const values = useMemo(
        () => ({
            theme,
            toggle,
        }),
        [toggle, theme],
    );

    return (
        <ThemeContext.Provider value={values}>
            <ThemeProvider theme={theme === "light" ? light : dark}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
