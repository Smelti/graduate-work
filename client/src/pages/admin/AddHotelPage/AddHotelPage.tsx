/* eslint-disable @typescript-eslint/no-explicit-any */
import HotelForm from "../HotelForm/HotelForm";

export default function AddHotelPage() {
  const handleSubmit = (data: any) => {
    console.log("Добавляем новый отель:", data);
  };

  return (
    <HotelForm
      initialData={{ name: "", description: "", images: [] }}
      onSubmit={handleSubmit}
    />
  );
}
