import React from 'react';


const loaderProp = ({ src }) => {
    return src;
}

const TeamSection = () => {
    return (
        <div className=" w-auto h-screen sm:wd-32   overflow- from-gray-100 ">
            <div className="team-section max-w-6xl  mx-auto h-full flex flex-col ">
                <div className="text-left flex-row mr-4 mt-16">
                    <hr className="border-t-4 border-[#00407B] w-16 h-2 mb-2  " />
                    <p className="text-lg text-left sm:text-2xl mb-2 text-secondary-text">Know the Business</p>
                    <p className="text-lg sm:text-2xl text-secondary-text font-bold">Our Team</p>
                </div>

                <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 " >
                    <div className="flex flex-col justify-center  items-center " >
                        <div className="relative rounded-lg overflow-hidden" style={{ maxWidth: '80%' }}>
                            <img
                                src="/images/team-members/member1.jpg"
                                alt="Co-Founder Naol Muhammed"
                                className="w-full h-70 sm:h-86 object-cover object-fit:cover"

                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <p className="text-xl sm:text-2xl font-semibold">Co-Founder</p>
                                <p className="text-lg sm:text-xl font-semibold">Naol Muhammed</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center" style={{ maxWidth: '80%' }}>
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src="/images/team-members/member2.jpg"
                                alt="Co-Founder Bereket Alemayehu"
                                className="w-full h-70 sm:h-86 object-cover"

                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <p className="text-xl sm:text-2xl font-semibold">Co-Founder</p>
                                <p className="text-lg sm:text-xl font-semibold">Bereket Alemayehu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;