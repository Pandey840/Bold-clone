import React from "react";

const OurMission = (props) => {
  const {
    Headings,
    Description1,
    Description2,
    Description3,
    Description4,
    details1,
    details2,
    details3,
  } = props;

  return (
    <section className="flex justify-center p-10 md:p-14 lg:px-32">
      <div className="">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#451C76]">
          {Headings}
        </h2>
        <p className="text-xl text-[#6D6E71] mt-5 md:px-10 lg:px-24">
          {Description1}
        </p>
        <p className="text-xl text-[#6D6E71] mt-5 md:px-10 lg:px-24">
          {Description2}
        </p>
        <p className="text-xl text-[#6D6E71] mt-5 md:px-10 lg:px-24">
          {Description3}
        </p>
        <p className="text-xl text-[#6D6E71] mt-5 md:px-10 lg:px-24">
          {Description4}
        </p>
        <ul className="list-disc text-[#6D6E71] pl-8 md:px-16 lg:px-36 mt-5">
          <li className="mb-2">
            <p className="text-xl">
              <strong>Simplifying</strong>
              {details1}
            </p>
          </li>
          <li className="mb-2">
            <p className="text-xl">
              <strong>Amplifying</strong>
              {details2}
            </p>
          </li>
          <li className="mb-2">
            <p className="text-xl">
              <strong>Disseminating</strong>
              {details3}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurMission;
