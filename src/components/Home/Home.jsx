import { useEffect , useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchData } from "../../utils/api";
import { Context } from "../../utils/context";


const Home = () => {
    const { categories , setCategories , products , setProducts} = useContext(Context);
    
    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getCategories = () => {
        fetchData("/api/categories?populate=*")
        .then(res => setCategories(res))
        .catch(error => console.log(error));
    }
    const getProducts = () => {
        fetchData("/api/products?populate=*")
        .then(res => setProducts(res))
        .catch(error => console.log(error));
    }

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products heading={"Popular Products"} products={products}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
