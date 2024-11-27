import React from "react";
import img1 from "../assets/img.svg";
import img2 from "../assets/icon-list.svg";

const Newsletter = () => {
  return (
    <div className="max-w-3xl bg-white flex md:flex-row flex-col rounded-xl px-4 py-4 items-center justify-center">
      <div className="md:w-[54%] w-full mt-10 px-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-slate-800 tracking-tight">Stay updated!</h1>
          <p className="mt-2 leading-snug tracking-tight">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="text-sm mt-2">
            <div className="flex gap-2 mb-2">
              <img src={img2} alt="" />
              <p>Product discovery and building what matters</p>
            </div>

            <div className="flex gap-2 mb-2">
              <img src={img2} alt="" />
              <p>Measuring to ensure updates are available</p>
            </div>

            <div className="flex gap-2 mb-6">
              <img src={img2} alt="" />
              <p>And much more!</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm">Email Address</h3>

            <input
              type="text"
              className="w-full px-4 py-4 border border-gray-300 rounded-md mt-2"
              placeholder="Email@company.com"
            />

            <button className="w-full px-4 py-2 bg-slate-800 text-white rounded-md mt-4">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-[46%] md:mt-0 mt-6">
        <img className="w-full" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
