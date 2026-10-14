export function iconFor(name = "") {
  const n = name.toLowerCase();
  if (n.includes("mobile") || n.includes("phone")) return "\u{1F4F1}";
  if (n.includes("electronic") || n.includes("laptop") || n.includes("computer")) return "\u{1F4BB}";
  if (n.includes("vehicle") || n.includes("car") || n.includes("bike")) return "\u{1F697}";
  if (n.includes("furniture") || n.includes("home")) return "\u{1F6CB}\uFE0F";
  if (n.includes("fashion") || n.includes("cloth")) return "\u{1F455}";
  if (n.includes("book")) return "\u{1F4DA}";
  if (n.includes("sport") || n.includes("fitness")) return "\u26BD";
  if (n.includes("appliance")) return "\u{1F9FA}";
  return "\u{1F4E6}";
}
