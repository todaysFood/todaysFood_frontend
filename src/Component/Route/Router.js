import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import style from "./Router.module.css";
import Feed from "./Feed/Feed";
import Map from "./Map/Map";
import Profile from "./Profile/Profile";
import { UserContext } from "../../App";

function BodyRouter() {
  const user = useContext(UserContext);

  const [openedNav, setOpenedNav] = useState(false);
  function openNav() {
    if (openedNav) {
      setOpenedNav(false);
    } else {
      setOpenedNav(true);
    }
  }

  let classRouter = `${style.router}`;
  let classBurger = `gnb-open-btn-burger ${style.icon_hamburger}`;
  let classClose = `gnb-open-btn-close ${style.icon_x}`;
  if (openedNav) {
    classRouter += " is-open";

    classClose += " is-open";
  } else {
    classBurger += " is-open";
  }

  return (
    <Router className={`${style.router_container}`}>
      <div id="router" className={`${classRouter}`}>
        <NavLink
          to="/map"
          className={`${style.link}`}
          activeClassName={`${style.active_link}`}
        >
          지도
        </NavLink>
        <NavLink
          to="/feed"
          className={`${style.link}`}
          activeClassName={`${style.active_link}`}
        >
          피드
        </NavLink>
        <NavLink
          to="/user"
          className={`${style.link}`}
          activeClassName={`${style.active_link}`}
          onClick={!user.isLoggedIn ? user.openModal : null}
        >
          내 정보
        </NavLink>
        <span className={`${classBurger}`} onClick={() => openNav()}></span>
        <span className={`${classClose}`} onClick={() => openNav()}></span>
      </div>

      <Switch>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/user">
          <Profile />
        </Route>

        <Route exact path="/">
          <Map />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
export default BodyRouter;
