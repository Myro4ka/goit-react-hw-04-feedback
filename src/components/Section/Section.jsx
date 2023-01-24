import css from '../App/App.module.css';

export const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </section>
  );
};
