import "./Category.scss";
import { useNavigate } from 'react-router-dom'

const Category = ({categories}) => {
    const navigate = useNavigate();

    const elements = categories.data.map(item => {
                        return (
                            <div key={item .id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                                <img src={process.env.REACT_APP_DEV_URL+item.attributes.img.data[0].attributes.url} alt="" />
                            </div>
                        )
                    });
    return <div className="shop-by-category">
        <div className="categories">
            {categories? elements:<div></div>}
        </div>
    </div>;
};

export default Category;