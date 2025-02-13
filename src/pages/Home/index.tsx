import Hero from "./components/Hero"
import Banner from "./components/Banner"
import Features from "./components/Features"
import Products from "./components/Products"
import ProductModal from "../../components/ProductModel"

const Home = () => {

    return (
        <div>
            <ProductModal/>
            <Hero />
            <Banner />
            <Products />
            <Features />
        </div>
    )
}

export default Home