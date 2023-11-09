import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-secondary-text mr-6 ml-6 relative mb-4">
      <div className="absolute top-12 left-72 ">
        <Image
          src={"/images/home/ellipse-185.svg"}
          width={45}
          height={45}
          alt="small ellipse"
        />
      </div>
      <div className="absolute bottom-12 left-32">
        <Image
          src={"/images/home/ellipse-191.svg"}
          width={30}
          height={30}
          alt="medium ellipse"
        />
      </div>
      <div className="absolute -bottom-28 md:-bottom-28 left-96">
        <Image
          src={"/images/home/ellipse-180.svg"}
          width={80}
          height={80}
          alt="large ellipse"
        />
      </div>

      <div className="relative col-span-1 ml-0 sm:ml-20 md:ml-16 lg:ml-20 mt-20 lg:mt-52 text-3xl md:text-4xl lg:text-5xl text-center md:text-start mb-16">
        <div className="absolute lg:right-20">
          <Image
            src={"/images/home/ellipse-190.svg"}
            width={35}
            height={35}
            alt="small green ellipse"
          />
        </div>
        <p className="pb-5 z-20">
          Inspiring{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#54A044] to-[#9CA6FF]">
            Innovation
          </span>
        </p>
        <p className="pb-5">
          Driving{"   "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#073136] to-[#0D1C9F] opacity-60">
            {"   "} Investment
          </span>
        </p>
        <p className="pb-5">
          Empowering{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6B4D70] to-[#3677DA] text-3xl md:text-4xl lg:text-5xl xl:6xl">
            Growth
          </span>
        </p>
      </div>
      <div className="hidden md:block col-span-1 lg:mt-20 xl:mt-0">
        <Image
          src={"/images/home/export.png"}
          width={700}
          height={700}
          className=""
          alt="Export svg"
        />
      </div>
    </div>
  );
};

export default HomePage;
