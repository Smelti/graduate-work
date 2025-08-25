export interface Booking {
  id: number;
  hotelName: string;
  dateFrom: string;
  dateTo: string;
}

export interface User {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  role: "client" | "admin" | "manager";
  bookings: Booking[];
}

const users: User[] = [
  {
    id: 1,
    name: "Иван Петров",
    phoneNumber: "+74957556983",
    email: "ivan@mail.com",
    role: "client",
    bookings: [
      {
        id: 1,
        hotelName: "Отель Москва",
        dateFrom: "2025.08.01",
        dateTo: "2025.08.05",
      },
      {
        id: 2,
        hotelName: "Гранд Отель",
        dateFrom: "2025.06.10",
        dateTo: "2025-06.15",
      },
    ],
  },
  {
    id: 2,
    name: "Анна Сидорова",
    phoneNumber: "+74957556983",
    email: "anna@mail.com",
    role: "manager",
    bookings: [],
  },
  {
    id: 3,
    name: "Иван Петров",
    phoneNumber: "+74957556983",
    email: "ivan@mail.com",
    role: "client",
    bookings: [
      {
        id: 1,
        hotelName: "Отель Москва",
        dateFrom: "2025.08.01",
        dateTo: "2025.08.05",
      },
      {
        id: 2,
        hotelName: "Гранд Отель",
        dateFrom: "2025.06.10",
        dateTo: "2025-06.15",
      },
    ],
  },
  {
    id: 4,
    name: "Анна Сидорова",
    phoneNumber: "+74957556983",
    email: "anna@mail.com",
    role: "manager",
    bookings: [],
  },
  {
    id: 5,
    name: "Иван Петров",
    phoneNumber: "+74957556983",
    email: "ivan@mail.com",
    role: "client",
    bookings: [
      {
        id: 1,
        hotelName: "Отель Москва",
        dateFrom: "2025.08.01",
        dateTo: "2025.08.05",
      },
      {
        id: 2,
        hotelName: "Гранд Отель",
        dateFrom: "2025.06.10",
        dateTo: "2025-06.15",
      },
    ],
  },
  {
    id: 6,
    name: "Анна Сидорова",
    phoneNumber: "+74957556983",
    email: "anna@mail.com",
    role: "manager",
    bookings: [],
  },
];

export default users;
