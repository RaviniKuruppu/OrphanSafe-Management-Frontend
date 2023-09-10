import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

const ExternalSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    const main_section = document.getElementById("main-section");
    if (isSidebarOpen) {
      main_section.style.left = "30px";
    } else {
      main_section.style.left = "250px";
    }
  };
  const closeSidebar = () => {
    setSidebarOpen(true);
  };

  return (
    <section
      className={`sidebar-section ${isSidebarOpen ? "open" : "closed"} `}
    >
      <div className={`my-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header-block">
          <div className="d-flex align-items-center">
            <ion-icon
              name="menu"
              style={{ fontSize: "20px" }}
              onClick={toggleSidebar}
            ></ion-icon>
            <div className="d-flex flex-column pl-2">
              <div style={{ fontWeight: 900, fontSize: "15px" }}>
                OrphanSafe
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#3273a5",
                  fontWeight: "600",
                }}
              >
                Tell us what you think
              </div>
            </div>
          </div>

          <ion-icon
            name="close"
            style={{ fontSize: "20px", padding: "10px" }}
            onClick={toggleSidebar}
          ></ion-icon>
        </div>
        <div className={`sidebar-menu-block `}>
          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Dashboard</div>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/dashboard">
                <a className="sidebar-submenu-item" onClick={closeSidebar}>View Dashboard</a>
              </LinkContainer>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Cases</div>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/monitoring/viewStaff">
                <a className="sidebar-submenu-item" onClick={closeSidebar}>Ongoing Cases</a>
              </LinkContainer>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/external/CaseRequest">
                <a className="sidebar-submenu-item" onClick={closeSidebar}>New case requests</a>
              </LinkContainer>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/external/EditDeleteCaseLog">
                <a className="sidebar-submenu-item" onClick={closeSidebar}>View case logs</a>
              </LinkContainer>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/external/CreateCaseLog">
                <a className="sidebar-submenu-item" onClick={closeSidebar}>Create case log</a>
              </LinkContainer>
            </div>
          </div>
          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Communication</div>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/monitoring/viewStaff">
                <a className="sidebar-submenu-item" onClick={closeSidebar}>Staff chats</a>
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExternalSidebar;