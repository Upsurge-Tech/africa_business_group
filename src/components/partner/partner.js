import Carousal from "@/components/partner/carousal";
import React from "react";

const Partners = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col items-center py-10 bg-black text-white text-[30px]">
          <div className="">
            <img src="/partner_img/Line.png" alt="img" />
          </div>
          <p className="text-center">Partners</p>
        </div>
        <div className="bg-white text-black">
          <div className="flex flex-col py-4">
            <div className="mx-auto">
              <img src="/partner_img/Line.png" alt="img" />
            </div>
            <h1 className="w-[250px] py-4 mx-auto text-center text-[25px]">
              Why cutomers love <br />
              <span className="font-bold">working with us</span>
            </h1>
          </div>
          <Carousal />
          <div className="md:mt-20 mt-10">
            <div className="flex flex-col">
              <div className="mx-auto">
                <img src="/partner_img/Line.png" alt="img" />
              </div>
              <p className="text-center text-[30px]">
                Our
                <br />
                <span className="font-bold">Partners</span>
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-wrap justify-between md:w-2/3 mx-auto py-4 gap-y-4 md:px-0 px-4">
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
              </div>
              <div className="flex flex-wrap justify-between md:w-2/3 mx-auto py-4 gap-y-4 md:px-0 px-4">
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
                <div className="w-[105px] h-[105px]">
                  <img src="/partner_img/NodeJS.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
