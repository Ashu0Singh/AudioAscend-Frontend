import { useEffect } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchData } from "../../utils/api";

const Home = () => {
    
    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        fetchData("/api/categories?populate=*")
        .then(res => console.log(res));
    }

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products heading={"Popular Products"}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
