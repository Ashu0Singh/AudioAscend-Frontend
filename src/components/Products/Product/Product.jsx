import "./Product.scss";
import ProductImg from "../../../assets/products/earbuds-prod-1.webp"

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src = {ProductImg} alt="" />
        </div>

        <div className="product-details">
            <span className="name">Boat earbuds</span>
            <span className="price">&#8377;1699</span>
        </div>
    </div>;
};

export default Product;
