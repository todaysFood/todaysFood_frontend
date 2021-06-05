import React, { useContext } from "react";
import style from "./CurrentPositionButton.module.css";
import { GeoContext } from "../../../App";
import postionImage from "../../../source/gps.png";

const CurrentPositionButton = () => {
  const geo = useContext(GeoContext);

  return (
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
            }}
            alt="위치이미지"
          />
        </button>
      </div>
    </div>
  );
};
export default CurrentPositionButton;
