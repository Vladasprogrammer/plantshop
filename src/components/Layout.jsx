import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import TopBaner from "./TopBanner";

export default function Layout() {

  return (
    <>
    <TopBaner />
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}