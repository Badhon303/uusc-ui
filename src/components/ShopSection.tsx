import { useState } from "react";
import { useInView } from "@/hooks/useAnimations";
import { ShoppingCart } from "lucide-react";

type ShopCategory = "All" | "Apparel" | "Equipment" | "Accessories";

interface Product {
  name: string;
  price: string;
  sizes: string[];
  category: ShopCategory;
  color: string;
}

const products: Product[] = [
  { name: "UUSC Pro Jersey", price: "2,500", sizes: ["S", "M", "L", "XL"], category: "Apparel", color: "from-primary/20" },
  { name: "Training Shorts", price: "1,200", sizes: ["S", "M", "L", "XL"], category: "Apparel", color: "from-accent/20" },
  { name: "Club Track Jacket", price: "3,800", sizes: ["S", "M", "L", "XL"], category: "Apparel", color: "from-primary/20" },
  { name: "Pro Badminton Racket", price: "8,500", sizes: ["4U", "3U"], category: "Equipment", color: "from-yellow-500/20" },
  { name: "Feather Shuttlecocks (12pk)", price: "1,800", sizes: ["Standard"], category: "Equipment", color: "from-emerald-500/20" },
  { name: "Court Shoes Pro", price: "6,200", sizes: ["38", "39", "40", "41", "42", "43", "44"], category: "Equipment", color: "from-accent/20" },
  { name: "Player Wristband Set", price: "450", sizes: ["One Size"], category: "Accessories", color: "from-primary/20" },
  { name: "UUSC Sports Bag", price: "3,200", sizes: ["Standard"], category: "Accessories", color: "from-yellow-500/20" },
  { name: "Grip Tape (3pk)", price: "350", sizes: ["Standard"], category: "Accessories", color: "from-accent/20" },
];

const ShopSection = () => {
  const [category, setCategory] = useState<ShopCategory>("All");
  const { isInView, ref } = useInView(0.1);

  const filtered = category === "All" ? products : products.filter((p) => p.category === category);

  return (
    <section id="shop" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            15 // Merchandise
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Shop
          </h2>
          <p className="text-muted-foreground max-w-[50ch] mx-auto">
            Gear up with official UUSC merchandise and equipment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["All", "Apparel", "Equipment", "Accessories"] as ShopCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setCategory(tab)}
              className={`px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                category === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <div
              key={product.name}
              className={`card-dark overflow-hidden group neon-border transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-base uppercase tracking-wide text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-primary font-display text-xl font-bold mb-3">
                  ৳{product.price}
                </p>

                {/* Sizes */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-0.5 bg-secondary border border-border text-[10px] text-muted-foreground uppercase tracking-wider hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
