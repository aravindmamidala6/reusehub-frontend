import { useEffect, useState } from "react";
import { getListings } from "../api/listingApi";
import { getCategories } from "../api/categoryApi";
import ListingGrid from "../components/listing/ListingGrid";
import FilterBar from "../components/listing/FilterBar";
import CategoryStrip from "../components/listing/CategoryStrip";
import useDebounce from "../hooks/useDebounce";
import { sampleListings, sampleCategories } from "../utils/sampleData";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState(sampleCategories);
  const [filters, setFilters] = useState({
    search: "", categoryId: "", city: "", minPrice: "", maxPrice: "",
  });
  const debounced = useDebounce(filters, 400);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data)).catch(() => {});
  }, []);

  useEffect(() => {
    const params = Object.fromEntries(Object.entries(debounced).filter(([, v]) => v !== ""));
    getListings(params)
      .then((res) => setListings(Array.isArray(res.data) ? res.data : res.data.content))
      .catch(() => {
        // backend not ready yet: filter the sample data locally
        setListings(sampleListings.filter((l) =>
          l.title.toLowerCase().includes((debounced.search || "").toLowerCase()) &&
          (!debounced.categoryId || l.categoryId === Number(debounced.categoryId)) &&
          (!debounced.city || l.city.toLowerCase().includes(debounced.city.toLowerCase())) &&
          (!debounced.minPrice || l.price >= Number(debounced.minPrice)) &&
          (!debounced.maxPrice || l.price <= Number(debounced.maxPrice))
        ));
      });
  }, [debounced]);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>Buy &amp; sell pre-loved items, <span>near you</span></h1>
          <p>Thousands of great deals on mobiles, vehicles, furniture and more.</p>
          <div className="hero-search">
            <input
              placeholder="What are you looking for? (e.g. iPhone, sofa, cycle)"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <button>Search</button>
          </div>
        </div>
      </section>

      <div className="container">
        <CategoryStrip
          categories={categories}
          selected={filters.categoryId}
          onSelect={(id) => setFilters({ ...filters, categoryId: id })}
        />
        <FilterBar filters={filters} setFilters={setFilters} categories={categories} />
        <h2 className="section-title">Fresh recommendations</h2>
        <ListingGrid listings={listings} />
      </div>
    </>
  );
}
