/* eslint-disable @next/next/no-page-custom-font */
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Template from "../src/components/Template";
import theme from "./theme";

function App() {
  return (
    <>
        <Head>
          <title>Consultorios</title>
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700;800&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap" rel="stylesheet"></link>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Template />
        </ThemeProvider>
    </>
  );
}

export default App;
