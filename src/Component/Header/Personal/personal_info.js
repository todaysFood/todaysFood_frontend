import React from "react";
import style from "./personal_info.module.css";

function PersonalInfo({ title, content }) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.title}`}>{title}</div>
      <div className={`${style.content}`}>{content}</div>
    </div>
  );
}
export default PersonalInfo;
