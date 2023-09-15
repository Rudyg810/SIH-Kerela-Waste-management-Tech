import styles from "./TokenForm.module.css";
import { AuthProvider, useAuth} from "../context/auth";
const TokenForm = () => {
  const [auth] = useAuth()
  return (
    <div className={styles.property1default}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.div}>{auth?.user?.tokenn}</div>
        <div className={styles.token}>Token</div>
        <img className={styles.medalsIcon} alt="" src="/medals.svg" />
      </div>
      <img
        className={styles.property1defaultChild}
        alt=""
        src="/group-481711.svg"
      />
    </div>
  );
};

export default TokenForm;
