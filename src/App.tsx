import { Route, Routes, useLocation } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import ThemeProvider from '@mui/material/styles/ThemeProvider';

import MainLayout from './layout/router-main-layout/router-main-layout';

import GlobalStyles from './layout/globalstyles';

import Home from './pages/home';
import VideoClip from './pages/videoclip';
import Mixing from './pages/mixing';

import { muiTheme } from './theme';
import { links } from './data/links';
import Recording from './pages/recording';
import Reamping from './pages/reamping';
import Editing from './pages/editing';
import SessionMusicians from './pages/session-musicians';

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={muiTheme}>
        <Routes key={location.pathname} location={location}>
          <Route path={links.pages.home} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={links.pages.video} element={<VideoClip />} />
            <Route path={links.pages.mixing} element={<Mixing />} />
            <Route path={links.pages.recording} element={<Recording />} />
            <Route path={links.pages.reamping} element={<Reamping />} />
            <Route path={links.pages.editing} element={<Editing />} />
            <Route
              path={links.pages.sessionMusicians}
              element={<SessionMusicians />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
