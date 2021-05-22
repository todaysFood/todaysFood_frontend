import React, { useContext } from "react";
import { GeoContext } from "../../App";
import style from "./header.module.css";
import NavUser from "../User/NavUser/NavUser";
function Header() {
  const geo = useContext(GeoContext);
  return (
    <header className={`${style.container}`}>
      <div className={`${style.logo}`}>
        오늘의 음식
        <NavUser />
      </div>
      <span className={`${style.title}`}>
        날씨가 좋네요. 오늘의 추천 음식은 <br></br>
        <span>
          {geo.todays &&
            geo.todays.map((today) => (
              <span className={`${style.title_detail}`}>{today + " "}</span>
            ))}
        </span>{" "}
        입니다.
      </span>
    </header>
  );
}

export default Header;
