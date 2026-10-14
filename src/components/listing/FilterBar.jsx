export default function FilterBar({ filters, setFilters, categories }) {
  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const clear = () =>
    setFilters({ search: "", categoryId: "", city: "", minPrice: "", maxPrice: "" });

  return (
    <div className="filter-bar">
      <select name="categoryId" value={filters.categoryId} onChange={handleChange}>
        <option value="">All categories</option>
        {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <input name="city" placeholder="City" value={filters.city} onChange={handleChange} />
      <input name="minPrice" type="number" placeholder="Min &#8377;" value={filters.minPrice} onChange={handleChange} />
      <input name="maxPrice" type="number" placeholder="Max &#8377;" value={filters.maxPrice} onChange={handleChange} />
      <button className="btn-ghost-dark" onClick={clear}>Clear</button>
    </div>
  );
}
