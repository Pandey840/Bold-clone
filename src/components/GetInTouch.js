import React from "react";

const GetInTouch = (props) => {
  return (
    <section className="flex justify-center max-w-7xl mx-auto">
      <div className="p-10 mt-5">
        <h2 className="text-5xl font-extrabold text-[#451C76]">
          {props.Headings}
        </h2>
        <div className="flex items-center space-x-36">
          <p className="text-xl text-[#6D6E71] ml-16 mt-5">
            {props.Description}
          </p>
          <button className="py-3 px-12 rounded bg-[#451C76] text-white font-bold text-2xl">
            Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
