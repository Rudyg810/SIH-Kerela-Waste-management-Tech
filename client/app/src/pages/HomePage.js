import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BusinessCollaborationForm from "../components/BusinessCollaborationForm";
import EventContainer from "../components/EventContainer";
import Container from "../components/Container";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onInterestedClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        <div className={styles.joinTheWaste}>
          Join the Waste Warriors: Clean, Compete, Contribute!
        </div>
        <div className={styles.competeWithNeighbors}>
          Compete with neighbors, earn points, and make a real impact on your
          community's cleanliness and sustainability.
        </div>
        <img className={styles.icon} alt="" src="/undefined.png" />
      </div>
      <img
        className={styles.removebgPreview1Icon}
        alt=""
        src="/undefined1.png"
      />
      <div className={styles.viewDetails}>View Details</div>
      <BusinessCollaborationForm />
      <div className={styles.homePageChild} />
      <img className={styles.homePageItem} alt="" src="/rectangle-8@2x.png" />
      <EventContainer
        imageAltText="/rectangle-34624114@2x.png"
        eventDate="12 sep 2023"
        locationName="Nalanda boys hostel"
        onInterestedClick={onInterestedClick}
      />
      <EventContainer
        imageAltText="/rectangle-346241141@2x.png"
        eventDate="9 sep 2023"
        locationName="Dav public school"
        propLeft="263px"
        propLeft1="74.89px"
        propLeft2="27.68px"
        onInterestedClick={onInterestedClick}
      />
      <EventContainer
        imageAltText="/rectangle-346241142@2x.png"
        eventDate="8 sep 2023"
        locationName="near Niet college"
        propLeft="927px"
        propLeft1="calc(50% - 47.5px)"
        propLeft2="calc(50% - 91.5px)"
        onInterestedClick={onInterestedClick}
      />
      <div className={styles.discoverOurTopRated}>
        Discover our top-rated events, showcasing the best in waste management
        and sustainability. Join the movement!
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.diveIntoThe}>
          Dive into the basics of astronomy. Learn about stars, planets,
          galaxies, and the tools astronomers use to explore the universe.
        </div>
        <div className={styles.div}>01.</div>
        <div className={styles.onlineFreeCourses}>
          Online free courses and tutorials
        </div>
        <div className={styles.delveIntoThe}>
          Delve into the cutting-edge technology powering space exploration,
          from spacecraft and telescopes to propulsion systems and space
          habitats.
        </div>
        <div className={styles.div1}>02.</div>
        <div className={styles.resourcesForTeachers}>
          Resources for teachers and educators
        </div>
        <div className={styles.diveIntoThe1}>
          Dive into the basics of astronomy. Learn about stars, planets,
          galaxies, and the tools astronomers use to explore the universe.
        </div>
        <div className={styles.div2}>03.</div>
        <div className={styles.bookRecommendationsAnd}>
          Book recommendations and reviews
        </div>
      </div>
      <Container />
    </div>
  );
};

export default HomePage;
