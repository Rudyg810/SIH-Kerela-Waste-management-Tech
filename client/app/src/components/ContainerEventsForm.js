import { useMemo } from "react";
import styles from "./ContainerEventsForm.module.css";

const ContainerEventsForm = ({ imageDimensions, propLeft }) => {
  const events2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.events} style={events2Style}>
      <img className={styles.eventsChild} alt="" src={imageDimensions} />
      <b className={styles.sep2023}>9 sep 2023</b>
      <b className={styles.davPublicSchool}>Dav public school</b>
      <b className={styles.interested21}>211 INTERESTED - 21 GOING</b>
      <div className={styles.eventsItem} />
      <div className={styles.participated}>Participated</div>
    </div>
  );
};

export default ContainerEventsForm;
