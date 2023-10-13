// components/Section.js
import React from "react";

const Section = () => {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row justify-around items-center gap-5 max-w-5xl mx-auto">
      <div className="flex flex-col justify-center md:justify-end text-center md:text-right">
        <h2 className="text-2xl font-semibold ">
          Łatwiejszy dostęp do trenerów
        </h2>
        <p className="mt-2 text-gray-700 max-w-md">
          <b className="text-accent-400">TRAINdly.</b> zapewni Ci łatwy dostęp
          do wielu profesjonalistów fitness z różnych dziedzin i lokalizacji.
          Możesz znaleźć trenera, który najlepiej spełnia Twoje potrzeby bez
          konieczności przeszukiwania wielu źródeł informacji.
        </p>
      </div>
      <div className="w-96 h-96 rounded shadow-lg overflow-hidden max-w-full">
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80" // Replace with your image path
          alt="Sample Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Section;
