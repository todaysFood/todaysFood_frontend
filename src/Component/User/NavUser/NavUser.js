import React, { useState } from "react";
import style from "./navUser.module.css";
function NavUser() {
  const [openSetting, setOpenSetting] = useState();
  function showPopup() {
    if (openSetting) {
      setOpenSetting(false);
    } else {
      setOpenSetting(true);
    }
  }

  return (
    <div className={`${style.profile_container}`} onClick={() => showPopup()}>
      {openSetting && (
        <ul aria-label="Menu" className={`${style.profile_popup}`}>
          <li>내 정보</li>
          <li>로그 아웃</li>
        </ul>
      )}
    </div>
  );
}

export default NavUser;
