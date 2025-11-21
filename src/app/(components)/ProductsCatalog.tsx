"use client";

import { API } from "@/lib/api";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { addToast } from "@heroui/react";

export const products = [
  {
    id: "1",
    name: "Red Bull Energy Drink 250ml",
    description: "Clásica bebida energizante para aumentar tu energía y concentración.",
    price: 1490,
    imageUrl: "https://picsum.photos/seed/redbull1/300/200",
    stock: 50,
  },
  {
    id: "2",
    name: "Red Bull Sugar Free 250ml",
    description: "Todo el poder del Red Bull pero sin azúcar.",
    price: 1590,
    imageUrl: "https://picsum.photos/seed/redbull2/300/200",
    stock: 40,
  },
  {
    id: "3",
    name: "Monster Energy 473ml",
    description: "La clásica Monster con sabor intenso y alto contenido energético.",
    price: 1790,
    imageUrl: "https://picsum.photos/seed/monster1/300/200",
    stock: 60,
  },
  {
    id: "4",
    name: "Monster Ultra Zero 473ml",
    description: "Monster sin azúcar con sabor refrescante y cero calorías.",
    price: 1890,
    imageUrl: "https://picsum.photos/seed/monster2/300/200",
    stock: 45,
  },
  {
    id: "5",
    name: "Gatorade Cool Blue 500ml",
    description: "Hidratación con electrolitos para mantener tu rendimiento.",
    price: 1290,
    imageUrl: "https://picsum.photos/seed/gatorade1/300/200",
    stock: 70,
  },
  {
    id: "6",
    name: "Gatorade Naranja 500ml",
    description: "Clásico sabor naranja para recargar energía.",
    price: 1290,
    imageUrl: "httpsum.photos/seed/gatorade2/300/200",
    stock: 80,
  },
  {
    id: "7",
    name: "Barra de Cereal Nature Valley",
    description: "Crujiente barra de granola sabor miel y avena.",
    price: 990,
    imageUrl: "https://picsum.photos/seed/naturevalley/300/200",
    stock: 90,
  },
  {
    id: "8",
    name: "Snickers Chocolate Bar",
    description: "Barra de chocolate con maní, caramelo y nougat.",
    price: 890,
    imageUrl: "https://picsum.photos/seed/snickers/300/200",
    stock: 55,
  },
  {
    id: "9",
    name: "Doritos Tex-Mex 140g",
    description: "Nachos crujientes con sabor intenso Tex-Mex.",
    price: 1890,
    imageUrl: "https://picsum.photos/seed/doritos/300/200",
    stock: 40,
  },
  {
    id: "10",
    name: "Pringles Original 134g",
    description: "Las clásicas Pringles con su sabor inconfundible.",
    price: 2490,
    imageUrl: "https://picsum.photos/seed/pringles/300/200",
    stock: 35,
  },
];

export default function ProductsCatalog() {

  const [addingProduct, setAddingProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API if needed
    // For now, we use the static products array

    const fetchProducts = async () => {
      const products = await API.getProducts();
      setProducts(products);
      console.log("Fetched products:", products);
      return products;
    };

    fetchProducts()
  }, []);


  const addToCart = async (product) => {
    try {
      const response = await API.addProductToCart(product.id, 1);
      addToast({
          title: "Éxito",
          description: `Producto agregado!`,
          color: "success",
        });
    } catch (err) {
      console.error("Error al agregar al carrito:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <h1 className="text-3xl font-bold">Catálogo de Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}