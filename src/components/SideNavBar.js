import React, { useEffect } from "react";
import Button from "materialize-css";
import SideNavItem from "materialize-css";
import SideNav from "materialize-css";

const user = require("../assets/SR.jpg");

export default function SideNavBar() {
  const nav_container = {
    width: "20%",
    height: "700px",
    background: "#042098",
    borderTopRightRadius: "90px",
  };

  return (
    <div style={nav_container} className="nav_container">
      <ul>
        <li>
          <div className="user-view">
            <div className="background">
              <i
                style={{ marginTop: "20px", marginLeft: "10px", color: "#fff" }}
                className="small material-icons"
              >
                notifications
              </i>
            </div>

            <a style={{ color: "#fff" }} href="#user">
              <img
                style={{
                  width: "40%",
                  height: "120px",
                  marginTop: "60px",
                  marginLeft: "65px",
                  borderTopRightRadius: "60px",
                  borderBottomRightRadius: "60px",
                  borderBottomLeftRadius: "60px",
                  zIndex: "1",
                }}
                src={user}
              />
            </a>
            <br />
            <a href="#name">
              <span
                style={{
                  fontSize: "20px",
                  fontFamily: "fontFamily: 'Roboto', sans-serif",
                  fontWeight: "40px",
                  marginLeft: "83px",
                  marginBottom: "30px",
                }}
                className="white-text name"
              >
                Sib Raza
              </span>
            </a>
          </div>
        </li>
      </ul>
      <br />
      <div
        className="links"
        style={{
          height: "60%",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "70px",
          backgroundColor: "#4C56CF",
          color: "#fff",
        }}
      >
        <ul>
          <li style={{ marginTop: "40px", paddingTop: "10px" }}>
            <a href="#!">
              <i
                style={{
                  marginBottom: "10px",
                  marginRight: "12px",
                  marginLeft: "70px",
                  color: "#fff",
                }}
                className="left material-icons"
              >
                equalizer
              </i>{" "}
              Overview
            </a>
          </li>
          <li style={{ marginTop: "20px" }}>
            <a href="#!">
              <i
                style={{
                  marginBottom: "10px",
                  marginRight: "12px",
                  marginLeft: "70px",
                  color: "#fff",
                }}
                className="left material-icons"
              >
                data_usage
              </i>{" "}
              Insights
            </a>
          </li>
          <li style={{ marginTop: "20px" }}>
            <a href="#!">
              <i
                style={{
                  marginBottom: "10px",
                  marginRight: "12px",
                  marginLeft: "70px",
                  color: "#fff",
                }}
                className="left material-icons"
              >
                monetization_on
              </i>{" "}
              Transactions
            </a>
          </li>
          <li style={{ marginTop: "20px" }}>
            <a href="#!">
              <i
                style={{
                  marginBottom: "10px",
                  marginRight: "12px",
                  marginLeft: "70px",
                  color: "#fff",
                }}
                className="left material-icons"
              >
                room_service
              </i>{" "}
              Services
            </a>
          </li>
          <br />
          <li>
            <div
              style={{ width: "30%", marginLeft: "70px" }}
              className="divider"
            ></div>
          </li>
          <br />
          <li style={{ marginTop: "10px" }}>
            <a href="#!">
              <i
                style={{
                  marginBottom: "10px",
                  marginRight: "12px",
                  marginLeft: "70px",
                  color: "#fff",
                }}
                className="left material-icons"
              >
                supervisor_account
              </i>
              Accounts
            </a>
          </li>
          <li style={{ marginTop: "30px" }}>
            <a href="#!">
              <i
                style={{
                  marginBottom: "10px",
                  marginRight: "12px",
                  marginLeft: "70px",
                  color: "#fff",
                }}
                className="left material-icons"
              >
                settings
              </i>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
