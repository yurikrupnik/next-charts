import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#8ad06c",
        },
    },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>My page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* eslint-disable-next-line */}
            <Component {...pageProps} />
        </ThemeProvider>
    </>
);

export default MyApp;
