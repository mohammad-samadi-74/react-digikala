import React, { useContext } from "react";

import {
  ArrowBackIos,
  ExitToApp,
  Person,
  Shop,
  PersonOutline,
} from "@material-ui/icons";

import { mdiGift } from "@mdi/js";
import { Dropdown } from "react-bootstrap";
import { Icon } from "@mdi/react";
import { Link } from "react-router-dom";

// add context
import AppContext from "../../context/AppContext";

function ProfileModal() {
  let { state, dispatch } = useContext(AppContext);

  return (
    <Dropdown className="profileDropDown">
      <Dropdown.Toggle
        className="loginButton btn-light"
        id="profile-dropdown-button"
      >
        <PersonOutline className="loginBtnIcon" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="rtl p-0">
        <Dropdown.Item
          className="profileDropDown-first"
          as={Link}
          to="/profile"
        >
          <div className="d-flex profile-container">
            <div className="profile-icon-container">
              <Person className="icon" />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <p className="profile-name">mohammad samadi</p>
              <div className="show-profile">
                مشاهده حساب کاربری
                <ArrowBackIos />
              </div>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider className="my-0" />
        <Dropdown.Item className="profileDropDown-item" as={Link} to="/profile">
          <div className="d-flex">
            <Shop />
            <span> سفارش های من</span>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider className="my-0" />
        <Dropdown.Item className="profileDropDown-item">
          <div className="d-flex">
            <Icon path={mdiGift} />
            <span>جوایز دیجی کلاب</span>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider className="my-0" />
        <Dropdown.Item className="profileDropDown-item">
          <div
            className="d-flex"
            onClick={() => {
              dispatch({ type: "logoutUser" });
            }}
          >
            <ExitToApp />
            <span>خروج</span>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileModal;
