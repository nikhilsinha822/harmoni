import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2 className="banner-title">Discover Your Next Favorite Item</h2>
        <p className="banner-description">
          Browse our exclusive collection and find the perfect product tailored just for you.
        </p>
        <div className="banner-buttons">
          <a href="/shop" className="button button-primary">Shop</a>
          <a href="/learn-more" className="button button-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;