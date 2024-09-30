import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const MasterLayout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          <div className="p-0 col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
