import React from "react";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="md:w-1/3 mb-4 md:mb-0 px-5">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul className="text-lg">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
