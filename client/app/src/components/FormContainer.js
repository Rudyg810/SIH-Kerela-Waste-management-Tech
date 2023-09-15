import { useMemo } from "react";
import styles from "./FormContainer.module.css";

const FormContainer = ({
  imageDimensions,
  imageDimensionsText,
  propLeft,
  propTop,
  propCursor,
  propBorder,
  propPadding,
  propBackgroundColor,
  onInterestedClick,
}) => {
  const events1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const interestedStyle = useMemo(() => {
    return {
      cursor: propCursor,
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [propCursor, propBorder, propPadding, propBackgroundColor]);

  return (
    <div className={styles.events} style={events1Style}>
      <img className={styles.eventsChild} alt="" src={imageDimensions} />
      <div className={styles.eventsItem} />
      <div className={styles.eventsInner} />
      <img
        className={styles.ictwotoneShareIcon}
        alt=""
        src="/ictwotoneshare11.svg"
      />
      <button
        className={styles.interested}
        onClick={onInterestedClick}
        style={interestedStyle}
      >
        Interested
      </button>
      <img
        className={styles.materialSymbolsstarOutlineIcon}
        alt=""
        src={imageDimensionsText}
      />
      <b className={styles.sep2023}>9 sep 2023</b>
      <b className={styles.davPublicSchool}>Dav public school</b>
      <b className={styles.interested21}>211 INTERESTED - 21 GOING</b>
    </div>
  );
};

export default FormContainer;
