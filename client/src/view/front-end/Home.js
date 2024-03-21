import Header from "../../components/front-end/Header";
import BannerSection from "../../components/front-end/BannerSection";
import MainContent from "../../components/front-end/MainContent";
import Footer from "../../components/front-end/Footer";
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <Header></Header>
            <BannerSection></BannerSection>
            <MainContent></MainContent>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    )
}

export default Home;