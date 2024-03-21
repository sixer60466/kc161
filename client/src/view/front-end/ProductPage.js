import Header from "../../components/front-end/Header"
import Footer from "../../components/front-end/Footer"
import Breadcrumb from "../../components/front-end/Breadcrumb"
import BannerSection from "../../components/front-end/BannerSection"
import ProductList from "../../components/front-end/ProductList"


function ProductPage() {
    return (
        <div>
            <Header></Header>
            <BannerSection></BannerSection>
            <Breadcrumb></Breadcrumb>
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
    )
}

export default ProductPage;