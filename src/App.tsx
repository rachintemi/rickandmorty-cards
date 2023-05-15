import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./Router";
import Layout from "./layout/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4C29",
    },
    secondary: {
      main: "#C4FB6D",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AppRouter />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
