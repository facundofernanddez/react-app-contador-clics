import "../stylesheets/Boton.css";

export const Boton = ({ texto, esBotonClic, manejarClic }) => {
  return (
    <button
      className={esBotonClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
};
