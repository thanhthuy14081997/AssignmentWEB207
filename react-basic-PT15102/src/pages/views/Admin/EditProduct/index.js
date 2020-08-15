import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditProduct = ({ products, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();

    
    const [currentProduct, setCurrentProduct] = useState({
        name:"",
        image:"",
        price:""
    });
    
    const {name,image,price} = currentProduct;
    const onHandleSubmit = async (e) => {
        
        e.preventDefault();
    
       onUpdate(currentProduct);
        history.push('/edit');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    useEffect(() => {
      loadProduct();
    }, [])
    const loadProduct = async() => {
        const data = await axios.get(`http://localhost:8080/products/${id}`);
        setCurrentProduct(data.data);
    }
    return (
            
        <div class="container-fluid">
            <form action="" onSubmit={onHandleSubmit} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Image</label>
                    <input type="text" name="image" value={currentProduct.image} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}
EditProduct.propTypes = {
    products: PropTypes.array
}
export default EditProduct