import { useEffect, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Conext } from "../../utils/context";

import "./Header.scss";

const Header = () => {

    const [isScrolled,setIsScrolled] = useState(false);
    const [showCart , setShowCart] = useState(false)
    const [showSearch , setShowSearch] = useState(false)

    const handelScroll = () => {
        const offset = window.scrollY;
        setIsScrolled( offset > 100 ? true : false );
    }

    useEffect(() => {
        window.addEventListener("scroll",handelScroll);
    }, [])

    return (
        <>
            <header className={`main-header ${isScrolled? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">Watches</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(!showSearch)}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowCart(!showCart)}>
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </> 
    );
}

export default Header;