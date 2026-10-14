import ListingCard from "./ListingCard";

export default function ListingGrid({ listings }) {
  if (!listings.length) return <p className="empty">No items found.</p>;
  return (
    <div className="listing-grid">
      {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
    </div>
  );
}
