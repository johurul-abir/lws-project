import { Outlet } from "react-router-dom";
import Topbar from "../components/top bar/Topbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
