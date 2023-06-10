import { Route, Routes, BrowserRouter } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import "@fontsource-variable/manrope";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#Fefefe",
    },
  },
  typography: {
    fontFamily: "Roboto Condensed",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
