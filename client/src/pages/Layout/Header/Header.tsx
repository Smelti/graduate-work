import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal/Modal";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div>
      <header>
        <div className="nav-main">
          <Link to="/" className="nav-main-content">
            Главная
          </Link>
        </div>

        <div className="profile-header">
          {isLoggedIn && <p className="profile-name">{userName}</p>}

          <div className="profile">
            {isLoggedIn ? (
              <span className="logout" onClick={() => setIsLoggedIn(false)}>
                Выйти
              </span>
            ) : (
              <span className="login" onClick={() => setIsOpen(true)}>
                Войти
              </span>
            )}
          </div>
        </div>
      </header>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3 className="modal-title">
          <a href="">Войти</a> или <a href="">Зарегистрироваться</a>
        </h3>
        <input type="text" placeholder="Email" className="modal-input" />
        <input type="password" placeholder="Пароль" className="modal-input" />
        <button
          onClick={() => {
            setUserName("Катя Иванова");
            setIsLoggedIn(true);
            setIsOpen(false);
          }}
        >
          Войти
        </button>
      </Modal>
    </div>
  );
}
