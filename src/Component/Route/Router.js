import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import style from "./Router.module.css";
import Feed from "./Feed/feed";
import Map from "./Map/map";
import { GeoContext } from "../../App";
import postionImage from "../../source/gps.png";

function BodyRouter({ resetGeoLocation }) {
  const geo = useContext(GeoContext);
  const [openedNav, setOpenedNav] = useState(false);
  function openNav() {
    console.log(openedNav);
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
        <span className={`${classBurger}`} onClick={() => openNav()}></span>
        <span className={`${classClose}`} onClick={() => openNav()}></span>
      </div>
      <div className={`${style.get_location_container}`}>
        <div className={`${style.get_location}`}>
          <button
            className={`${style.set_location_button}`}
            onClick={() => geo.setGeoLocation()}
          >
            <img
              src={postionImage}
              style={{
                width: 20,
                height: 20,
                color: "#2d8dee",
                marginRight: 5,
              }}
              alt="위치이미지"
            />
          </button>
        </div>
      </div>
      <Switch>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/map">
          <Map />
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
