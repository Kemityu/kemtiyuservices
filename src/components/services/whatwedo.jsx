import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src="https://via.placeholder.com/600x400" // Remplacez par l'URL de votre image
            alt="Team working"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div>
          <h3 className=" text-sm font-semibold uppercase mb-2 text-[#ac9120]">
            \ What We Do \
          </h3>
          <h2 className="text-3xl font-bold text-black leading-tight mb-4">
            We Develop Product That People Love to Use.
          </h2>
          <p className="text-gray-600 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'.
          </p>

          {/* Cards Section */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-black">
              <h4 className="text-xl font-bold text-black-900 mb-2">Nos Visions</h4>
              <p className="text-gray-600 text-sm">
                It is a long established fact that...
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-[#ac9120]">
              <h4 className="text-xl font-bold text-[#ac9120] mb-2">Nos objectifs</h4>
              <p className="text-gray-600 text-sm">
                It is a long established fact that...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
