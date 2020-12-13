import styles from "./styles.module.scss";
import { AuthForm } from "../../components";

export const Auth = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__container}>
        <AuthForm />
      </div>
      <div className={styles.auth__note}>Login: test@test.com; Passowrd: 1;</div>
    </div>
  );
};
