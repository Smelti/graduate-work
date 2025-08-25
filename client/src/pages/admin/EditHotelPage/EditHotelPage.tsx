/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import HotelForm from "../HotelForm/HotelForm";
import hotels from "../../../data/hotels";

export default function EditHotelPage() {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) return <div>Отель не найден</div>;

  const handleSubmit = (data: any) => {
    console.log("Редактируем отель:", data);
  };

  return <HotelForm initialData={hotel} onSubmit={handleSubmit} />;
}
