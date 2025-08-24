import { Outlet } from "react-router-dom";
import Header from "../pages/header.jsx";
import Footer from "../pages/footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
