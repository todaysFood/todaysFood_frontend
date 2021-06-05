import React, { useState } from "react";
import Header from "./Component/Header/header";
import BodyRouter from "./Component/Route/Router";
import getGeoLoca from "./util/getGeoLocation";
import getStores from "./util/getStores";
import getToday from "./util/getToday";

export const GeoContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  let stores = [];
  const [todays, setTodays] = useState();
  const [geoLocation, setGeoLocation] = useState();

  getGeoLoca.then(function (value) {
    setGeoLocation(value);
    if (!todays) {
      getToday(value.latitude, value.longitude).then(value => {
        setTodays(value);
      });
    }
  });

  const resetGeoLocation = () => {
    getGeoLoca.then(function (value) {
      setGeoLocation(value);
    });
  };
  const geoObject = {
    stores: stores,
    todays: todays,
    geoLocation: geoLocation,

    setGeoLocation: resetGeoLocation,
    setCustomGeoLocation: (distance, latitude, longitude) => {
      this.stores = getStores(distance, latitude, longitude);
      setGeoLocation({ latitude: latitude, longitude: longitude });
    },
  };

  // 유저 관련 전역 객체 정보
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState("로그인");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function setModalSignIn() {
    setModalState("회원가입");
  }
  function setModalLogIn() {
    setModalState("로그인");
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const userObject = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
    modalIsOpen: modalIsOpen,
    setModalLogIn: setModalLogIn,
    setModalSignIn: setModalSignIn,
    openModal: openModal,
    closeModal: closeModal,
    modalState: modalState,
  };

  return (
    <GeoContext.Provider value={geoObject}>
      <UserContext.Provider value={userObject}>
        <Header />
        {geoLocation ? <BodyRouter /> : <div>loading</div>}
      </UserContext.Provider>
    </GeoContext.Provider>
  );
}

export default App;
