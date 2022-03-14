import "./Formulario.css";
import { useState } from "react";

const Formulario = () => {

  const estadoInicial = {
    nombre: "",
    apellido: "",
    email: "",
    motivo: "",
    preferencia: "",
    mensaje: "",
  }
  const [datosFormulario, setDatosFormulario] = useState(estadoInicial);

  const [errores, setErrores] = useState(estadoInicial);

  const handleChange = (e) => {
    // const valorDelInput = e.target.value
    // const nombreDelInput = e.target.name
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errores = { ...estadoInicial };
    Object.keys(datosFormulario).map((key) => {
      if (datosFormulario[key] == "") {
        errores = {
          ...errores,
          [key]: `El campo ${key} no puede estar vacio`,
        };
      }
    });

    setErrores({ ...errores });
  };

  const handleBlur  = () => {
    console.log("me hicieron foco")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Escribime</h2>

      <div class="nombre-y-apellido">
        <label for="nombre">
          Nombre*
          <input
            type="text"
            className={errores.nombre && "error"}
            onBlur={handleBlur}
            name="nombre"
            id="nombre"
            onChange={handleChange}
            value={datosFormulario.nombre}
            placeholder="p. ej.: Natalia"
            aria-label="Escribir nombre aquí"
          />
        </label>

        <label for="apellido">
          Apellido*
          <input
            type="text"
            className={errores.apellido && "error"}
            onBlur={handleBlur}
            name="apellido"
            id="apellido"
            onChange={handleChange}
            value={datosFormulario.apellido}
            placeholder="p. ej.: Navarro"
            aria-label="Escribir apellido aquí"
          />
        </label>
      </div>

      <label for="email" className="label-email">
        Email*
        <input
          type="email"
          className={errores.email && "error"}
          onBlur={handleBlur}
          name="email"
          id="email"
          onChange={handleChange}
          value={datosFormulario.email}
          placeholder="p. ej.: natalia.navarro@gmail.com"
          aria-label="Introducir e-mail"
        />
      </label>

      <h3 className={errores.motivo && "error"}>Motivo del contacto</h3>
      <label className = "label-radio" >
        Propuesta laboral
        <input
          type="radio"
          
          onBlur={handleBlur}
          value="trabajo"
          name="motivo"
          onChange={handleChange}
          checked={datosFormulario.motivo === "trabajo"}
        />
      </label>
      <label className="label-radio">
        Más info de mis proyectos
        <input
          type="radio"
          onBlur={handleBlur}
          value="proyecto"
          name="motivo"
          id="proyecto"
          onChange={handleChange}
          checked={datosFormulario.motivo === "proyecto"}
        />
      </label>
      <label className="label-radio">
        Sugerencias
        <input
          type="radio"
          onBlur={handleBlur}
          value="sugerencia"
          name="motivo"
          onChange={handleChange}
          checked={datosFormulario.motivo === "sugerencia"}
        />
      </label>
      <label>
        Proyecto que más te gustó:
        <select
          name="preferencia"
          onBlur={handleBlur}
          onChange={handleChange}
          value={datosFormulario.preferencia}
          className={errores.preferencia && "error"}
        >
          <option value="portfolio">Portfolio</option>
          <option value="personales">Proyectos personales</option>
          <option value="gastos">Controlador de gastos</option>
          <option value="memes">Generador de memes</option>
          <option value="rickAndMorty">Rick and Morty</option>
          <option value="brawlStars">Brawl Stars</option>
        </select>
      </label>

      <label className="label-textarea">
        Mensaje*
        <textarea
          onBlur={handleBlur}
          wows="30"
          cols="40"
          name="mensaje"
          className={errores.mensaje && "error"}
          onChange={handleChange}
          value={datosFormulario.mensaje}
          placeholder="Escriba su mensaje aquí"
          aria-label="Introducir mensaje aquí"
        ></textarea>
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Formulario;
