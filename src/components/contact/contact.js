import React from "react";
import phone from "../../../public/images/contact/Phone.png";
import email from "../../../public/images/contact/email.png";
import Image from "next/image";

const Contact = () => {
  return (
    <main id="contact" className="  min-w-screen  ">
      <div className="  flex flex-col min-w-screen">
        <div className=" h-32 min-w-screen bg-black text-white flex flex-col items-center justify-center gap-5">
          <div className="w-14 border-b-4 border-solid border-[#00407B]"></div>
          <div className="text-2xl font-inter">Contact Us</div>
        </div>
        <div className="flex flex-col lg:flex-row pr-10 md:pr-20 pb-20 pt-10 pl-10 lg:pl-0 gap-10">
          <div className="flex flex-col  sm:flex-row lg:flex-col w-2/4 gap-5 p-3 md:p-20  ">
            <p className="text-3xl font-bold font-inter">
              Let&#39;s get in touch!
            </p>
            <div className="flex flex-col gap-5 bg-gradient-to-b from-[#ece6ef] via-[#cfd3d1] to-[#ece6ef]  rounded-2xl p-10 w-60 ">
              <div className="flex flex-row gap-5">
                <Image className="w-4 h-4" src={phone} alt="phone_icon" />
                <p className="font-poppins">Phone</p>
              </div>
              <p className="font-poppins font-bold">+61 236-788-429</p>
            </div>
            <div className="flex flex-col gap-5 bg-gradient-to-b from-[#ece6ef] via-[#cfd3d1] to-[#ece6ef]  rounded-2xl p-10 w-60">
              <div className="flex flex-row gap-5">
                <Image className="w-4 h-4" src={email} alt="email_icon" />
                <p className="font-poppins">Email</p>
              </div>
              <p className="font-poppins font-bold">support@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-full p-10 gap-3   bg-gradient-to-b from-[#e2e2e3] via-[#d1d1d1] to-[#e6e5e7] rounded-2xl ">
            <p className="flex font-bold text-4xl font-inter">
              Send Us A Message
            </p>
            <p className="flex  text-lg font-poppins">
              Have any questions regarding our services? Send us your message.
            </p>
            <form className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <label htmlFor="#name" className="font-bold font-poppins">
                    Name
                  </label>
                  <input
                    className="flex p-3 rounded-2xl "
                    placeholder="Enter your Phone"
                    type={"text"}
                    id="name"
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="#email" className="font-bold font-poppins">
                    Email
                  </label>
                  <input
                    className="flex p-3 rounded-2xl "
                    placeholder="Enter your Email"
                    type={"text"}
                    id="email"
                    name="email"
                  />
                </div>{" "}
              </div>
              <div className="flex flex-col ">
                <label htmlFor="#message" className="font-bold font-poppins">
                  Message
                </label>
                <input
                  className="flex p-14  rounded-2xl"
                  placeholder="Enter your message"
                  type={"text"}
                  id="message"
                  name="message"
                />
              </div>
              <div className="flex justify-end items-end  ">
                <button
                  className="p-5 rounded-3xl font-poppins text-white bg-[#11112B]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
