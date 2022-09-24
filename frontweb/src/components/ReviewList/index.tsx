import { Review } from '../../types/review';
import StarImage from '../../assets/images/star.png';

type Props = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: Props): JSX.Element => {
  return (
    <div className="bg-secondary container-post">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="individual-container-post">
            <img src={StarImage} alt="estrela" />
            <h1>{review.user.name}</h1>
            <p>{review.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
