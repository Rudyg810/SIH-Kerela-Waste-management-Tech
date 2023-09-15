import styles from "./ExploreFurnitureContainer.module.css";

const ExploreFurnitureContainer = () => {
  return (
    <div className={styles.featuredArtworks}>
      <div className={styles.exploreInFurnitures}>Explore in furnitures</div>
      <div className={styles.button}>
        <button className={styles.viewAll}>View All</button>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.furniture1Parent}>
            <div className={styles.furniture1}>Furniture 1</div>
            <div className={styles.rampalStore}>Rampal store</div>
          </div>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-38@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-39@2x.png"
          />
          <div className={styles.furniture2Parent}>
            <div className={styles.furniture1}>Furniture 2</div>
            <div className={styles.surajKiDukan}>Suraj Ki dukan</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.furniture3Parent}>
            <div className={styles.furniture1}>Furniture 3</div>
            <div className={styles.sumitStore}>Sumit store</div>
          </div>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-40@2x.png"
          />
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.furniture4Parent}>
            <div className={styles.furniture1}>Furniture 4</div>
            <div className={styles.lalitaStore}>Lalita store</div>
          </div>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-41@2x.png"
          />
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.furniture5Parent}>
            <div className={styles.furniture1}>Furniture 5</div>
            <div className={styles.kundanStore}>Kundan store</div>
          </div>
          <img
            className={styles.groupChild1}
            alt=""
            src="/rectangle-42@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreFurnitureContainer;
