import { useState } from "react";
import ImageUploader from "./ImageUploader/ImageUploader";
import "./HotelForm.css";

interface HotelFormProps {
  initialData: {
    name: string;
    description: string;
    images: string[];
  };
  onSubmit: (data: {
    name: string;
    description: string;
    images: string[];
  }) => void;
}

export default function HotelForm({ initialData, onSubmit }: HotelFormProps) {
  const [name, setName] = useState(initialData.name);
  const [description, setDescription] = useState(initialData.description);
  const [images, setImages] = useState(initialData.images);

  const handleSave = () => {
    onSubmit({ name, description, images });
  };

  return (
    <div className="edit-page">
      <ImageUploader images={images} onChange={setImages} maxImages={3} />

      <label>
        <h4>Название отеля</h4>
        <input
          className="edit-name"
          type="text"
          placeholder="Введите текст"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        <h4>Описание отеля</h4>
        <textarea
          className="edit-desc"
          placeholder="Введите текст"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
}
