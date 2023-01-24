import css from '../Notification/Notification.module.css';

export const Notification = ({ title }) => {
  return <p className={css.title}>{title}</p>;
};
