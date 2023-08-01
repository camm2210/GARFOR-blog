import Link from "next/link";
import Image from "next/image";
import icon from "../../client/app/favicon.ico";
import { UserButton } from "@clerk/nextjs";


const NavBar = () => {
  return (
    <div className="border-bottom">
    <nav className="sticky-top  navbar navbar-expand navbar-expand-lg navbar-light bg-light">
      <div className="container mt-3 mb-3 ">
        <Link className="navbar-brand" href="/">
          <Image src={icon} alt="Icon logo" width="30" height="30"></Image>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ms-auto">
            <li className="nav-item active">
              <Link className="fs-6 nav-link text-dark-emphasis" href="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="fs-6 nav-link text-dark-emphasis" href="/libros">
                Libros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fs-11 nav-link text-body-tertiary"
                href="/about"
              >
                Sobre Mí
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fs-11 nav-link text-body-tertiary"
                href="/contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <UserButton
            afterSignOutUrl="/"
          />
        </div>
      </div>
      </nav>
      </div>
  );
};

export default NavBar;
