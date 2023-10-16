
import './App.css';
import { Navbar } from './components/Navbar';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import  {Products}  from './components/Products';
import {Home }from './components/Home';
import { Product } from './components/Product';
import { Cart } from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    
    <Route  path='/' element={<Home/>} />
    <Route  path='/products' element={<Products/>} />
    <Route path='/products/:id' element={<Product />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/checkout' element={<Checkout />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/> 
       </Routes>
    
     
    </BrowserRouter>
    
   
    </>
  );
}

export default App;
