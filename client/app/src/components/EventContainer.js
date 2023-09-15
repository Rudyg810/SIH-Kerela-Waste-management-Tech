import { useMemo } from "react";
import styles from "./EventContainer.module.css";

const EventContainer = ({
  imageAltText,
  eventDate,
  locationName,
  propLeft,
  propLeft1,
  propLeft2,
  onInterestedClick,
}) => {
  const eventsStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const sep2023Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const nalandaBoysHostelStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div className={styles.events} style={eventsStyle}>
      <img className={styles.eventsChild} alt="" src={imageAltText} />
      <div className={styles.eventsItem} />
      <div className={styles.eventsInner} />
      <img
        className={styles.ictwotoneShareIcon}
        alt=""
        src="/ictwotoneshare.svg"
      />
      <button className={styles.interested} onClick={onInterestedClick}>
        Interested
      </button>
      <img
        className={styles.materialSymbolsstarOutlineIcon}
        alt=""
        src="/materialsymbolsstaroutline.svg"
      />
      <b className={styles.sep2023} style={sep2023Style}>
        {eventDate}
      </b>
      <b className={styles.nalandaBoysHostel} style={nalandaBoysHostelStyle}>
        {locationName}
      </b>
      <b className={styles.interested21}>211 INTERESTED - 21 GOING</b>
    </div>
  );
};

export default EventContainer;
