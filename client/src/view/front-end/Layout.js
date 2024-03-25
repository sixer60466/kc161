import Header from "../../components/front-end/Header";
import BannerSection from "../../components/front-end/BannerSection";
import Footer from "../../components/front-end/Footer";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <div>
            <Header></Header>
            <BannerSection></BannerSection>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Layout;

