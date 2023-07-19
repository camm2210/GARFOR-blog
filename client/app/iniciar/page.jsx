"use client";

import { useState } from "react";
import validation from "@/validations/validations";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError(
      validation({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError({
      email: "",
      password: "",
      error: "",
    });
    if (!data.email || !data.password) {
      setError({
        email: data.email ? "" : "El email es requerido",
        password: data.password ? "" : "La contraseña es requerida",
        error: "El email y la contraseña son requeridos",
      });
    }
  };

  return (
    <>
      <div>
        <h2>Iniciar sesión</h2>

        {/*Login form */}
        <form>
          {/*Email input */}
          <div>
            <div>
              <input
                type="email"
                value={data.email}
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="nombre@direccion.com"
              />
              {error.email && <p>{error.email}</p>}
            </div>

            {/*Password input */}
            <div>
              <div>
                <input
                  type="password"
                  value={data.password}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="ingresa tu contraseña"
                />
                {error.password && <p>{error.password}</p>}
              </div>
            </div>

            {/*Log in button */}
            <div>
              <button onClick={handleSubmit} type="submit">
                Ingresa
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
