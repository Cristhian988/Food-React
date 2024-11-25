import React from "react";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-5 text-center md:text-left pt-24 pb-10">
          <h1 className="text-5xl font-bold">
            Delicious Food Is Waiting For You
          </h1>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
            temporibus omnis. Assumenda neque laboriosam nihil magnam excepturi
            provident ab quisquam?
          </p>
          <div className="flex gap-4 items-center justify-center md:justify-start ">
            <button className="primary-btn">Food Menu</button>
            <button className="secondary-btn">Book Table</button>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex flex-col justify-center">
          <img src={hero} alt="heroImg" className=" img-shadow" />
        </div>
      </div>
    </div>
  );
}
