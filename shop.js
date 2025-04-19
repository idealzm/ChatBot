import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search } from "lucide-react";

const products = [
  {
    name: "Hyper",
    price: 99.0,
    image: "/images/hyper.png",
    liked: true,
  },
  {
    name: "Frame v1",
    price: 82.0,
    oldPrice: 99.5,
    image: "/images/framev1.png",
  },
  {
    name: "Eclipse",
    price: 70.0,
    oldPrice: 86.0,
    image: "/images/eclipse.png",
  },
  {
    name: "Spectra",
    price: 54.5,
    image: "/images/spectra.png",
  },
];

export default function TelegramMiniApp() {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="text-3xl font-bold text-green-900">16 New Arrivals</div>

      <div className="relative mt-2">
        <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search your product"
          className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-200 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((item, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-2 flex flex-col items-center">
              <img src={item.image} alt={item.name} className="h-20 object-contain" />
              <div className="mt-2 text-sm font-medium text-gray-900">{item.name}</div>
              <div className="text-sm text-green-800 font-bold">${item.price.toFixed(2)}</div>
              {item.oldPrice && (
                <div className="text-xs text-gray-400 line-through">${item.oldPrice.toFixed(2)}</div>
              )}
            </CardContent>
            <Heart
              className={`absolute top-2 right-2 w-4 h-4 ${
                item.liked ? "text-pink-500 fill-pink-500" : "text-gray-400"
              }`}
            />
          </Card>
        ))}
      </div>

      <div className="fixed bottom-4 left-0 right-0 flex justify-around px-4">
        <Button variant="ghost">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
        <Button variant="default" className="rounded-full p-2">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
