import { useNavigate } from "react-router-dom";
import users from "../../../data/users";
import Pagination from "../../../components/Pagination/Pagination";
import "./UserListPage.css";
import { useState } from "react";

export default function UserListPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSearch = () => {
    const q = query.toLowerCase().trim();

    const result = users.filter(
      (u) =>
        u.id.toString().includes(q) ||
        u.name.toLowerCase().includes(q) ||
        u.phoneNumber.includes(q) ||
        u.email.toLowerCase().includes(q)
    );

    setFilteredUsers(result);
    setCurrentPage(1);
  };

  return (
    <div className="users-page">
      <div className="users-header">
        <h2>Пользователи</h2>
        <input
          type="text"
          placeholder="Введите имя пользователя, id, телефона или почту"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="users-inp"
        />

        <button className="search-btn" onClick={handleSearch}>
          Искать
        </button>
      </div>
      <div className="users-info">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  style={{ textAlign: "center", padding: "12px" }}
                >
                  Ничего не найдено
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredUsers.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
