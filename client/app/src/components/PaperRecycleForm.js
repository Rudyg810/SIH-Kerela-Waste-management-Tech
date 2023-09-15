import styles from "./PaperRecycleForm.module.css";

const PaperRecycleForm = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleWrapper}>
        <img className={styles.groupChild} alt="" src="/rectangle-431@2x.png" />
      </div>
      <div className={styles.groupItem} />
      <div className={styles.paperRecycle}>Paper recycle</div>
      <img className={styles.groupInner} alt="" src="/rectangle-451@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.plantBasedProducts}>Plant based products</div>
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-441@2x.png" />
        <div className={styles.groupItem} />
        <div className={styles.homemadeDiy}>Homemade DIY</div>
      </div>
    </div>
  );
};

export default PaperRecycleForm;
