import { useState } from "react";
import { create } from "./TemporaryValues";

export const ProductRegistration = () => {
    const [product, setProduct] = useState({
        "ProductId": "",
        "ProductName": "",
        "ProductCategory": "",
        "ProductPrice": "",
        "ProductStock": "",
        "ExpiryDate": ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const registerProduct = () => {
        create(product);
        alert("Product Registered Successfully!");
    };

    return (
        <div className="container mt-3">
            <h3 className='text-center text-info'>New Product Registration</h3>
            <div className="form-group mt-3">
                <label>Product ID</label>
                <input className="form-control" name="ProductId" onChange={handleInputChange} />
            </div>

            <div className="form-group mt-3">
                <label>Product Name</label>
                <input className="form-control" name="ProductName" onChange={handleInputChange} />
            </div>
            <div className="form-group mt-3">
                <label>Category</label>
                <input className="form-control" name="ProductCategory" onChange={handleInputChange} />
            </div>
            <div className="form-group mt-3">
                <label>Price</label>
                <input className="form-control" type="number" name="ProductPrice" onChange={handleInputChange} />
            </div>
            <div className="form-group mt-3">
                <label>Stock</label>
                <input className="form-control" type="number" name="ProductStock" onChange={handleInputChange} />
            </div>
            <div className="form-group mt-3">
                <label>Expiry Date</label>
                <input className="form-control" type="date" name="ExpiryDate" onChange={handleInputChange} />
            </div>
            <button className="btn btn-outline-success mt-3" onClick={registerProduct}>Register</button>
        </div>
    );
};