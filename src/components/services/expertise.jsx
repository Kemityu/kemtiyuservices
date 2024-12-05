import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaMobile } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { MdOutlineCloudSync } from "react-icons/md"; 

const Expertise = () =>{
    return (
        <div>
            <div>
            <h3 className=" text-sm font-semibold uppercase mb-2 text-[#ac9120]">
                \ Services \
            </h3>
            </div>
            
            <h2 className=" text-2xl font-bold  text-black">
                Notre Expertise
            </h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div className="p-6 bg-white shadow-md  w-[250px] h-[300px]">
                <CgWebsite className="h-10 w-10 text-[#ac9120]" />

                    <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]"> Web Design et developpement</h3>
                    <p className="mt-2">Description du service 1</p>
                </div>
                <div className="p-6 bg-white shadow-md  w-[250px] h-[334px]">
                <FaMobile className="h-10 w-10 text-[#ac9120]" />
                    <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]">Application mobile</h3>
                    <p className="mt-2">Description du service 1</p>
                </div>
                <div className="p-6 bg-white shadow-md  w-[250px] h-[334px]">
                <FaMailBulk className="h-10 w-10 text-[#ac9120]" />
                    <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]"> Mail professionnel</h3>
                    <p className="mt-2">Description du service 1</p>
                </div>
                <div className="p-6 bg-white shadow-md  w-[250px] h-[334px]">
                <MdOutlineCloudSync className="h-10 w-10 text-[#ac9120]"/>
                    <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]"> Hébergement</h3>
                    <p className="mt-2">Description du service 1</p>
                </div>
            </div>
        </div>
    )
};

export default Expertise;