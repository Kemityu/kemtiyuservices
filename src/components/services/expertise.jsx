import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaMobile } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { MdOutlineCloudSync } from "react-icons/md"; 


const Expertise = () =>{
    return (
        <div>
            <div>
            <h3 className=" text-sm font-semibold uppercase mb-2 text-[#ac9120] pt-3">
                \ Services \
            </h3>
            </div>
            
            <h2 className=" text-2xl font-bold  text-black">
                Notre Expertise
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-10 pt-3 justify-items-center">
    <div className="p-6 bg-white shadow-md w-[250px] h-[500px]">
        <CgWebsite className="h-10 w-10 text-[#ac9120]" />
        <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]">Conception et développement de sites Web</h3>
        <p className="mt-2 pt-3">
            Nous créons des sites web modernes et performants, adaptés à vos besoins. 
            Que ce soit pour une vitrine professionnelle, une boutique en ligne ou une plateforme sur mesure, 
            notre expertise garantit des résultats à la hauteur de vos attentes.
        </p>
    </div>
    <div className="p-6 bg-white shadow-md w-[250px] h-[500px]">
        <FaMobile className="h-10 w-10 text-[#ac9120]" />
        <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]">Application mobile</h3>
        <p className="mt-2 pt-3">
            Nous développons des applications mobiles modernes et intuitives, parfaitement adaptées à vos besoins. 
            Que ce soit pour une solution professionnelle, une application e-commerce ou un outil sur mesure, 
            notre expertise garantit des performances optimales et une expérience utilisateur exceptionnelle.
        </p>
    </div>
    <div className="p-6 bg-white shadow-md w-[250px] h-[500px]">
        <FaMailBulk className="h-10 w-10 text-[#ac9120]" />
        <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]">Mail professionnel</h3>
        <p className="mt-2 pt-3">
            Nous créons des adresses e-mail professionnelles modernes et sécurisées, 
            adaptées à vos besoins. Que ce soit pour renforcer l’image de votre entreprise, améliorer 
            la communication interne ou offrir un service client efficace, notre expertise garantit des 
            solutions fiables et personnalisées.
        </p>
    </div>
    <div className="p-6 bg-white shadow-md w-[250px] h-[500px]">
        <MdOutlineCloudSync className="h-10 w-10 text-[#ac9120]" />
        <h3 className="text-xl p-2 font-semibold border-b-2 border-[#ac9120]">Hébergement</h3>
        <p className="mt-2 pt-3">
            Nous proposons des solutions d’hébergement modernes et performantes, 
            adaptées à vos besoins. Que ce soit pour un site vitrine, une boutique en ligne ou une plateforme complexe, 
            notre expertise garantit une disponibilité optimale, 
            une sécurité renforcée et des performances exceptionnelles.
        </p>
    </div>
</div>

            <br />
        </div>
    )
};

export default Expertise;