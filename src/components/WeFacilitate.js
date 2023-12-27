import React from "react";

const WeFacilitate = (props) => {
  return (
    <section className="bg-[#F0F0EF] flex justify-center p-10 md:p-14 md:pb-0 lg:px-32">
      <div className="mx-auto">
        <div className="pb-0">
          <h2 className="text-5xl font-extrabold text-[#451C76]">
            {props.Headings}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-7">
            {props.weFacilitate.map(({ url, description }, index) => (
              <div key={index} className="text-center">
                <img
                  src={url}
                  alt={`weFacilitateImage ${index + 1}`}
                  className="mx-auto md:max-w-[140px] lg:max-w-[190px] xl:max-w-xs xl:max-h-[265px]"
                />
                <p className="mt-2 text-xs lg:text-lg text-[#6D6E71]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xl text-[#6D6E71] md:px-10 lg:px-24 pb-16">
          {props.Description}
        </p>
      </div>
    </section>
  );
};

export default WeFacilitate;
