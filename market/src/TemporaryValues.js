let ProductDetails = [
    {
        "ProductId": 1,
        "ProductName": "Milk",
        "ProductCategory": "Dairy",
        "ProductPrice": 50,
        "ProductStock": 20,
        "ExpiryDate": "2025-05-10"
    },
    {
        "ProductId": 2,
        "ProductName": "Sugar",
        "ProductCategory": "Grocery",
        "ProductPrice": 45,
        "ProductStock": 100,
        "ExpiryDate": "2026-01-01"
    }
];


export const create = (product) => {
    ProductDetails.push(product);
};


export const list = () => {
    return ProductDetails;
};


export const read = (index) => {
    return ProductDetails[index];
};


export const fetchexact = (name) => {
    const temp = ProductDetails.filter((product) => product.ProductName === name);
    return temp[0];
};


export const alteration = (updatedProduct, index) => {
    ProductDetails[index] = updatedProduct;
};


export const deleting = (index) => {
    let confirmation = prompt("Are you sure you want to delete this product? (yes/no)");
    if (confirmation.toLowerCase() === 'yes') {
        ProductDetails = ProductDetails.filter((_, ind) => ind !== index);
        return ProductDetails;
    } else {
        alert("Product deletion cancelled.");
        return ProductDetails;
    }
};