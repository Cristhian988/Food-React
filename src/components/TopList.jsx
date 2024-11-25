import React from "react";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";

const FoodData = [
  {
    image: food1,
    raiting: "★★★★★",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: food2,
    raiting: "★★★★★",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: food3,
    raiting: "★★★★★",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function TopList() {
  return (
    <div className="container py-14">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FoodData.map((item, index) => {
          return (
            <div
              key={index}
              className="text-center bg-black/10 py-6 px-8 rounded-3xl hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt=""
                className="w-40 h-40 mx-auto object-cover rounded-full img-shadow my-4"
              />
              <div className="space-y-2">
                <p className="text-xl text-red-500">{item.raiting}</p>
                <p className="text-lg font-semibold">{item.name}</p>
                <p>{item.desc}</p>
                <p className="text-lg font-semibold">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
