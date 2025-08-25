import { Link } from "react-router-dom";
import "./Menu.css";
export default function Menu() {
  const role = "admin";

  return (
    <div className="menu">
      <nav>
        <Link to="/hotels" className="menu-item">
          Все Гостиницы
        </Link>
        <Link to="/search" className="menu-item">
          Поиск Номера
        </Link>
        {role === "admin" && (
          <Link to="/add-hotel" className="menu-item">
            Добавить гостиницу
          </Link>
        )}
        {role === "admin" && (
          <Link to="/users" className="menu-item">
            Пользователи
          </Link>
        )}
      </nav>
    </div>
  );
}
