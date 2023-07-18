const validation = (data) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "El email ingresado no es válido";
  }
  if (!data.email) {
    errors.email = "Debe ingresar un email";
  }
  if (data.email.length > 35) {
    errors.email = "El email debe tener menos de 35 caracteres";
  }
  if (!/.*\d+.*/.test(data.password)) {
    errors.password = "la contraseña debe incluir al menos un número";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "la contraseña tiene que tener entre 6 y 10 carateres";
  }
  return errors;
};

export default validation;
