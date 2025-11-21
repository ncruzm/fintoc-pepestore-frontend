"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Image
} from "@heroui/react";

// interface ProductCardProps {
//   product: {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string;
//   };
//   onAdd: (product: ProductCardProps["product"]) => void;
// }

export default function ProductCard({ product, onAdd }) {
  return (
    <Card
      shadow="sm"
      radius="lg"
      className="w-full max-w-xs border border-gray-200"
    >
      <CardHeader className="p-0">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width="100%"
          height={180}
          className="object-cover rounded-t-lg"
        />
      </CardHeader>

      <CardBody className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <p className="font-bold text-xl">${product.price}</p>
      </CardBody>

      <CardFooter>
        <Button
          radius="full"
          className="w-full bg-black text-white"
          onPress={() => onAdd(product)}
        >
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}