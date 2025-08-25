import { useParams } from "react-router-dom";
import users from "../../../../data/users";

export default function UserDetailsPage() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h2>Пользователь не найден</h2>;

  return (
    <div className="users-page">
      <h1 className="user-name">{user.name}</h1>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Отель</th>
            <th>Дата заезда</th>
            <th>Дата выезда</th>
          </tr>
        </thead>
        <tbody>
          {user.bookings.length === 0 ? (
            <tr>
              <td colSpan={5}>Бронирований нет</td>
            </tr>
          ) : (
            user.bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.hotelName}</td>
                <td>{booking.dateFrom}</td>
                <td>{booking.dateTo}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
