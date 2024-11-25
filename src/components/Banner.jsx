import React from "react";
import BannerImg from "../assets/blog1.jpg";

export default function Banner() {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* img section */}
          <div className="flex justify-center items-center">
            <img src={BannerImg} alt="" className=" rounded-lg" />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
            <p className="py-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              molestias. Numquam quo fugiat nihil pariatur molestiae cumque
              perferendis optio ipsum. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. A id ad quos vero. Velit at voluptates aliquid
              maxime officiis soluta ea cupiditate sequi possimus, cum magni
              odit optio consequuntur fuga!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}