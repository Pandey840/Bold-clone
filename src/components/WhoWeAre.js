import React from "react";

const WhoWeAre = (props) => {
  return (
    <div className="flex justify-center max-w-7xl mx-auto">
      <div className="p-10 mt-5">
        <h2 className="text-5xl font-extrabold text-[#451C76]">
          {props.Headings}
        </h2>
        <p className="text-xl text-[#6D6E71] ml-28 mt-5">
          {props.Description1}
        </p>
        <p className="text-xl text-[#6D6E71] ml-28 mt-5">
          {props.Description2}
        </p>
        <div className="flex justify-center p-12">
          {props.aboutImage.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`AboutImage ${index + 1}`}
              className="mx-auto max-w-xs max-h-40"
            />
          ))}
        </div>
        <div className="bg-[#b173fe] h-1 w-full"></div>
      </div>
    </div>
  );
};

export default WhoWeAre;
