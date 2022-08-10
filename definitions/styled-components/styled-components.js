import React, { useMemo, useCallback, createContext } from "react";
import { ThemeProvider } from "styled-components";

import light from "./colors/light";
import dark from "./colors/dark";
import devices from "./sized/devices";

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

    const styledTheme = theme === "light" ? light : dark;

    styledTheme.devices = devices;

    return (
        <ThemeContext.Provider value={values}>
            <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
