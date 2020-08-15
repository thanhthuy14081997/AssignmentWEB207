import React, { useState, useEffect } from 'react';
import ProductsManager from './pages/views/Admin/Products';
import EditProduct from './pages/views/Admin/EditProduct'
import './App.css'
import Header from './components/Main/Header';
import Navbar from './components/Main/NavBar';
import Footer from './components/Main/Footer';
import Addproduct from './AddProducts';
import LayoutMain from './pages/layouts/LayoutMain';
import LayoutAdmin from './pages/layouts/LayoutAdmin';
import Layoutcheckout from './pages/layouts/Layoutcheckout';

import apiRequest from './API/ProductsAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import AddProduct from './components/AddProduct';
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);



const onHandleRemove = async (id) => {
  try {
    const { data } = await apiRequest.remove(id);
    const newProducts = products.filter(product => product.id !== id);
    const confirm = window.confirm("Bạn có chắc muốn xóa ?");
    if(confirm){setProducts(newProducts);}
        
  } catch (error) {
    console.log('failed to request API: ', error)
  }
}

const onHandleAdd = async (product) => {
  try {
    const { data } = await apiRequest.create(product);
    setProducts([
      ...products,
      data
    ])
  } catch (error) {
    console.log('failed to request API: ', error)
  }
}



const onHandleUpdate = (updateProduct) => {
   apiRequest.update(updateProduct.id, updateProduct);
  const newProducts = products.map(product => (
    product.id === updateProduct.id ? updateProduct : product  
  ));
  localStorage.setItem('products', JSON.stringify(newProducts))
  setProducts(newProducts);
}
  return (
   
      <Router>
    <div>
        <Header></Header>
      
        
        
          <main>
            
                <Switch>
                    <Route path="/" exact><ProductsManager products={products} onRemove={onHandleRemove} ></ProductsManager></Route>
                    <Route path="/addproduct"><Addproduct onAdd={onHandleAdd} /></Route>
                    <Route path="/edit"><EditProduct onAdd={onHandleUpdate} /></Route>
                    <Route path="/main"><LayoutMain></LayoutMain></Route>
                    <Route path="/admin"><LayoutAdmin></LayoutAdmin></Route>
                    <Route path="/checkout"><Layoutcheckout></Layoutcheckout></Route>
              </Switch>
            
          </main>
         <Footer></Footer>
        
      
    </div>
    </Router>
    
  )
  }

export default App;