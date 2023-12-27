import React from "react";

const WhoWeAre = (props) => {
  return (
    <div className="flex justify-center p-10 md:p-14 md:pb-0 lg:p-32 lg:pb-0">
      <div className="mt-5">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#451C76]">
          {props.Headings}
        </h2>
        <p className="text-xl text-[#6D6E71] mt-5 md:px-10 lg:px-24">
          {props.Description1}
        </p>
        <p className="text-xl text-[#6D6E71] mt-5 md:px-10 lg:px-24">
          {props.Description2}
        </p>
        <div className="md:flex md:justify-center p-12">
          {props.aboutImage.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`AboutImage ${index + 1}`}
              className="mx-auto md:max-w-[180px] md:max-h-24 lg:max-w-[200px] lg:max-h-28 xl:max-w-xs xl:max-h-40 mb-5 md:mb-0"
            />
          ))}
        </div>
        <div className="bg-[#b173fe] h-1 w-full"></div>
      </div>
    </div>
  );
};

export default WhoWeAre;
