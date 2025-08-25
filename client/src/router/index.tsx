import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/auth/LoginPage/LoginPage";
import ProfilePage from "../pages/user/ProfilePage/ProfilePage";
import HotelsPage from "../pages/user/HotelsPage/HotelsPage";
import Layout from "../pages/Layout/Layout";
import HotelDetailsPage from "../pages/user/HotelsDetailsPage/HotelDetailsPage";
import EditHotelPage from "../pages/admin/EditHotelPage/EditHotelPage";
import AddHotelPage from "../pages/admin/AddHotelPage/AddHotelPage";
import UserListPage from "../pages/admin/UserListPage/UserListPage";
import UserDetailsPage from "../pages/admin/UserListPage/UserDetailsPage/UserDetailsPage";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/hotels" element={<HotelsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
          <Route path="/hotels/:id/edit" element={<EditHotelPage />}></Route>
          <Route path="/add-hotel" element={<AddHotelPage />}></Route>
          <Route path="/users" element={<UserListPage />}></Route>
          <Route path="/users/:id" element={<UserDetailsPage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}
