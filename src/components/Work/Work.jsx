import workStyles from "./Work.module.css";
import workImg1 from "../../assets/images/work-img-1.jpg";
import workImg2 from "../../assets/images/work-img-2.jpg";
import workImg3 from "../../assets/images/work-img-3.jpg";
import workImg4 from "../../assets/images/work-img-4.jpg";
import workImg5 from "../../assets/images/work-img-5.jpg";
import workImg6 from "../../assets/images/work-img-6.jpg";
const Work = () => {
  return (
    <>
      <div id={workStyles.work} className="container py-5 mt-lg-0 mt-3">
        <p className={workStyles.workTitle}>MY WORK</p>
        <h2 className={workStyles.workHeading}>RECENT WORK</h2>
        <ul
          className={`mb-3 nav ${workStyles.navTabs}`}
          id="ex1"
          role="tablist"
        >
          <li className={workStyles.navItem} role="presentation">
            <a
              className={`active ${workStyles.navLink}`}
              id="ex1-tab-1"
              data-bs-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >
              Graphic Design
            </a>
          </li>
          <li className={workStyles.navItem} role="presentation">
            <a
              className={workStyles.navLink}
              id="ex1-tab-2"
              data-bs-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              Apps
            </a>
          </li>
          <li className={workStyles.navItem} role="presentation">
            <a
              className={workStyles.navLink}
              id="ex1-tab-3"
              data-bs-toggle="tab"
              href="#ex1-tabs-3"
              role="tab"
              aria-controls="ex1-tabs-3"
              aria-selected="false"
            >
              Software
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <div className="row">
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg1} alt="work image" />
                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="#">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg2} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg3} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg4} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ex1-tabs-2"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            <div className="row">
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg5} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg6} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg1} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg2} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ex1-tabs-3"
            role="tabpanel"
            aria-labelledby="ex1-tab-3"
          >
            <div className="row">
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg1} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg2} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg4} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={workStyles.project}>
                  <img src={workImg6} alt="work image" />

                  <div className={`${workStyles.desc} pt-4`}>
                    <div className={workStyles.con}>
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className={workStyles.icon}>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="showMoreButton btn btn-primary">
          Show More
        </button>
      </div>
    </>
  );
};

export default Work;
