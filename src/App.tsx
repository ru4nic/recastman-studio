import GlobalStyle from './components/layout/GlobalStyle';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';

import Home from './components/pages/home';
import MainLayout from './components/layout/MainLayout';
import NotFound from './components/pages/404';
import Editing from './components/pages/editing';
import Mixing from './components/pages/mixing';
import VideoClip from './components/pages/videoclip';
import SessionMusicians from './components/pages/session-musicians';
import Reamping from './components/pages/reamping';
import Recording from './components/pages/recording';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import light from './assets/fonts/OpenSans/open-sans-v35-cyrillic_latin-300.woff2';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[900],
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: local('Raleway'), url(${light}) format('woff2');
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
  },
});

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes key={location.pathname} location={location}>
          <Route path="/recastman-studio/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/recastman-studio/editing" element={<Editing />} />
            <Route path="/recastman-studio/mixing" element={<Mixing />} />
            <Route path="/recastman-studio/recording" element={<Recording />} />
            <Route
              path="/recastman-studio/session-musicians"
              element={<SessionMusicians />}
            />
            <Route path="/recastman-studio/reamping" element={<Reamping />} />
            <Route
              path="/recastman-studio/video-clip"
              element={<VideoClip />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
