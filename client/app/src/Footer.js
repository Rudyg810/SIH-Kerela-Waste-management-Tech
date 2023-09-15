import ButtonSmallstandart from "../src/components/ButtonSmallstandart"
import styles from "../src/components/UpcyclingDiscoverFooter.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.copyright}>SIH 2023. EIGHT</div>
      <img className={styles.lineIcon} alt="" src="/line.svg" />
      <div className={styles.newsletter}>
        <div className={styles.description}>
          Discover the creative world of upcycling and how everyday items can
          find new life as unique treasures.
        </div>
        <div className={styles.title}>Subscribe to our newsletter</div>
        <div className={styles.inputButton}>
          <ButtonSmallstandart
            button="Subscribe"
            buttonSmallstandartWidth="120px"
            buttonSmallstandartPosition="absolute"
            buttonSmallstandartTop="0px"
            buttonSmallstandartLeft="280px"
            rectangleBorderRadius="8px"
            buttonLeft="20.63%"
          />
          <div className={styles.inputField}>
            <div className={styles.rectangle1} />
            <div className={styles.list}>Your email address…</div>
          </div>
        </div>
      </div>
      <div className={styles.column4}>
        <div className={styles.list1}>chatbot</div>
        <div className={styles.title1}>FAQ</div>
      </div>
      <div className={styles.column3}>
        <div className={styles.list2}>
          <p className={styles.about}>About</p>
          <p className={styles.about}>Blog</p>
          <p className={styles.about}>Join Us</p>
          <p className={styles.about}>Press</p>
          <p className={styles.about}>Partners</p>
        </div>
        <div className={styles.title2}>Company</div>
      </div>
      <div className={styles.column2}>
        <div className={styles.list3}>
          <p className={styles.about}>Documentation</p>
          <p className={styles.about}>Guide</p>
          <p className={styles.about}>Tutorial</p>
        </div>
        <div className={styles.title3}>Support</div>
      </div>
      <div className={styles.column1}>
        <div className={styles.list2}>
          <p className={styles.about}>7004*43214</p>
          <p className={styles.about}>eight@gmail.com</p>
        </div>
        <div className={styles.title4}>Contact</div>
      </div>
    </div>
  );
};

export default Footer;
