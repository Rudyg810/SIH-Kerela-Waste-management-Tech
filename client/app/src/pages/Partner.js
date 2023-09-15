import styles from "./Partner.module.css";

const Partner = () => {
  return (
    <div className={styles.partner}>
      <div className={styles.partnerChild} />
      <div className={styles.discoverTheCreativeContainer}>
        <p
          className={styles.discoverTheCreative}
        >{`Discover the creative world of upcycling and how `}</p>
        <p className={styles.discoverTheCreative}>
          everyday items can find new life as unique treasures.
        </p>
        <p
          className={styles.discoverTheCreative}
        >{`In this blog post, we delve into the art of recycling `}</p>
        <p className={styles.discoverTheCreative}>
          and its potential for transforming discarded materials
        </p>
        <p
          className={styles.discoverTheCreative}
        >{`into valuable, functional, and beautiful creations. `}</p>
        <p className={styles.discoverTheCreative}>
          Explore inspiring examples of upcycled projects,
        </p>
        <p
          className={styles.discoverTheCreative}
        >{`from repurposed furniture to stylish fashion made `}</p>
        <p className={styles.discoverTheCreative}>from reclaimed materials.</p>
      </div>
      <div className={styles.partner1}>PARTNER</div>
    </div>
  );
};

export default Partner;
