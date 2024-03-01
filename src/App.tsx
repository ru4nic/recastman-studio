import { Route, Routes, useLocation } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import ThemeProvider from '@mui/material/styles/ThemeProvider';

import MainLayout from './layout/main-layout/MainLayout';

import GlobalStyles from './layout/globalstyles';
import Home from './pages/home';

import { muiTheme } from './theme';

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={muiTheme}>
        <Routes key={location.pathname} location={location}>
          <Route path="/recastman-studio/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
