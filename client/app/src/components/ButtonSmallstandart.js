import { useMemo } from "react";
import styles from "./ButtonSmallstandart.module.css";

const ButtonSmallstandart = ({
  button,
  buttonSmallstandartWidth,
  buttonSmallstandartPosition,
  buttonSmallstandartTop,
  buttonSmallstandartLeft,
  rectangleBorderRadius,
  buttonLeft,
}) => {
  const buttonSmallstandartStyle = useMemo(() => {
    return {
      width: buttonSmallstandartWidth,
      position: buttonSmallstandartPosition,
      top: buttonSmallstandartTop,
      left: buttonSmallstandartLeft,
    };
  }, [
    buttonSmallstandartWidth,
    buttonSmallstandartPosition,
    buttonSmallstandartTop,
    buttonSmallstandartLeft,
  ]);

  const rectangleStyle = useMemo(() => {
    return {
      borderRadius: rectangleBorderRadius,
    };
  }, [rectangleBorderRadius]);

  const buttonStyle = useMemo(() => {
    return {
      left: buttonLeft,
    };
  }, [buttonLeft]);

  return (
    <div
      className={styles.buttonsmallstandart}
      style={buttonSmallstandartStyle}
    >
      <div className={styles.placeholder}>
        <div className={styles.rectangle} style={rectangleStyle} />
      </div>
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default ButtonSmallstandart;
