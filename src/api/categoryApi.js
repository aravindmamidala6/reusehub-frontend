import api from "./axiosConfig";

export const getCategories = () => api.get("/categories");
