import styles from "./styles.module.scss";

export const Button = ({ ...props }) => {
  return <button className={styles.button} {...props} />;
};
