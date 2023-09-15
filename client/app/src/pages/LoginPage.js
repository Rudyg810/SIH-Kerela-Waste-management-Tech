import Form from "../components/Form";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <img className={styles.loginPageChild} alt="" src="/rectangle-121.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.createYourAccountParent}>
            <div className={styles.createYourAccount}>Create your account.</div>
            <div className={styles.alreadyHaveAnContainer}>
              <span>{`Already have an account? `}</span>
              <span className={styles.signIn}>Sign In</span>
            </div>
          </div>
        </div>
        <Form />
      </div>
      <img className={styles.rubbish1Icon} alt="" src="/rubbish-1@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
    </div>
  );
};

export default LoginPage;
