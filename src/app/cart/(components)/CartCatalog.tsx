"use client";

import { useEffect, useState } from "react";
import { API } from "@/lib/api";
import { addToast, Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Fintoc } from 'fintoc';


export default function CartCatalog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await API.getCartItems(); // GET al backend
        setItems(data);
      } catch (err) {
        console.error("Error al obtener el carrito:", err);
      }
    };

    fetchCart();
  }, []);

  const pay = async () => {

    const fintoc = new Fintoc(process.env.NEXT_FINTOC_SECRET_KEY!);

    const checkoutSession = await fintoc.checkoutSessions.create({
      amount: 1000,
      currency: 'mxn',
      customer_email: 'name@example.com'
    });

  }

  // const removeItem = async (itemId) => {
  //   try {
  //     await API.removeCartItem(itemId);

  //     setItems((prev) => prev.filter((i) => i.id !== itemId));

  //     addToast({
  //       title: "Eliminado",
  //       description: "Producto eliminado del carrito",
  //       color: "danger",
  //     });
  //   } catch (err) {
  //     console.error("Error al eliminar:", err);
  //   }
  // };

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <h1 className="text-3xl font-bold">Mi Carrito</h1>

      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {items.length === 0 && (
          <p className="text-gray-500 text-center">Tu carrito está vacío 🛒</p>
        )}

        {items.map((item) => (
          <Card key={item.id} shadow="sm" className="w-full border border-gray-200">
            <CardBody className="flex gap-4 items-center">
              <Image
                src={item.product.imageUrl}
                alt={item.product.name}
                width={100}
                className="rounded-lg object-cover"
              />

              <div className="flex flex-col gap-1 flex-1">
                <p className="font-semibold text-lg">{item.product.name}</p>
                <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                <p className="font-bold">${item.product.price}</p>
              </div>

              {/* <Button
                color="danger"
                radius="full"
                onPress={() => removeItem(item.id)}
              > */}
                {/* Eliminar
              </Button> */}
            </CardBody>
          </Card>
        ))}
      </div>

      {items.length > 0 && (
        <div className="text-xl font-semibold">
          Total: <span className="text-green-600">${total}</span>
        </div>
      )}

      <Button radius="full" className="bg-black text-white" onPress={() => pay()}>
        Pagar
      </Button>
    </div>
  );
}
