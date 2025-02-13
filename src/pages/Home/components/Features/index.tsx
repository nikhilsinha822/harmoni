import './Features.css';
import { FiHeadphones } from "react-icons/fi";
import { FaTruckFast } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Features = () => {
    const features = [
        {
            icon: (
                <FaTruckFast />
            ),
            title: 'FREE AND FAST DELIVERY',
            description: 'Free delivery for all orders over $140'
        },
        {
            icon: (
                <FiHeadphones />
            ),
            title: '24/7 CUSTOMER SERVICE',
            description: 'Friendly 24/7 customer support'
        },
        {
            icon: (
                <AiOutlineSafetyCertificate />
            ),
            title: 'MONEY BACK GUARANTEE',
            description: 'We return money within 30 days'
        }
    ];

    return (
        <section className="features">
            <div className="features-container">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="feature-icon-cover">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;