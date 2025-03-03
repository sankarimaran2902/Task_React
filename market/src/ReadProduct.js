import { useParams, useNavigate } from 'react-router-dom';
import { read } from './TemporaryValues';

export const ReadProduct = () => {
    const { index } = useParams(); 
    const navigate = useNavigate();
    const product = read(index); 

    return (
        <div className="container text-center mt-5">
            <div className="row justify-content-center">
                <div className="bg-success text-light fw-bold col-lg-8 col-md-10 col-sm-12 p-4">
                    <h2>Product Details</h2>
                    <ul className="list-unstyled">
                        <li><b>Product ID:</b> {product.ProductId}</li>
                        <li><b>Product Name:</b> {product.ProductName}</li>
                        <li><b>Category:</b> {product.ProductCategory}</li>
                        <li><b>Price:</b> ₹{product.ProductPrice}</li>
                        <li><b>Stock:</b> {product.ProductStock} units</li>
                        <li><b>Expiry Date:</b> {product.ExpiryDate}</li>
                    </ul>
                    <button className="btn btn-outline-secondary mt-3" onClick={() => navigate("/")}>Back</button>
                </div>
            </div>
        </div>
    );
};