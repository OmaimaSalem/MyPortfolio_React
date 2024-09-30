import experienceStyles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <div id={experienceStyles.experience} className="container py-5">
        <p className={experienceStyles.experienceTitle}>EXPERIENCE</p>
        <h2 className={experienceStyles.experienceHeading}>WORK EXPERIENCE</h2>
        <ul className={experienceStyles.timeline}>
          <li>
            <div className={experienceStyles.timelineBadge}>
              <i className="fa-solid fa-pencil"></i>
            </div>
            <div className={experienceStyles.timelinePanel}>
              <h2>
                <a href="#">Full Stack Developer</a> <span>2017-2018</span>
              </h2>
              <p>
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.
              </p>
            </div>
          </li>
          <li>
            <div className={`${experienceStyles.timelineBadge} ${experienceStyles.danger}`}>
              <i className="fa-solid fa-pencil"></i>
            </div>
            <div className={experienceStyles.timelinePanel}>
              <h2>
                <a href="#">Front End Developer at Google Company</a>
                <span>2017-2018</span>
              </h2>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </li>
          <li>
            <div className={`${experienceStyles.timelineBadge} ${experienceStyles.warning}`} >
              <i className="fa-solid fa-pencil"></i>
            </div>
            <div className={experienceStyles.timelinePanel}>
              <h2>
                <a href="#">System Analyst </a> <span>2017-2018</span>
              </h2>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </li>
          <li>
            <div className={experienceStyles.timelineBadgeEnd}></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
