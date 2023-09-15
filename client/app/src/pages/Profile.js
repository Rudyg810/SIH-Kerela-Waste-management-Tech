import ContainerWithButtons from "../components/ContainerWithButtons";
import TokenForm from "../components/TokenForm";
import ContainerEventsForm from "../components/ContainerEventsForm";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img className={styles.profileChild} alt="" src="/rectangle-12.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.profileItem} alt="" src="/rectangle-27@2x.png" />
      <ContainerWithButtons />
      <div className={styles.medalStatTile}>
        <TokenForm />
      </div>
      <div className={styles.lastEventsParticipated}>
        LAST EVENTS PARTICIPATED
      </div>
      <div className={styles.events}>
        <img
          className={styles.eventsChild}
          alt=""
          src="/rectangle-346241143@2x.png"
        />
        <div className={styles.eventsItem} />
        <div className={styles.participated}>Participated</div>
        <b className={styles.sep2023}>9 sep 2023</b>
        <b className={styles.davPublicSchool}>Dav public school</b>
        <b className={styles.interested21}>211 INTERESTED - 21 GOING</b>
      </div>
      <ContainerEventsForm imageDimensions="/rectangle-346241145@2x.png" />
      <ContainerEventsForm
        imageDimensions="/rectangle-346241147@2x.png"
        propLeft="830px"
      />
      <b className={styles.yourSustainableProfile}>
        Your Sustainable Profile: Showcasing Your Impactful Journey
      </b>
    </div>
  );
};

export default Profile;
