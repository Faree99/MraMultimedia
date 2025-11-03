
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ShoppingCart, MessageCircle } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   description: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Custom Business Card",
//     price: "₦2,500 / 100pcs",
//     image: "/images/products/business-card.jpg",
//     description: "High-quality double-sided business cards for professionals.",
//   },
//   {
//     id: 2,
//     name: "Branded T-Shirt",
//     price: "₦4,000",
//     image: "/images/products/tshirt.jpg",
//     description: "Custom-designed t-shirts for events, staff, and promotions.",
//   },
//   {
//     id: 3,
//     name: "Vinyl Banner",
//     price: "₦6,000",
//     image: "/images/products/banner.jpg",
//     description: "Durable and vibrant full-color banners for indoor/outdoor use.",
//   },
//   {
//     id: 4,
//     name: "Paper Bag Printing",
//     price: "₦3,500",
//     image: "/images/products/paperbag.jpg",
//     description: "Eco-friendly custom paper bags for your brand packaging.",
//   },
// ];

// export default function ProductCatalog() {
//   return (
//     <section id="products" className="py-20 bg-gradient-to-b from-white to-[#f9fafc]">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
//         >
//           Our <span className="text-mra-orange">Products</span> &{" "}
//           <span className="text-mra-blue">Catalog</span>
//         </motion.h2>

//         {/* Product Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
//             >
//               <div className="relative w-full h-52">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="p-5 flex flex-col flex-grow">
//                 <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//                 <p className="text-gray-600 text-sm mt-1 flex-grow">{product.description}</p>
//                 <p className="mt-3 text-mra-blue font-bold text-lg">{product.price}</p>

//                 <div className="mt-5 flex gap-3">
//                   <a
//                     href={`https://wa.me/2348123456789?text=Hi%20MRA%20Multimedia!%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}`}
//                     target="_blank"
//                     className="flex items-center justify-center gap-2 bg-mra-orange text-white px-4 py-2 rounded-full hover:bg-mra-orange/90 transition shadow-sm"
//                   >
//                     <MessageCircle className="w-4 h-4" />
//                     WhatsApp
//                   </a>

//                   <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition">
//                     <ShoppingCart className="w-4 h-4" />
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";


import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

