import React from 'react'
import {useHistory} from "react-router-dom"
import { useForm } from "react-hook-form";

const Addproduct = ({onAdd}) => {
    let history = useHistory();
        const [valueInput, setValueInput] = React.useState({});

    const onHandleChange = (e) => {
        const {name,value} = e.target;
        setValueInput(
            {...valueInput,[name]: e.target.value}
        );
    }
    const onHandleSubmit = (e) => {
        //e.preventDefault();
            onAdd(valueInput);
        history.push("/");
    };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = valueInput => console.log(valueInput);
    return (
        <div>
          
                <h3>Add New Product</h3>
                <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 1 })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Phải ít nhất 5 ký tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" ref={register} className="custom-file-input" id="inputGroupFile02" name="image"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="productPrice"
                        ref={register({ required: true })}
                       
                        aria-describedby="priceHelp"
                    />
                    
                </div>
                
                    
               
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
            
        </div>
    )
}

Addproduct.propTypes = {

}

export default Addproduct
