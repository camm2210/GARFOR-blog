import React from "react";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 bottom-0 position-absolute">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-900 sm:text-center ">
          © 2023 . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 sm:mt-0">
          <li>
            <a href="/blog" className="hover:underline me-4 md:me-6">
              Blog
            </a>
          </li>
          <li>
            <a href="/libros" className="hover:underline me-4 md:me-6">
              Libros
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
