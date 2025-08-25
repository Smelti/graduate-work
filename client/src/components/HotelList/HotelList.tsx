import { useState, useEffect } from "react";
import HotelCard from "../HotelCard/HotelCard";
import Pagination from "../Pagination/Pagination";
import { filterHotels } from "./FilterHotels.tsx";
import hotels from "../../data/hotels.ts";
import "./HotelList.css";

type HotelListProps = {
  query: string;
  startDate: Date | null;
  endDate: Date | null;
  showInitially?: boolean;
};

export default function HotelList({
  query,
  startDate,
  endDate,
  showInitially = true,
}: HotelListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hotelsPerPage = 5;

  const filteredHotels = filterHotels(hotels, query, startDate, endDate);

  const shouldShow =
    showInitially || query.trim().length > 0 || startDate || endDate;

  useEffect(() => {
    setCurrentPage(1);
  }, [query, startDate, endDate]);

  const start = (currentPage - 1) * hotelsPerPage;
  const end = start + hotelsPerPage;
  const currentHotels = filteredHotels.slice(start, end);

  if (!shouldShow) {
    return null;
  }

  return (
    <>
      <div className="hotel-list">
        {currentHotels.map((hotel) => (
          <HotelCard
            shortDescription={hotel.description}
            key={hotel.id}
            {...hotel}
          />
        ))}
      </div>

      <Pagination
        totalItems={filteredHotels.length}
        itemsPerPage={hotelsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
