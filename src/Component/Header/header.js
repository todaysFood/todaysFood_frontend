import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { GeoContext } from "../../App";
import style from "./header.module.css";
import NavUser from "../User/NavUser/NavUser";
import Login from "../User/Login/Login";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow: "0 4px 6px 0 rgb(20 20 20 / 40%)",
  },
};
function Header() {
  const geo = useContext(GeoContext);
  // 임시 변수 : 로그인 확인
  let tempisLoggedin = false;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <header className={`${style.container}`}>
        <div className={`${style.logo}`}>
          오늘의 음식
          {tempisLoggedin ? <NavUser /> : <div onClick={openModal}>로그인</div>}
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
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Login closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default Header;
