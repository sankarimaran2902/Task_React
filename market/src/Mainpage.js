import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { deleting, fetchexact, list } from './TemporaryValues';
import { UpdateProduct } from './UpdateProduct';
import { ReadProduct } from './ReadProduct';
import { ProductRegistration } from './ProductRegistration';

export const MainPage = () => {
    const [productArray, setProductArray] = useState([]);
    const [createView, setCreateView] = useState(false);
    const [readView, setReadView] = useState(false);
    const [pos, setPos] = useState(0);
    const [updateView, setUpdateView] = useState(false);
    const [productObj, setProductObj] = useState({});

    useEffect(() => {
        setProductArray(list());
    }, []);

    return (
        <div className='container row justify-content-center'>
            {createView ? (
                <>
                    <ProductRegistration />
                    <button className='btn btn-outline-secondary' onClick={() => setCreateView(false)}>Back</button>
                </>
            ) : readView ? (
                <>
                    <ReadProduct index={pos} />
                    <button className='btn btn-outline-secondary col-5 mt-5' onClick={() => setReadView(false)}>Back</button>
                </>
            ) : updateView ? (
                <>
                    <UpdateProduct index={pos} product={productObj} />
                    <button className='btn btn-outline-secondary' onClick={() => setUpdateView(false)}>Back</button>
                </>
            ) : (
                <>
                    <button className='btn btn-outline-success' onClick={() => setCreateView(true)}>
                        Register New Product
                    </button>
                    <div className='table-responsive-md mt-5'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Category</td>
                                    <td>Price</td>
                                    <td>Stock</td>
                                    <td>Expiry Date</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {productArray.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.ProductId}</td>
                                        <td>{product.ProductName}</td>
                                        <td>{product.ProductCategory}</td>
                                        <td>{product.ProductPrice}</td>
                                        <td>{product.ProductStock}</td>
                                        <td>{product.ExpiryDate}</td>
                                        <td>
                                            <button className='btn btn-outline-warning' onClick={() => { setReadView(true); setPos(index); }}>Read</button>
                                            <button className='btn btn-outline-info' onClick={() => { setUpdateView(true); setPos(index); setProductObj(fetchexact(product.ProductName)); }}>Edit</button>
                                            <button className='btn btn-outline-danger' onClick={() => setProductArray(deleting(index))}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};