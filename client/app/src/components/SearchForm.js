import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchChild} />
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <button className={styles.search1}>Search</button>
        </div>
        <input className={styles.groupChild} type="text" />
      </div>
    </div>
  );
};

export default SearchForm;
