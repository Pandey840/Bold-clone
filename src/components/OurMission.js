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
    <section className="flex justify-center max-w-7xl mx-auto">
      <div className="p-10 mt-5">
        <h2 className="text-5xl font-extrabold text-[#451C76]">{Headings}</h2>
        <p className="text-xl text-[#6D6E71] ml-28 mt-5">{Description1}</p>
        <p className="text-xl text-[#6D6E71] ml-28 mt-5">{Description2}</p>
        <p className="text-xl text-[#6D6E71] ml-28 mt-5">{Description3}</p>
        <p className="text-xl text-[#6D6E71] ml-28 mt-5">{Description4}</p>
        <ul className="list-disc text-[#6D6E71] ml-36 mt-5">
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
