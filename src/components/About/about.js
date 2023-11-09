import React from "react";
import art1 from "../../../public/images/about/art_1.png";
import art2 from "../../../public/images/about/art_2.png";
import art3 from "../../../public/images/about/art_3.png";
import art4 from "../../../public/images/about/art_4.png";
import back from "../../../public/images/about/polygon-scatter-haikei.svg";
import Image from "next/image";

const About = () => {
  return (
    <main className="relative min-w-screen min-h-screen">
      <Image src={back} fill={true} alt="background" />
      <div className=" absolute flex flex-col min-w-screen">
        <div className="h-32 min-w-full bg-black text-white flex flex-col items-center justify-center gap-5">
          <div className="w-14 border-b-4 border-solid border-[#00407B]"></div>
          <div className="text-2xl">About Us</div>
        </div>
        <div className="flex flex-col min-w-screen pb-40 pl-40 pr-40 pt-20 ">
          <div className="flex flex-col text-black gap-5">
            <div className="w-14 border-b-4 border-solid border-[#00407B]"></div>
            <div className="text-2xl">Know the Business</div>
            <div className="text-2xl font-bold pb-10">We are Commited to</div>
          </div>
          <div className="flex flex-row gap-10 ">
            <div className="flex flex-col gap-10">
              <div className="flex flex-row bg-gradient-to-b from-[#B7C5BC] via-[#B7C5BC] to-[#ece6ef]  rounded-2xl p-10  gap-3">
                <Image className="w-14 h-14" src={art1} alt="art_1" />
                <div className="flex flex-col gap-3">
                  <p>Innovation</p>
                  <p className="">
                    We are dedicated to fostering innovation, continuously
                    seeking new and creative solutions to enhance our business
                    practices and benefit our clients.
                  </p>
                </div>
              </div>
              <div className="flex flex-row bg-gradient-to-b from-[#ece6ef] via-[#B7C5BC] to-[#B7C5BC] rounded-2xl p-10 gap-3">
                <Image className="w-14 h-14" src={art2} alt="art_1" />
                <div className="flex flex-col gap-3">
                  <p>multi-sector business</p>
                  <p>
                    As a versatile, multisector business, we engage in diverse
                    industries, providing comprehensive solutions and
                    opportunities for sustainable growth in various sectors.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-row bg-gradient-to-b from-[#B7C5BC] via-[#B7C5BC] to-[#ece6ef] rounded-2xl p-10 gap-3">
                <Image className="w-14 h-14" src={art3} alt="art_1" />
                <div className="flex flex-col gap-3">
                  <p>Customer satisfaction</p>
                  <p>
                    Customer satisfaction is at the heart of everything we do,
                    and we strive to exceed expectations by delivering
                    exceptional service and products that meet our clients
                    needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row bg-gradient-to-b from-[#ece6ef] via-[#B7C5BC] to-[#B7C5BC] rounded-2xl p-10 gap-3">
                <Image className="w-14 h-14" src={art4} alt="art_1" />
                <div className="flex flex-col gap-3">
                  <p>Investment</p>
                  <p>
                    Our unwavering commitment to investment enables us to grow
                    and expand, ensuring that we can better serve our clients
                    and contribute to Ethiopia economic development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
