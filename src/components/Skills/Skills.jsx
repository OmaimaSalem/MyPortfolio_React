import skillsStyles from "./Skills.module.css";
const Skills = () => {
  return (
    <>
      <div
        id={skillsStyles.skills}
        className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100"
      >
        <p className={skillsStyles.skillsTitle}>MY SPECIALTY</p>
        <h2 className={skillsStyles.skillsHeading}>MY SKILLS</h2>
        <p className={skillsStyles.skillsText}>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3 className={`mb-2 ${skillsStyles.progressTitle}`}>Photoshop</h3>
            <div
              className={`${skillsStyles.proColor1} ${skillsStyles.progress}`}
            >
              <div
                role="progressbar"
                className={`${skillsStyles.progressBar} ${skillsStyles.photoshopBar}`}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3 className={`mb-2 ${skillsStyles.progressTitle}`}>HTML5</h3>
            <div
              className={`${skillsStyles.proColor2} ${skillsStyles.progress}`}
            >
              <div
                role="progressbar"
                className={`${skillsStyles.progressBar} bg-warning ${skillsStyles.htmlBar}`}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3 className={`mb-2 ${skillsStyles.progressTitle}`}>WordPress</h3>
            <div
              className={`${skillsStyles.proColor3} ${skillsStyles.progress}`}
            >
              <div
                role="progressbar"
                className={`${skillsStyles.progressBar} bg-success ${skillsStyles.wordpressBar}`}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className={`mb-2 ${skillsStyles.progressTitle}`}>jQuery</h3>
            <div
              className={`${skillsStyles.proColor4} ${skillsStyles.progress}`}
            >
              <div
                role="progressbar"
                className={`${skillsStyles.progressBar} bg-danger ${skillsStyles.jQueryBar}`}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3 className={`mb-2 ${skillsStyles.progressTitle}`}>CSS3</h3>
            <div
              className={`${skillsStyles.proColor5} ${skillsStyles.progress}`}
            >
              <div
                role="progressbar"
                className={`${skillsStyles.progressBar} bg-black ${skillsStyles.cssBar}`}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3 className={`mb-2 ${skillsStyles.progressTitle}`}>SEO</h3>
            <div
              className={`${skillsStyles.proColor6} ${skillsStyles.progress}`}
            >
              <div
                role="progressbar"
                className={`${skillsStyles.progressBar} bg-info ${skillsStyles.seoBar}`}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
