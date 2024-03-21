import Header from "../../components/front-end/Header";
import BannerSection from "../../components/front-end/BannerSection";
import Breadcrumb from "../../components/front-end/Breadcrumb";
import ProductImages from "../../components/front-end/ProductImage";
import Footer from "../../components/front-end/Footer";

function ProductInnerPage() {
    return (
        <div>
            <Header></Header>
            <BannerSection></BannerSection>
            <Breadcrumb></Breadcrumb>
            <ProductImages></ProductImages>
            <Footer></Footer>
        </div>
    )
}

export default ProductInnerPage;