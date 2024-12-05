import React from "react";
import itcompany from "../../assets/itcomp.jpg";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src={itcompany} 
            alt="Team working"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div>
          <h3 className=" text-sm font-semibold uppercase mb-2 text-[#ac9120]">
            \ Ce que nous faisons \
          </h3>
          <h2 className="text-3xl font-bold text-black leading-tight mb-4">
          Nous développons des produits que les gens aiment utiliser.
          </h2>
          <p className="text-gray-600 mb-6">
            Nous créons des produits innovants et intuitifs, conçus pour répondre aux besoins réels de nos utilisateurs. 
            Chaque projet que nous développons vise à offrir une expérience unique, alliant simplicité et performance, 
            tout en restant fidèle à vos attentes et objectifs. Notre mission est de transformer des idées en solutions 
            tangibles, appréciées et utilisées au quotidien.
          </p>

          {/* Cards Section */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-black">
              <h4 className="text-xl font-bold text-black-900 mb-2">Notre Vision</h4>
              <p className="text-gray-600 text-sm">
              Créer des solutions qui façonnent l'avenir.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-[#ac9120]">
              <h4 className="text-xl font-bold text-[#ac9120] mb-2">Notre objectif</h4>
              <p className="text-gray-600 text-sm">
                Atteindre l'excellence à chaque étape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
