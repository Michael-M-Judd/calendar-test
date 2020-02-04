import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../lib/theme";

export const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
