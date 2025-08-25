import { useParams, Link } from "react-router-dom";
import hotels from "../../../data/hotels";
import "./HotelDetailsPage.css";
import rooms from "../../../data/rooms";
import familyRooms from "../../../data/familyRooms";

export default function HotelDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) return <h2>Отель не найден</h2>;

  const hotelRooms = rooms.filter((room) => room.roomsId === hotel.id);
  const hotelFamilyRooms = familyRooms.filter(
    (family) => family.familyId === hotel.id
  );

  return (
    <div className="">
      <div className="main-card">
        <img className="room-img" src={hotel.img} alt={hotel.name} />
        <div className="room-info">
          <h3 className="room-name">{hotel.name}</h3>
          {hotel.fullDescription.map((paragraph, i) => (
            <p className="room-desc" key={i}>
              {paragraph}
            </p>
          ))}
        </div>
        <Link to={`/hotels/${id}/edit`}>
          <button className="edit-btn">Редактировать</button>
        </Link>
        <Link to={`/hotels/${id}/add`}>
          <button className="add-btn">Добавить номер</button>
        </Link>
      </div>

      <div className="main-card">
        {hotelRooms.map((room) => (
          <div key={room.id}>
            {room.img.map((src, i) => (
              <img className="room-img" key={i} src={src} alt={room.name} />
            ))}
            <div className="room-info">
              <h3 className="room-name">{room.name}</h3>
              {room.description.map((paragraph, i) => (
                <p className="room-desc" key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
        <Link to={`/hotels/${id}/edit`}>
          <button className="edit-btn">Редактировать</button>
        </Link>
      </div>

      <div className="main-card">
        {hotelFamilyRooms.map((family) => (
          <div key={family.id}>
            {family.img.map((src, i) => (
              <img className="room-img" key={i} src={src} alt={family.name} />
            ))}
            <div className="room-info">
              <h3 className="room-name">{family.name}</h3>
              {family.description.map((paragraph, i) => (
                <p className="room-desc" key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
        <Link to={`/hotels/${id}/edit`}>
          <button className="edit-btn">Редактировать</button>
        </Link>
      </div>
    </div>
  );
}
