import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { GeoContext } from "../../App";
import style from "./header.module.css";
import NavUser from "../User/NavUser/NavUser";
import Login from "../User/Login/Login";
import SignIn from "../User/SignIn/SignIn";
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState("로그인");
  function setModalSignIn() {
    setModalState("회원가입");
  }
  function setModalLogIn() {
    setModalState("로그인");
  }
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
          {tempisLoggedin ? (
            <NavUser />
          ) : (
            <div
              aria-label="button"
              onClick={openModal}
              className={`${style.login_button}`}
            >
              로그인
            </div>
          )}
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
        {modalState === "로그인" ? (
          <Login closeModal={closeModal} setModalSignIn={setModalSignIn} />
        ) : (
          <SignIn closeModal={closeModal} setModalLogIn={setModalLogIn} />
        )}
      </Modal>
    </>
  );
}

export default Header;
