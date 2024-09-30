import homeStyles from "./Home.module.css";
import sliderImg1 from "../../assets/images/slider_img_bg_1.jpg";
import sliderImg2 from "../../assets/images/slider_img_bg_2.jpg";
const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className={`vh-100 d-flex flex-column justify-content-center carousel-item active  ${homeStyles.carouselItem}`}
            data-bs-interval="2000"
          >
            <div>
              <img
                className="sliderImage"
                src={sliderImg1}
                alt="slider image 1"
              />
              <div
                className={`container text-center text-md-start ${homeStyles.containerSlider}`}
              >
                <h1
                  className={`text-lg-start text-center ${homeStyles.sliderTitle}`}
                >
                  Hi! <br /> Im Jackson
                </h1>
                <p
                  className={`text-lg-start text-center ${homeStyles.sliderText}`}
                >
                  100% html5 bootstrap templates Made <br /> By
                  <a href="#" className={homeStyles.sliderTLink}>
                    Colorlib.com
                  </a>
                </p>
                <button
                  type="button"
                  className={`btn btn-transparent ${homeStyles.sliderBtn}`}
                >
                  DOWNLOAD CV <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`vh-100 d-flex flex-column justify-content-center carousel-item ${homeStyles.carouselItem}`}
            data-bs-interval="2000"
          >
            <div>
              <img
                className="sliderImage"
                src={sliderImg2}
                alt="slider image 2"
              />
              <div
                className={`container text-center text-md-start ${homeStyles.containerSlider}`}
              >
                <h1
                  className={`text-lg-start text-center ${homeStyles.sliderTitle}`}
                >
                  I am <br />a Designer
                </h1>
                <p
                  className={`text-lg-start text-center ${homeStyles.sliderText}`}
                >
                  100% html5 bootstrap templates Made <br /> By
                  <a href="#" className={homeStyles.sliderTLink}>
                    Colorlib.com
                  </a>
                </p>
                <button
                  type="button"
                  className={`btn btn-transparent ${homeStyles.sliderBtn}`}
                >
                  VIEW PORTFOLIO <i className="fa-solid fa-briefcase"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
