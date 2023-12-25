import React from "react";

const WeFacilitate = (props) => {
  return (
    <section className="bg-[#F0F0EF]">
      <div className="max-w-7xl mx-auto">
        <div className="p-10 pb-0 pt-20">
          <h2 className="text-5xl font-extrabold text-[#451C76]">
            {props.Headings}
          </h2>
          <div className="flex justify-center p-7">
            {props.weFacilitate.map(({ url, description }, index) => (
              <div key={index} className="text-center mx-4">
                <img
                  src={url}
                  alt={`weFacilitateImage ${index + 1}`}
                  className="mx-auto max-w-xs max-h-[265px]"
                />
                <p className="mt-2 text-lg text-[#6D6E71]">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xl text-[#6D6E71] p-20 pt-0 pb-20">
          {props.Description}
        </p>
      </div>
    </section>
  );
};

export default WeFacilitate;
