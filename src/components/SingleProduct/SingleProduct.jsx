import "./SingleProduct.scss";

import RelatedProducts from "./RelatedProducts/RelatedProducts"
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"

import ProductImg from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={ProductImg} alt="" />
                    </div>
                    <div className="right">
                        <div className="name">Name</div>
                        <div className="price">Price</div>
                        <div className="desc"></div>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category : 
                                <span> Headphones</span>
                            </span>
                            <span className="text-bold">
                                Socials : 
                                <span className="social-icons">
                                    <FaFacebookF size = {16}/>
                                    <FaInstagram size = {16}/>
                                    <FaTwitter size = {16}/>
                                    <FaLinkedinIn size = {16}/>
                                    <FaPinterest size = {16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
