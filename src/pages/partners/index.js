import Carousal from '@/components/partner_cmp/carousal';
import React from 'react';

const partners = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center py-10 text-[20px]">Partners</h1>
        <div className="bg-white text-black">
          <h1 className="w-[250px] py-4 mx-auto text-center text-[25px]">
            Why cutomers love <br />
            <span className="font-bold">working with us</span>
          </h1>
          <Carousal/>
          <div className="md:mt-20">
            <div className="flex flex-col">
              <div className="h-10">
                <hr className="text-[#00407B] w-[70px] h-full mx-auto leading-[10px]" />
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
}

export default partners
