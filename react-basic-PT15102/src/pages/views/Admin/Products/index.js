import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const ProductsManager = ({products, onRemove}) => {
    const onHandleRemove =(id) =>{
        onRemove(id)
    }
    return (
        <div>
            <div class="container-fluid">
                <h1 class="mt-4">Tables</h1>
                <div class="card mb-4">
                <Link to="/addproduct"  width="300" height="200">Thêm sản phẩm</Link>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Ảnh sản phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col" width="200"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" height="50" /></td>
                                        <td>{price}</td>
                                        <td>
                                                    
                                                    <button className="btn btn-danger" onClick={() => onHandleRemove(id)}>Xóa</button>
                                                    <Link className="btn btn-primary" to={`/edit${id}`}>Edit</Link>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                 

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
