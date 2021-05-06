// import styles from './reviews.module.css';

const Reviews = ({ reviews = [] }) => {
  return reviews.length ? (
    <ul className="">
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    'No reviews yet'
  );
};

export default Reviews;
