import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WebinarCardForm from "../components/WebinarCardForm";
import FormContainer from "../components/FormContainer";
import styles from "./Event1.module.css";

const Event1 = () => {
  const navigate = useNavigate();

  const onInterestedClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.event}>
      <b className={styles.discoverEvents}>Discover Events</b>
      <div className={styles.eventChild} />
      <div className={styles.eventItem} />
      <b className={styles.myLocation}>My Location</b>
      <b className={styles.anyDate}>Any Date</b>
      <img className={styles.mdidateRangeIcon} alt="" src="/mdidaterange.svg" />
      <img className={styles.mdilocationIcon} alt="" src="/mdilocation.svg" />
      <WebinarCardForm />
      <img
        className={styles.eventInner}
        alt=""
        src="/rectangle-34624113@2x.png"
      />
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <button className={styles.search}>Search</button>
        </div>
        <input className={styles.groupChild} type="text" />
      </div>
      <b className={styles.communityCleanupYour}>
        Community Cleanup: Your Hands, Our Future
      </b>
      <div className={styles.joinUsIn}>
        Join us in making our community cleaner and brighter. Your hands can
        change the future. Volunteer for a community cleanup today!
      </div>
      <FormContainer
        imageDimensions="/rectangle-346241143@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline11.svg"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241144@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline2.svg"
        propLeft="100px"
        propTop="1629px"
        propCursor="unset"
        propBorder="unset"
        propPadding="unset"
        propBackgroundColor="unset"
      />
      <FormContainer
        imageDimensions="/rectangle-346241145@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline11.svg"
        propLeft="764px"
        propTop="877px"
        propCursor="pointer"
        propBorder="none"
        propPadding="0"
        propBackgroundColor="transparent"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241146@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline2.svg"
        propLeft="764px"
        propTop="1629px"
        propCursor="unset"
        propBorder="unset"
        propPadding="unset"
        propBackgroundColor="unset"
      />
      <FormContainer
        imageDimensions="/rectangle-346241147@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline11.svg"
        propLeft="432px"
        propTop="877px"
        propCursor="pointer"
        propBorder="none"
        propPadding="0"
        propBackgroundColor="transparent"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241148@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline2.svg"
        propLeft="432px"
        propTop="1629px"
        propCursor="unset"
        propBorder="unset"
        propPadding="unset"
        propBackgroundColor="unset"
      />
      <FormContainer
        imageDimensions="/rectangle-346241149@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline11.svg"
        propLeft="1096px"
        propTop="877px"
        propCursor="pointer"
        propBorder="none"
        propPadding="0"
        propBackgroundColor="transparent"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-3462411410@2x.png"
        imageDimensionsText="/materialsymbolsstaroutline2.svg"
        propLeft="1096px"
        propTop="1629px"
        propCursor="unset"
        propBorder="unset"
        propPadding="unset"
        propBackgroundColor="unset"
      />
    </div>
  );
};

export default Event1;
