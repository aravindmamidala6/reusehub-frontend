import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice, conditionLabel } from "../../utils/format";

export default function ListingCard({ listing }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault(); // don't open the listing page
    setLiked(!liked);
  };

  return (
    <Link to={`/listing/${listing.id}`} className="listing-card">
      <div className="card-img">
        <img
          src={listing.imageUrl || "https://placehold.co/400x300?text=No+Image"}
          alt={listing.title}
          loading="lazy"
        />
        <span className="badge">{conditionLabel(listing.condition)}</span>
        <button className={`heart ${liked ? "liked" : ""}`} onClick={toggleLike} aria-label="Save">
          {liked ? "\u2665" : "\u2661"}
        </button>
      </div>
      <div className="listing-info">
        <h3 className="price">{formatPrice(listing.price)}</h3>
        <p className="listing-title">{listing.title}</p>
        <div className="listing-meta">
          <span>{"\u{1F4CD}"} {listing.city}</span>
          <span>{listing.postedAgo || "Recently"}</span>
        </div>
      </div>
    </Link>
  );
}
