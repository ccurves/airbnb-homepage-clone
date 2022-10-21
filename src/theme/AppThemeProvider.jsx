import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const AppThemeProvider = (prop) => {
  return <ThemeProvider theme={theme}> {prop.children} </ThemeProvider>;
};

export default AppThemeProvider;
