// components/Section.js
import React from "react";

const Section2 = () => {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row justify-around items-center gap-5 max-w-5xl mx-auto">
      <div className="w-96 h-96 mr-auto rounded shadow-lg overflow-hidden max-w-full order-2 md:order-none">
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80" // Replace with your image path
          alt="Sample Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-2xl font-semibold">Szeroki wybór specjalizacji</h2>
        <p className="mt-2 text-gray-700 max-w-md">
          <b className="text-accent-400">TRAINdly.</b> umożliwi skoncentrowanie
          się na konkretnej dziedzinie fitness lub celu, który chcesz osiągnąć.
          Możesz znaleźć trenera specjalizującego się w treningu siłowym,
          aerobowym, jogi, pilates, odchudzaniu, rehabilitacji i wielu innych
          obszarach.
        </p>
      </div>
    </section>
  );
};

export default Section2;
