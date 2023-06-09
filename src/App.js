import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from  './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import NewsLetter from './components/Footer/Newsletter/Newsletter';

import AppContext from './utils/context';

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/E-Commerce/' element={<Home/>}/>
                    <Route path='/E-Commerce/category/:id' element={<Category />}/>
                    <Route path='/E-Commerce/product/:id' element={<SingleProduct/>}/>
                </Routes>
                <NewsLetter />
                <Footer />
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
