import "./Formulario.css";
import { useState } from "react";

const Formulario = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    motivo: "",
    preferencia: "",
    mensaje: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    // const valorDelInput = e.target.value
    // const nombreDelInput = e.target.name
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };
  console.log(datosFormulario);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!nombre || !edad || !provincia || !genero) {
    //     setError(true)
    // }
    // else {
    //   setError(false)
    // }
  };

  return (
    <form>
      <h2>Escribime</h2>

      <div class="nombre-y-apellido">
        <label for="nombre">
          Nombre*
          <input
            type="text"
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
          name="email"
          id="email"
          onChange={handleChange}
          value={datosFormulario.email}
          placeholder="p. ej.: natalia.navarro@gmail.com"
          aria-label="Introducir e-mail"
        />
      </label>

      <h3>Motivo del contacto</h3>
      <label className="label-radio">
        Propuesta laboral
        <input
          type="radio"
          value="trabajo"
          name="motivo"
          onChange={handleChange}
          checked={datosFormulario.genero === "trabajo"}
        />
      </label>
      <label className="label-radio">
        Más info de mis proyectos
        <input
          type="radio"
          value="proyecto"
          name="motivo"
          id="proyecto"
          onChange={handleChange}
          checked={datosFormulario.genero === "proyecto"}
        />
      </label>
      <label className="label-radio">
        Sugerencias
        <input
          type="radio"
          value="sugerencia"
          name="motivo"
          onChange={handleChange}
          checked={datosFormulario.genero === "sugerencia"}
        />
      </label>
      <label>
        Proyecto que más te gustó:
        <select
          name="preferencia"
          onChange={handleChange}
          value={datosFormulario.preferencia}
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
          wows="30"
          cols="40"
          name="mensaje"
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
