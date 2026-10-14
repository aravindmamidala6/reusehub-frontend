import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ListingDetails from "../pages/ListingDetails";
import PostAd from "../pages/PostAd";
import MyAds from "../pages/MyAds";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/listing/:id" element={<ListingDetails />} />
      <Route path="/post-ad" element={<ProtectedRoute><PostAd /></ProtectedRoute>} />
      <Route path="/my-ads" element={<ProtectedRoute><MyAds /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
