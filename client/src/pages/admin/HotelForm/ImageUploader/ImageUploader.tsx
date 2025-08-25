import { useRef } from "react";
import { CgClose } from "react-icons/cg";
import "./ImageUploader.css";

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
  maxImages?: number;
}

export default function ImageUploader({
  images,
  onChange,
  maxImages = 3,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file) {
      if (images.length >= maxImages) {
        alert(`Можно загрузить максимум ${maxImages} фото`);
        return;
      }
      const url = URL.createObjectURL(file);
      onChange([...images, url]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="img-form">
      {images.map((src, index) => (
        <div key={index} className="img-form-wrapper">
          <img
            src={src}
            alt={`Фото ${index + 1}`}
            className="img-form-visible"
          />
          <button onClick={() => handleDelete(index)} className="remove-btn">
            <CgClose />
          </button>
        </div>
      ))}

      {images.length < maxImages && (
        <div onClick={handleClick} className="img-form-add">
          +
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImgChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
