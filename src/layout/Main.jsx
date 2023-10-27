import { Outlet } from "react-router-dom";
import Footer from "../pages/shaied/footer/Footer";
import NavBar from "../pages/shaied/navBar/NavBar";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
