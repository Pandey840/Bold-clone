import React from "react";
import FooterColumn from "./FooterColumn";
import imageLinks from "../data/imageLinks.json";

const Footer = () => {
  const logo = imageLinks.logo;
  return (
    <footer className="bg-[#451C76] text-white py-10">
      <div className="container mx-auto lg:flex lg:justify-between">
        <div className="md:flex md:justify-center p-10">
          <img
            src={logo}
            alt="Logo"
            className="md:max-w-64 h-auto object-contain"
          />
        </div>
        <div className="lg:w-3/4 mb-4 lg:mb-0 md:flex mx-auto">
          <FooterColumn
            title="OTHER BOLD PHCOES"
            links={[
              { text: "PHCOE ON DEMENTIA CAREGIVING", href: "#b" },
              { text: "PHCOE ON DEMENTIA RISK REDUCTION", href: "#a" },
              { text: "BOLD DEMENTIA INFRASTRUCTURE ACT", href: "#a" },
              { text: "CDC ROAD MAP RESOURCES ON DEMENTIA", href: "#a" },
            ]}
          />
          <FooterColumn
            title="QUICK LINKS"
            links={[
              { text: "CDC’S HEALTHY BRAIN INITIATIVE", href: "#b" },
              { text: "BEST PRACTICE CAREGIVING", href: "#a" },
              { text: "KAER – DEMENTIA IN PRIMARY CARE", href: "#a" },
              { text: "USA2 – PLACE AND BRAIN HEALTH EQUITY", href: "#a" },
              { text: "VIDEO TUTORIALS FOR PROVIDERS", href: "#a" },
              { text: "COGNITION IN PRIMARY CARE", href: "#a" },
            ]}
          />
          <FooterColumn
            title="SITE LINKS"
            links={[
              { text: "ABOUT US", href: "#b" },
              { text: "DEMENTIA DETECTION TOOLKITS", href: "#a" },
              { text: "EARLY DETECTION OF DEMENTIA", href: "#a" },
              { text: "TECHNICAL ASSISTANCE FORM", href: "#a" },
              { text: "RESOURCES", href: "#a" },
              { text: "FAQS", href: "#a" },
              { text: "CONNECT", href: "#a" },
            ]}
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BOLD PUBLIC HEALTH CENTER OF
          EXCELLENCE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
