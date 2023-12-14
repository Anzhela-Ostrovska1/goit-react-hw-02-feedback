import css from './Feedback.module.css';

const Notification = ({ message }) => {
  return <p className={css.container}>{message}</p>;
};
export default Notification;
