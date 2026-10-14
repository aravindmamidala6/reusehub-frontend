export const formatPrice = (p) => "\u20B9 " + Number(p).toLocaleString("en-IN");

export const conditionLabel = (c) =>
  ({ NEW: "New", LIKE_NEW: "Like new", USED: "Used" }[c] || "Used");
