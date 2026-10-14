import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getListing } from "../api/listingApi";
import { formatPrice, conditionLabel } from "../utils/format";
import { sampleListings } from "../utils/sampleData";

export default function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [active, setActive] = useState(0);
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    getListing(id)
      .then((res) => setListing(res.data))
      .catch(() => setListing(sampleListings.find((l) => l.id === Number(id)) || null));
  }, [id]);

  if (!listing) return <div className="container"><p className="empty">Listing not found.</p></div>;

  const images = listing.images?.length ? listing.images : [listing.imageUrl];

  return (
    <div className="container">
      <p className="breadcrumb"><Link to="/">Home</Link> / {listing.title}</p>
      <div className="details-layout">
        <div className="details-left">
          <div className="gallery-main">
            <img src={images[active]} alt={listing.title} />
          </div>
          <div className="gallery-thumbs">
            {images.map((src, i) => (
              <img key={i} src={src} alt="thumb" className={i === active ? "active" : ""} onClick={() => setActive(i)} />
            ))}
          </div>
          <div className="details-card">
            <h3>Description</h3>
            <p>{listing.description}</p>
          </div>
        </div>

        <aside className="details-right">
          <div className="details-card">
            <h1 className="details-price">{formatPrice(listing.price)}</h1>
            <p className="details-title">{listing.title}</p>
            <div className="listing-meta">
              <span>{"\u{1F4CD}"} {listing.city}</span>
              <span>{listing.postedAgo || "Recently"}</span>
            </div>
            <p className="details-cond">Condition: <b>{conditionLabel(listing.condition)}</b></p>
          </div>

          <div className="details-card">
            <div className="seller">
              <div className="avatar">{(listing.seller?.name || "S")[0]}</div>
              <div>
                <b>{listing.seller?.name || "Seller"}</b>
                <p className="muted">Member on ReuseHub</p>
              </div>
            </div>
            <button className="btn-primary full" onClick={() => setShowPhone(true)}>
              {showPhone ? listing.seller?.phone || "Not available" : "Show phone number"}
            </button>
            <Link to="/login" className="btn-outline full">Chat with seller</Link>
          </div>

          <div className="details-card safety">
            <b>Safety tips</b>
            <p>Meet in a public place and inspect the item before paying. Never send money in advance.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
