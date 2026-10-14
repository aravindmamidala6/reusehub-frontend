import { iconFor } from "../../utils/categoryIcons";

export default function CategoryStrip({ categories, selected, onSelect }) {
  return (
    <div className="category-strip">
      <button className={`cat-chip ${selected === "" ? "active" : ""}`} onClick={() => onSelect("")}>
        <span className="cat-icon">{"\u2728"}</span>
        <span>All</span>
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          className={`cat-chip ${String(selected) === String(c.id) ? "active" : ""}`}
          onClick={() => onSelect(c.id)}
        >
          <span className="cat-icon">{iconFor(c.name)}</span>
          <span>{c.name}</span>
        </button>
      ))}
    </div>
  );
}
