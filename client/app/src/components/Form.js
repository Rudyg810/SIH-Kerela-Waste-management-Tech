import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.nameParent}>
      <div className={styles.name}>
        <div className={styles.fullNameContainer}>
          <span>{`Full name `}</span>
          <span className={styles.span}>*</span>
        </div>
        <input className={styles.input} type="text"
        
        
        
        />
      </div>
      <div className={styles.name}>
        <div className={styles.fullNameContainer}>
          <span>{`Mobile Number `}</span>
          <span className={styles.span}>*</span>
        </div>
        <div className={styles.input1} />
      </div>
      <div className={styles.pass}>
        <div className={styles.fullNameContainer}>
          <span>{`Password `}</span>
          <span className={styles.span}>*</span>
        </div>
        <input className={styles.input2} type="text" />
      </div>
      <div className={styles.check}>
        <div className={styles.checkChild} />
        <div className={styles.iAgreeTo}>
          I agree to the terms and condition
        </div>
      </div>
      <div className={styles.signUpWrapper}>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Form;
