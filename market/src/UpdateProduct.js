import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { alteration, read } from "./TemporaryValues";

export const UpdateProduct = ({ index }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const data = read(index);
        if (data) {
            setProduct(data);
        }
    }, [index]); 

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const updateProduct = () => {
        alteration(product, index);
        alert("Product Updated Successfully!");
        navigate("/");
    };

    if (!product) {
        return <h2 className="text-center mt-5 text-danger">Product not found</h2>;
    }

    

    return (
        <div className="container mt-3">
            <h3 className="text-center text-info text-uppercase text-decoration-underline">Update Product</h3>
            <div className="row justify-content-center" style={{ backgroundColor: 'palevioletred', padding: '20px' }}>
                <div className="col-lg-7 col-md-10 col-sm-12">
                    <div className="form-group mt-2">
                        <label className="fw-bolder">Product ID</label>
                        <input className="form-control" name="ProductId" value={product.ProductId} onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <label className="fw-bold">Product Name</label>
                        <input className="form-control" name="ProductName" value={product.ProductName} onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <label className="fw-bold">Product Category</label>
                        <input className="form-control" name="ProductCategory" value={product.ProductCategory} onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <label className="fw-bold">Product Price (₹)</label>
                        <input className="form-control" name="ProductPrice" type="number" value={product.ProductPrice} onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <label className="fw-bold">Product Stock</label>
                        <input className="form-control" name="ProductStock" type="number" value={product.ProductStock} onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <label className="fw-bold">Expiry Date</label>
                        <input className="form-control" name="ExpiryDate" type="date" value={product.ExpiryDate} onChange={handleChange} />
                    </div>
                    <div className="row justify-content-center mt-3">
                        <button className="btn btn-outline-success col-4" onClick={updateProduct}>Update</button>
                        <button className="btn btn-outline-danger col-4" onClick={() => navigate("/")}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};