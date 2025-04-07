import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import TopBaner from "./TopBanner";

export default function Layout() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
    <TopBaner />
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer isHomePage={isHomePage}/>
    </>
  )
}