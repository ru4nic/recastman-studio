import { Outlet } from 'react-router-dom';

import Footer from '../footer';
import NavBar from '../navbar';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
