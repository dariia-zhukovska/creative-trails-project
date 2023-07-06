import clsx from "clsx";
import styles from "./WhyTravel.module.css";

interface IProps {
  isLight: boolean;
}

function WhyTravel({ isLight }: IProps) {
  return (
    <div
      className={clsx(styles.lightContainer, {
        [styles.darkContainer]: !isLight,
      })}
    >
      <div className={styles.content}>
        <h2>Why do we travel?</h2>
        <ul>
          <li>
            <strong>Exploration and Discovery:</strong> Many people travel to
            explore new places, cultures, and environments.
          </li>
          <li>
            <strong>Adventure and Thrill:</strong> Traveling can be an
            opportunity for adventure and excitement.
          </li>
          <li>
            <strong>Relaxation and Escape:</strong> Traveling offers a chance to
            escape from daily routines, responsibilities, and stress.
          </li>
          <li>
            <strong>Cultural Immersion:</strong> Travel allows individuals to
            immerse themselves in different cultures, traditions, languages, and
            cuisines.
          </li>
          <li>
            <strong>Personal Growth and Learning:</strong> Traveling can be a
            transformative experience that promotes personal growth,
            self-discovery, and self-confidence.
          </li>
          <li>
            <strong>Building Relationships:</strong> Traveling provides
            opportunities to meet new people, make friends, and build
            connections from different backgrounds and cultures.
          </li>
          <li>
            <strong>Broadening Horizons:</strong> By traveling, people expand
            their knowledge and understanding of the world.
          </li>
          <li>
            <strong>Food and Culinary Experiences:</strong> Culinary tourism is
            a significant motivation for many travelers.
          </li>
          <li>
            <strong>Celebrating and Special Occasions:</strong> People often
            travel to celebrate special occasions such as birthdays,
            anniversaries, honeymoons, or festivals.
          </li>
          <li>
            <strong>Education and Research:</strong> Traveling can be a means of
            acquiring knowledge and conducting research.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhyTravel;
