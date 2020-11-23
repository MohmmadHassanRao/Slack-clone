import { Create, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Navttc</h2>
          <h3>
            <FiberManualRecord /> Hassan Rao
          </h3>
        </div>
        <Create />
      </div>
    </div>
  );
};

export default Sidebar;
