import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson, IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setSelectedCategory } from "../../redux/slices/categorySlice";
import { fetchProductsByCategory } from "../../redux/slices/productSlice";
import { RootState, AppDispatch } from "../../redux/store";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading } = useSelector((state: RootState) => state.categories);
  const cartItemCount = useSelector((state: RootState) => 
    state.cart?.totalQuantity || 0
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelect = (category: string) => {
    dispatch(setSelectedCategory(category));
    dispatch(fetchProductsByCategory(category));
    setSearchQuery("");

    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="/">Harmoni</a>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="/" className="nav-link">Home Page</a>
        <a href="/categories" className="nav-link">Categories</a>
        <a href="/contact" className="nav-link">Contact Us</a>
        <a href="/more" className="nav-link">More Options</a>
      </div>

      <div className="nav-right">
        <div className={`search-box desktop-search ${isFocused ? 'focused' : ''}`}>
          <div className="search-input-wrapper">
            <CiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {searchQuery && (
            <ul className="search-dropdown">
              {loading ? (
                <li className="loading-item">
                  <div className="loading-spinner"></div>
                  <span>Searching...</span>
                </li>
              ) : (
                categories
                  .filter((category) => category.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((category) => (
                    <li key={category} onClick={() => handleCategorySelect(category)} className="dropdown-item">
                      <CiSearch className="item-icon" />
                      <span>{category}</span>
                    </li>
                  ))
              )}
            </ul>
          )}
        </div>

        <div className="nav-icons">
          <a href="/cart" className="cart-icon-wrapper">
            <FaCartShopping className="cart-icon" />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </a>
          <a href="/profile" className="profile-icon"><IoPerson /></a>
          <button className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <IoCloseOutline /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-search ${isOpen ? 'active' : ''}`}>
        <div className={`mobile-search-container ${isFocused ? 'focused' : ''}`}>
          <CiSearch className="mobile-search-icon" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {searchQuery && (
          <ul className="search-dropdown mobile">
            {loading ? (
              <li className="loading-item">
                <div className="loading-spinner"></div>
                <span>Searching...</span>
              </li>
            ) : (
              categories
                .filter((category) => category.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((category) => (
                  <li key={category} onClick={() => handleCategorySelect(category)} className="dropdown-item">
                    <CiSearch className="item-icon" />
                    <span>{category}</span>
                  </li>
                ))
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;