const products: Product[] = [
  // Business Cards
  {
    id: 1,
    name: "Custom Business Card",
    price: "₦2,500 / 100pcs",
    category: "Business Cards",
    image: "/images/products/business-card.jpg",
    description: "High-quality double-sided business cards for professionals.",
  },
  // Customized T-Shirts
  {
    id: 2,
    name: "Branded T-Shirt",
    price: "₦4,000",
    category: "Customized T-Shirts",
    image: "/images/products/tshirt.jpg",
    description: "Custom-designed t-shirts for events, staff, and promotions.",
  },
  // Banners
  {
    id: 3,
    name: "Vinyl Banner",
    price: "₦6,000",
    category: "Banners",
    image: "/images/products/banner.jpg",
    description: "Durable and vibrant full-color banners for indoor/outdoor use.",
  },
  // Paper Bags
  {
    id: 4,
    name: "Paper Bag Printing",
    price: "₦3,500",
    category: "Paper Bags",
    image: "/images/products/paperbag.jpg",
    description: "Eco-friendly custom paper bags for your brand packaging.",
  },
  // Invitation Cards
  {
    id: 5,
    name: "Wedding Invitation Card",
    price: "₦5,000 / 50pcs",
    category: "Invitation Cards",
    image: "/images/products/invitation-card.jpg",
    description: "Elegant and personalized invitation cards for weddings or events.",
  },
  // Jotters
  {
    id: 6,
    name: "Custom Jotters",
    price: "₦3,000 / 50pcs",
    category: "Jotters",
    image: "/images/products/jotter.jpg",
    description: "Branded jotters for corporate or personal use.",
  },
  // Signages
  {
    id: 7,
    name: "Office Signage",
    price: "₦8,000",
    category: "Signages",
    image: "/images/products/signage.jpg",
    description: "Professional signages for offices, shops, and buildings.",
  },
  // Birthday Gift Cards
  {
    id: 8,
    name: "Birthday Gift Card",
    price: "₦2,000 / 10pcs",
    category: "Birthday Gift Cards",
    image: "/images/products/birthday-card.jpg",
    description: "Personalized birthday gift cards with custom designs.",
  },
  // Nylons
  {
    id: 9,
    name: "Custom Nylon Bags",
    price: "₦3,500 / 50pcs",
    category: "Nylons",
    image: "/images/products/nylon.jpg",
    description: "Durable nylon bags with your custom branding.",
  },
  // Boxes
  {
    id: 10,
    name: "Custom Packaging Boxes",
    price: "₦6,000 / 20pcs",
    category: "Boxes",
    image: "/images/products/box.jpg",
    description: "Branded packaging boxes for gifts, products, or promotions.",
  },
  // ID Cards
  {
    id: 11,
    name: "Employee ID Card",
    price: "₦1,500 / 1pcs",
    category: "ID Cards",
    image: "/images/products/id-card.jpg",
    description: "Professional laminated ID cards for staff or students.",
  },
  // Flyers
  {
    id: 12,
    name: "Event Flyer",
    price: "₦1,500 / 50pcs",
    category: "Flyers",
    image: "/images/products/flyer.jpg",
    description: "Vibrant flyers to promote events, sales, or campaigns.",
  },
  // Souvenirs
  {
    id: 13,
    name: "Custom Souvenir",
    price: "₦2,000",
    category: "Souvenirs",
    image: "/images/products/souvenir.jpg",
    description: "Personalized souvenirs for events, weddings, or companies.",
  },
  // Stamp Seals
  {
    id: 14,
    name: "Custom Stamp Seal",
    price: "₦3,000",
    category: "Stamp Seals",
    image: "/images/products/stamp-seal.jpg",
    description: "Professional rubber or self-inking stamps for branding.",
  },
  // Graphic Design (Services can be listed as products too)
  {
    id: 15,
    name: "Graphic Design Package",
    price: "₦10,000",
    category: "Graphic Design",
    image: "/images/products/graphic-design.jpg",
    description: "Complete graphic design solutions for branding and marketing.",
  },
];



const categories = [
  "All",
  "Graphic Design",
  "Invitation Cards",
  "Jotters",
  "Banners",
  "Signages",
  "Birthday Gift Cards",
  "Business Cards",
  "Nylons",
  "Paper Bags",
  "Customized T-Shirts",
  "Boxes",
  "Customizing",
  "ID Cards",
  "Flyers",
  "Souvenirs",
  "Stamp Seals",
];

export default function ProductCatalog() {
 const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-linear-to-b from-white to-[#f9fafc]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8"
        >
          Our <span className="text-mra-orange">Products</span> &{" "}
          <span className="text-mra-blue">Catalog</span>
        </motion.h2>

        {/* Category Filter */}
         <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-gradient px-6 py-2 rounded-full flex items-center gap-2 font-medium"
          >
            <Search className="w-4 h-4" /> Filter Products
          </button>
        </div>

        {/* Animate filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 overflow-hidden bg-white shadow-lg rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Search */}
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mra-orange"
                />

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                      className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                        selectedCategory === cat
                          ? "bg-mra-orange text-white shadow-md"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col grow">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1 grow">{product.description}</p>
                <p className="mt-3 text-mra-blue font-bold text-lg">{product.price}</p>

                {/* WhatsApp CTA */}
                <div className="mt-5">
                  <a
                    href={`https://wa.me/2349023257308?text=Hi%20MRA%20Multimedia!%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    style={{ background: "var(--mra-orange)" }}
                    className="flex items-center justify-center gap-2 text-white px-4 py-2 rounded-full hover:opacity-90 transition shadow-sm"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

