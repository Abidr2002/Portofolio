import React from "react";

const Tentang = () => {
  return (
    <div
      name="tentang"
      className="w-full min-h-screen bg-gradient-to-b from-blue-950 to-black text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4">
        <div className="pb-8">
          <p className="text-4xl sm:text-6xl font-bold inline border-b-4 border-gray-500">
            Tentang Saya
          </p>
        </div>

        <p className="text-xl sm:text-2xl mt-8 sm:mt-20">
          Saya Ahmad Hauzan Abid Romadhon mahasiswa informatika Universitas
          Pembanguanan Nasional Veteran Jawa Timur angkatan 2021 yang memiliki
          ketertarikan bersar terhadap Web Developer, dan selalu termotivasi
          untuk mencoba berbagai hal baru.
        </p>

        <br />

        <p className="text-xl sm:text-2xl mt-8">
          Memiliki beberapa pengalaman dalam mengerjakan beberapa projek dengan
          bahasa C++ dalam bentuk command line dan beberapa website menggunakan
          HTML, CSS, Javascript, PHP serta framework React dan Tailwind.
        </p>
      </div>
    </div>
  );
};

export default Tentang;
