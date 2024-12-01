import React from "react";

const HomePage = () => {
  return (
    <section className="h-[99.9dvh] flex flex-col items-center justify-center bg-gradient-to-t from-gray-200 to-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 items-center justify-center">
          <div className="text-sm py-20 px-10 text-center max-w-2xl mx-auto">
            <h1 className="text-3xl tracking-wide leading-normal font-bold mb-4 mt-6">
              RAYY -{" "}
              <span className="text-primary">
                Effortless Invoice Management
              </span>
            </h1>
            <h4 className="text-base font-medium text-muted tracking-normal leading-normal mb-4 mt-4">
              Simplify your business processes with a powerful platform for
              managing products, sales, vouchers, and user profiles. Clean,
              flexible, and fully responsive—designed to save you time and
              effort.
            </h4>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
            <img src="../react.svg" className="w-9 h-9" />
          </div>
          <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
            <img src="../tailwind.png" className="w-9 h-9" />
          </div>
          <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
            <img src="../html5.png" className="w-9 h-9" />
          </div>
          <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
            <img src="../css3.png" className="w-9 h-9" />
          </div>
          <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
            <img src="../zustand.svg" className="w-9 h-9" />
          </div>
          <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
            <img src="../laravel.svg" className="w-9 h-9" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
