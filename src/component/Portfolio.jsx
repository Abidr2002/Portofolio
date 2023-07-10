import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";

const Portfolio = () => {
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: arrayDestruct,
  //   },
  //   {
  //     id: 2,
  //     src: reactParallax,
  //   },
  // ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-blue-950 w-full text-white min-h-screen flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4">
        <div className="pb-8">
          <p className="text-4xl sm:text-6xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-xl sm:text-2xl">
            Berikut ini adalah beberapa tugas yang pernah saya kerjakan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {/* {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
