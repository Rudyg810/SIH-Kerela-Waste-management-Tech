import ContainerHeroForm from "../components/ContainerHeroForm";
import SearchForm from "../components/SearchForm";
import ExploreFurnitureContainer from "../components/ExploreFurnitureContainer";
import TopLocalBusinessesContainer from "../components/TopLocalBusinessesContainer";
import ContainerCategoriesPlasticRecy from "../components/ContainerCategoriesPlasticRecy";
import PaperRecycleForm from "../components/PaperRecycleForm";
import styles from "./Marketplace.module.css";

const Marketplace = () => {
  return (
    <div className={styles.marketplace}>
      <ContainerHeroForm />
      <SearchForm />
      <div className={styles.categories}>Categories</div>
      <div className={styles.button}>
        <button className={styles.viewAll}>View All</button>
      </div>
      <div className={styles.button1}>
        <button className={styles.viewAll1}>View All</button>
      </div>
      <ExploreFurnitureContainer />
      <TopLocalBusinessesContainer />
      <ContainerCategoriesPlasticRecy />
      <PaperRecycleForm />
    </div>
  );
};

export default Marketplace;
