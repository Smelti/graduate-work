import { Hotel } from "../../data/hotels";

export function filterHotels(
  hotels: Hotel[],
  query: string,
  startDate: Date | null,
  endDate: Date | null
): Hotel[] {
  return hotels.filter((hotel) => {
    const matchesName = hotel.name.toLowerCase().includes(query.toLowerCase());

    if (!startDate || !endDate) {
      return matchesName;
    }

    const matchesDates = true;

    return matchesName && matchesDates;
  });
}
