import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { grey } from '@mui/material/colors';
import { BrowserRouter } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import SideNav from './components/SideNav';
import './css/main.css';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'dark' && {
        main: '#E31826',
        dark: '#CE1623',
        light: '#E62D3A',
      }),
    },
    secondary: {
      ...(mode === 'dark' && {
        main: '#e2d412',
      }),
    },
    gold: {
      main: '#E31826',
      dark: '#BB1420',
      contrastText: '#fff',
    },
    silver: {
      main: '#E2DADB',
      dark: '#BAB4B5',
      contrastText: '#000',
    },
    bronze: {
      main: '#c77b30',
      contrastText: '#000',
    },
    white: {
      main: '#fff',
      contrastText: '#000',
    },
    ...(mode === 'dark' && {
      background: {
        default: '#191C23',
        paper: '#1E222B',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
          primary: grey[900],
          secondary: grey[800],
        }
        : {
          primary: '#fff',
          secondary: grey[500],
        }),
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5:{
      fontSize: 26,
    },
    subtitle1: {
      fontWeight: 400,
    },
    base: {
      fontSize: 17,
    },
  },
});

const darkModeTheme = createTheme(getDesignTokens('dark'));
const theme = responsiveFontSizes(darkModeTheme);
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <SideNav />
          <BottomNav />
        </ThemeProvider>
      </div >
    </BrowserRouter>

  );
}

export default App;
