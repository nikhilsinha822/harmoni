import { useEffect, useState } from 'react';
import StarRating from '../../../../components/StarRating';
import './Products.css';
import { getAllProducts } from '../../../../services/api/products';
import { ProductType } from '../../../../types/product';

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        (async () => {
            const response = await getAllProducts();
            setProducts(response);
        })()
    }, [])

    return (
        <section className="products">
            <div className="products-container">
                <div className="products-header">
                    <div className="category-tag">Our Products</div>
                    <h2 className="products-title">Explore Our Products</h2>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-content">
                                <div className="product-details">
                                    <h3 className="product-name">{product.title}</h3>
                                    <div className="product-price-rating">
                                        <span className="product-price">${product.price}</span>
                                        <StarRating rating={product.rating.rate} count={product.rating.count} />
                                    </div>
                                </div>
                                <button className="add-to-cart">Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;