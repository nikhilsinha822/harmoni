import { useState } from "react";
import './ProductModal.css'
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";
import { RootState, AppDispatch } from "../../redux/store";
import StarRating from "../StarRating";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isOpen, selectedProduct } = useSelector((state: RootState) => state.modal)

    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (!selectedProduct) return;
        dispatch(addToCart({ product: selectedProduct, quantity }))
        setQuantity(1);
    }

    if (!isOpen) return null;

    return (
        <div className="dialog-overlay" onClick={() => dispatch(closeModal())}>
            <div className="dialog-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={() => dispatch(closeModal())}>×</button>
                <div className="product-modal-card">
                    <div className="product-modal-image-container">
                        <img
                            src={selectedProduct?.image}
                            alt="Black backpack"
                            className="product-modal-image"
                        />
                    </div>
                    <div className="product-modal-details">
                        <h2 className="product-modal-title">{selectedProduct?.title}</h2>
                        <div className="rating">
                            <StarRating rating={selectedProduct?.rating.rate || 0} count={selectedProduct?.rating.count || 0} />
                        </div>
                        <div className="price">${selectedProduct?.price}</div>
                        <p className="description">
                            {selectedProduct?.description}
                        </p>
                        <div className="purchase-controls">
                            <div className="quantity-controls">
                                <button onClick={handleDecrement} className="quantity-btn">−</button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="quantity-input"
                                />
                                <button onClick={handleIncrement} className="quantity-btn increment">+</button>
                            </div>
                            <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal