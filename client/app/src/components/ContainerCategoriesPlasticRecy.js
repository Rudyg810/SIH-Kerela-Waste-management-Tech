import styles from "./ContainerCategoriesPlasticRecy.module.css";

const ContainerCategoriesPlasticRecy = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-43@2x.png" />
        <img className={styles.groupItem} alt="" src="/rectangle-46@2x.png" />
        <div className={styles.plasticRecycled}>Plastic recycled</div>
      </div>
      <img className={styles.groupInner} alt="" src="/rectangle-45@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.handmadeDiy}>Handmade DIY</div>
      <div className={styles.rectangleGroup}>
        <img className={styles.groupChild} alt="" src="/rectangle-44@2x.png" />
        <div className={styles.groupChild1} />
        <div className={styles.domesticWaste}>Domestic waste</div>
      </div>
    </div>
  );
};

export default ContainerCategoriesPlasticRecy;
