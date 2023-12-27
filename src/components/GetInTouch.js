import React from "react";

const GetInTouch = (props) => {
  return (
    <section className="md:flex md:justify-center p-10 md:p-14 lg:px-32">
      <div className="mt-5">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#451C76]">
          {props.Headings}
        </h2>
        <div className="md:flex items-center">
          <p className="text-xl text-[#6D6E71] mt-5 md:px-10 lg:px-24">
            {props.Description}
          </p>
          <button className="w-full md:w-fit py-3 px-12 rounded bg-[#451C76] text-white font-bold text-2xl mt-5 md:mt-0">
            Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
