import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="h-screen min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
