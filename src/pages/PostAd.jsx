import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createListing } from "../api/listingApi";
import { getCategories } from "../api/categoryApi";

const fallbackCategories = [
  { id: 1, name: "Mobiles" }, { id: 2, name: "Furniture" },
  { id: 3, name: "Vehicles" }, { id: 4, name: "Electronics" },
];

export default function PostAd() {
  const [form, setForm] = useState({
    title: "", description: "", price: "", city: "", condition: "USED", categoryId: "",
  });
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState(fallbackCategories);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data)).catch(() => {});
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    images.forEach((file) => data.append("images", file));
    try {
      await createListing(data);
      navigate("/my-ads");
    } catch {
      setError("Could not post ad. Please try again.");
    }
  };

  return (
    <div className="form-page">
      <form className="form-card wide" onSubmit={handleSubmit}>
        <h2>Post your ad</h2>
        {error && <p className="error">{error}</p>}
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" rows="4" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price (&#8377;)" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />
        <select name="categoryId" onChange={handleChange} required>
          <option value="">Select category</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select name="condition" onChange={handleChange}>
          <option value="USED">Used</option>
          <option value="LIKE_NEW">Like new</option>
          <option value="NEW">New</option>
        </select>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages([...e.target.files].slice(0, 5))}
        />
        <div className="preview-row">
          {images.map((f, i) => (
            <img key={i} src={URL.createObjectURL(f)} alt="preview" className="preview" />
          ))}
        </div>
        <button type="submit" className="btn-primary">Post Ad</button>
      </form>
    </div>
  );
}
