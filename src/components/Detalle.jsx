export default function Detalle({
  opcionElegida,
  destinoElegido,
  deseleccionar,
  opciones,
  onSelect,
}) {
  const opcionesDisponibles = opciones.find(
    (o) => o.viajeId == destinoElegido.id,
  );

  const precioFinal =
    destinoElegido.precioBase +
    (destinoElegido.precioBase * opcionElegida?.incremento) / 100;

  return (
    <>
      <button
        onClick={() => {
          deseleccionar(null);
          onSelect(null);
        }}
      >
        Volver
      </button>
      <p> {destinoElegido.nombre} </p>
      {destinoElegido.itinerario.map((i) => (
        <div>
          <h2>Itinerario: </h2>
          <p> {i} </p>
        </div>
      ))}
      <h3>Opciones disponibles: </h3>
      <div>
        {opcionesDisponibles.opciones.map((o) => (
          <div>
            <p> {o.nombre} </p>
            <button onClick={() => onSelect(o)}>Seleccionar</button>
          </div>
        ))}
      </div>
      {opcionElegida && (
        <div>
          <p>Destino: {destinoElegido.destino} </p>
          <p>Categoria: {opcionElegida.nombre} </p>
          <p>Total a pagar: ${precioFinal} </p>
        </div>
      )}
    </>
  );
}
