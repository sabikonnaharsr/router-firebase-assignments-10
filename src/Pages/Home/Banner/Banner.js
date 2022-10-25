import React from "react";

const Banner = () => {
  return (
    <div className="card w-96 glass mt-10 mb-10">
      <div>

    </div>
      <figure>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/252/4/1004/light-bulb-lights-books-wallpaper-preview.jpg"
          alt="car!"
        />
      </figure>
      <div className="card-body bg-slate-900 ">
        <h2 className="card-title text-cyan-600 text-2xl font-bold">Life hack</h2>
        <p className="text-start">Education is a process of learning through which we acquire knowledge. It enlightens, empowers, and creates a positive development. Education gives an individual the knowledge and skills to work with virtue. It aids the all-round mental,physical,and intellectual growth and development of an individual.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
