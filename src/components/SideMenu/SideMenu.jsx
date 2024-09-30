import { NavLink } from "react-router-dom";
// import "./SideMenu.css";
import sideMenuStyles from "./SideMenu.module.css";
import userImage from "../../assets/images/user.jpeg";
const SideMenu = () => {
  return (
    <div className="p-0 col-md-2">
      <div className={`${sideMenuStyles.sidebar} px-4 py-5`}>
        <nav className="navbar navbar-expand-lg  ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBackdrop"
            aria-controls="offcanvasWithBackdrop"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
            aria-labelledby="offcanvasWithBackdropLabel"
          >
            <button
              type="button"
              className={`text-reset ${sideMenuStyles.btnClose}`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

            <div className={sideMenuStyles.sidebarImage}>
              <img src={userImage} alt="user image" />
            </div>
            <h2 className={sideMenuStyles.sidebarUsername}>
              <NavLink to="#">Omaima Salem</NavLink>
            </h2>
            <p className={sideMenuStyles.sidebarUserinfo}>
              <NavLink to="#">Front End Devloper</NavLink> in UpSkilling
            </p>
            <ul className={sideMenuStyles.sidebarList}>
              <li
                className={sideMenuStyles.navItem}
                data-bs-dismiss="offcanvas"
              >
                <NavLink className={sideMenuStyles.navLink} to="/">
                  Home
                </NavLink>
              </li>
              <li
                className={sideMenuStyles.navItem}
                data-bs-dismiss="offcanvas"
              >
                <NavLink className={sideMenuStyles.navLink} to="about">
                  About
                </NavLink>
              </li>
              <li
                className={sideMenuStyles.navItem}
                data-bs-dismiss="offcanvas"
              >
                <NavLink className={sideMenuStyles.navLink} to="skills">
                  Skills
                </NavLink>
              </li>
              <li
                className={sideMenuStyles.navItem}
                data-bs-dismiss="offcanvas"
              >
                <NavLink className={sideMenuStyles.navLink} to="experience">
                  Experience
                </NavLink>
              </li>
              <li
                className={sideMenuStyles.navItem}
                data-bs-dismiss="offcanvas"
              >
                <NavLink className={sideMenuStyles.navLink} to="work">
                  Work
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
