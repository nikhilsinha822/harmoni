import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <a href="/store" className="store-link">My Store</a>
        </h1>
        <h2 className="hero-subtitle">
          Your Shopping<br />
          Destination
        </h2>
        <p className="hero-description">
          Discover a wide range of products tailored just for you. Shop with ease
          and find exactly what you need.
        </p>
      </div>
    </section>
  );
};

export default Hero;