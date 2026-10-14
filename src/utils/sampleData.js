const img = (n, w = 600, h = 450) => `https://picsum.photos/seed/reusehub${n}/${w}/${h}`;

export const sampleCategories = [
  { id: 1, name: "Mobiles" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Vehicles" },
  { id: 4, name: "Furniture" },
  { id: 5, name: "Fashion" },
  { id: 6, name: "Books" },
  { id: 7, name: "Sports" },
  { id: 8, name: "Appliances" },
];

const seller = (name, phone) => ({ name, phone });

export const sampleListings = [
  { id: 1, title: "iPhone 12 (64GB) - excellent condition", price: 28000, city: "Hyderabad", condition: "LIKE_NEW", categoryId: 1, postedAgo: "Today",
    description: "Used for one year with a case and screen guard from day one. Battery health 89%. Comes with original box and charger. No scratches, everything works perfectly.",
    seller: seller("Rahul K.", "98480 12345"), images: [img(1), img(11), img(21)] },
  { id: 2, title: "Wooden Study Table with drawer", price: 2500, city: "Vijayawada", condition: "USED", categoryId: 4, postedAgo: "Yesterday",
    description: "Solid wood study table with one drawer. Moving to another city so need to sell quickly. Pickup only.",
    seller: seller("Sneha P.", "99123 45678"), images: [img(2), img(12)] },
  { id: 3, title: "Hero Sprint cycle, 21 gears", price: 3500, city: "Guntur", condition: "USED", categoryId: 7, postedAgo: "2 days ago",
    description: "Well maintained geared cycle, tyres changed recently. Perfect for college or daily commute.",
    seller: seller("Anil V.", "90000 11122"), images: [img(3), img(13)] },
  { id: 4, title: "Samsung 43 inch Smart LED TV", price: 15000, city: "Hyderabad", condition: "LIKE_NEW", categoryId: 2, postedAgo: "3 days ago",
    description: "Full HD smart TV, 2 years old, remote and wall bracket included. Works perfectly.",
    seller: seller("Priya M.", "98765 43210"), images: [img(4), img(14), img(24)] },
  { id: 5, title: "Honda Activa 5G, 2018 model", price: 42000, city: "Warangal", condition: "USED", categoryId: 3, postedAgo: "4 days ago",
    description: "Single owner, 28,000 km driven, all papers clear, insurance valid till next year.",
    seller: seller("Suresh R.", "97000 22334"), images: [img(5), img(15), img(25)] },
  { id: 6, title: "Engineering books bundle (CSE)", price: 1200, city: "Hyderabad", condition: "USED", categoryId: 6, postedAgo: "5 days ago",
    description: "Set of 8 CSE textbooks, clean pages, no markings. Sold as a bundle only.",
    seller: seller("Kiran T.", "96666 77889"), images: [img(6), img(16)] },
  { id: 7, title: "LG 6kg front load washing machine", price: 11500, city: "Vizag", condition: "USED", categoryId: 8, postedAgo: "1 week ago",
    description: "Working condition, 3 years old, regularly serviced. Reason for selling: upgrading to a bigger one.",
    seller: seller("Meena S.", "94400 55667"), images: [img(7), img(17)] },
  { id: 8, title: "Sofa set 3+1+1 (grey fabric)", price: 9000, city: "Hyderabad", condition: "LIKE_NEW", categoryId: 4, postedAgo: "1 week ago",
    description: "Comfortable fabric sofa set, hardly used. Cushions and covers in perfect shape.",
    seller: seller("Arjun D.", "98888 99900"), images: [img(8), img(18), img(28)] },
].map((l) => ({ ...l, imageUrl: l.images[0] }));
