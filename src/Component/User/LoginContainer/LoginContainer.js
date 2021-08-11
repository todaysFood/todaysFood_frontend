import React, { useContext } from 'react'
import { UserContext } from '../../../App'
import Modal from 'react-modal'
import Login from '../Login/Login'
import SignIn from '../SignIn/SignIn'
Modal.setAppElement('#root')

export default function LoginContainer() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      boxShadow: '0 4px 6px 0 rgb(20 20 20 / 40%)',
    },
  }
  const user = useContext(UserContext)
  return (
    <Modal
      isOpen={user.modalIsOpen}
      onRequestClose={user.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {user.modalState === '로그인' ? (
        <Login closeModal={user.closeModal} setModalSignIn={user.setModalSignIn} />
      ) : (
        <SignIn closeModal={user.closeModal} setModalLogIn={user.setModalLogIn} />
      )}
    </Modal>
  )
}
