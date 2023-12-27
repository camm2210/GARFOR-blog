import React from "react";
import SearchBar from "@/components/UI/SearchBar/SearchBar";

function libros() {
  return (
    <div className="bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Libros
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Libros sobre Atletismo, olimpismo y educación física
          </p>
        </div>
      </div>
    </div>
  );
}

export default libros;
