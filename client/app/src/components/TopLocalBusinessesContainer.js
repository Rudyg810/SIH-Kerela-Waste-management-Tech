import styles from "./TopLocalBusinessesContainer.module.css";

const TopLocalBusinessesContainer = () => {
  return (
    <div className={styles.topLocalBusinessesParent}>
      <div className={styles.topLocalBusinesses}>Top Local Businesses</div>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-1@2x.png" />
        <div className={styles.rampalStore}>Rampal store</div>
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.groupChild} alt="" src="/ellipse-11@2x.png" />
        <div className={styles.surajKiDukan}>Suraj Ki dukan</div>
      </div>
      <div className={styles.ellipseContainer}>
        <img className={styles.groupChild} alt="" src="/ellipse-12@2x.png" />
        <div className={styles.sumitStore}>Sumit store</div>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.groupChild} alt="" src="/ellipse-13@2x.png" />
        <div className={styles.lalitaStore}>Lalita store</div>
      </div>
    </div>
  );
};

export default TopLocalBusinessesContainer;
