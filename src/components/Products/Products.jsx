import "./Products.scss";
import Product from "./Product/Product"

const Products = ({innerPage, heading}) => {
    return (
        <div className="product-container">
            {!innerPage && <div className="sec-heading">{heading}</div>}
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default Products;
