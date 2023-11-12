import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

const socialMediaLink = [
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
];

const Footer = () => {
  const links = [
    { name: "About Us", to: "#about" },
    { name: "services", to: "#services" },
    { name: "market", to: "#" },
    { name: "partners", to: "#" },
  ];
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto flex items-centers mr-4 ml-4">
          <div className="flex flex-row space-x-6 sm:space-x-8 sm:space-y-4 items-center mx-auto flex-wrap ">
            {socialMediaLink.map((Icon, index) => (
              <div
                key={index}
                className="rounded-full shadow-[rgba(50,50,93,0.25)_0px_6px_30px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-4 px-4 sm:py-8 sm:px-8"
              >
                <Icon
                  width={200}
                  height={200}
                  color="#00407B"
                  className="h-6 w-6 sm:w-8 sm:h-8  md:w-11 md:h-11"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-[#454648] mt-8">
          <div className="md:flex md:justify-between grid md:grid-cols-3 ">
            <div className="mb-6 md:mb-0 md:ml-0 ml-4">
              <Link href="#" className="flex items-center mb-8">
                <Image
                  src="/images/home/logo.png"
                  className="me-3"
                  alt="inovest Logo"
                  width={170}
                  height={170}
                />
              </Link>
              <div className="ml-4 md:font-medium font-normal md:text-lg text-base">
                {" "}
                <p className="">Lorem Ipsum is simply dummy text of the</p>
                <p>printing and typesetting industry.</p>
              </div>
            </div>
            <div className="md:ml-0 ml-8">
              <h2 className="mb-6 font-bold text-lg">Links</h2>
              <ul className="text-normal md:text-lg font-medium">
                {links.map((link, index) => (
                  <li className="mb-1" key={index}>
                    <a href={`${link.to}`} className="hover:underline ">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:ml-0 ml-8 md:mt-0 mt-8">
              <h2 className="mb-6 font-bold text-lg">Contact Us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <p>
                    Lorem Ipsum is simply <br></br>dummy text of the printing{" "}
                    <br />
                    and typesetting industry.{" "}
                  </p>
                </li>
                <li>
                  <p>+923183561921</p>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
          </div>

          <div className="text-center mt-8">
            <small className="text-sm text-gray-500">
              © 2023 Copyright by{" "}
              <span>
                <a href="https://upsurge.dev.et/" className="hover:underline">
                  Upsurge
                </a>
              </span>{" "}
              Developers. All rights reserved.
            </small>
          </div>
          <hr className="border-gray-200 sm:mx-auto lg:my-4" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
