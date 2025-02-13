import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import StarRating from '../../../../components/StarRating';
import { RootState, AppDispatch } from "../../../../redux/store";
import { fetchProducts } from "../../../../redux/slices/productSlice";
import { openModal } from '../../../../redux/slices/modalSlice';
import './Products.css';

const Products = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    const { products, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div className='loading'></div>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="products" id="products">
            <div className="products-container">
                <div className="products-header">
                    <div className="category-tag">Our Products</div>
                    <h2 className="products-title">Explore Our Products</h2>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image" onClick={() => dispatch(openModal(product))}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-content">
                                <div className="product-details" onClick={() => dispatch(openModal(product))}>
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