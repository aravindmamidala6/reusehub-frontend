import api from "./axiosConfig";

export const getListings = (params) => api.get("/listings", { params });
export const getListing = (id) => api.get(`/listings/${id}`);
export const createListing = (formData) => api.post("/listings", formData);
