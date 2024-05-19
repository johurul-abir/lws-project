import { Outlet } from "react-router-dom";
import Topbar from "../components/top bar/Topbar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default Layout;
