import './StarRating.css'

type StarRatingProps = {
    rating: number;
    count: number;
}

const StarRating = ({ rating, count }: StarRatingProps) => {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : 'empty'}`}
                >
                    ★
                </span>
            ))}
            <span className="rating-count">({count})</span>
        </div>
    );
};

export default StarRating