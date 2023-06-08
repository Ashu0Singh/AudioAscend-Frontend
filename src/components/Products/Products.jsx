import "./Products.scss";
import Product from "./Product/Product"

const Products = ({innerPage, heading , products}) => {
    return (
        <div className="product-container">
            {!innerPage && <div className="sec-heading">{heading}</div>}
            <div className="products" >
                {products?.data?.map(product => {
                    return <Product 
                                key={product.id}
                                id={product.id}
                                data={product.attributes}
                            />
                })}
            </div>
        </div>
    );
};

export default Products;
