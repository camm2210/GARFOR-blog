import React from "react";

function SearchBar() {
  return (
    <form className="mt-10 ">
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className=""
          placeholder="Buscar artículos..."
          required
        ></input>
        <button
          type="submit"
          className=" absolute end-2.5 bottom-2.5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
