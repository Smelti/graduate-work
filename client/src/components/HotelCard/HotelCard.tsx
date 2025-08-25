import "./HotelCard.css";
import { Link } from "react-router-dom";

type HotelCardProps = {
  id: number;
  img: string;
  name: string;
  shortDescription: string;
};
export default function HotelCard({
  img,
  name,
  shortDescription,
  id,
}: HotelCardProps) {
  return (
    <div className="hotel-card">
      <img className="card-img" src={img} alt={name} />
      <div className="card-content">
        <div className="card-info">
          <h3 className="card-name">{name}</h3>
          <p className="card-desc">{shortDescription}</p>
        </div>
        <Link to={`/hotels/${id}`}>
          <button className="card-btn">Подробнее</button>
        </Link>
      </div>
    </div>
  );
}
