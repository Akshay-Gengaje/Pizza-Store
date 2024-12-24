import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const AppLayout = () => {
  return (
    <div className="h-screen min-h-screen max-w-[100vw]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
