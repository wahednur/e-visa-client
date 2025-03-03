import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <div className="w-full overflow-hidden">
      <div>
        <Header />
      </div>
      <div className="h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
