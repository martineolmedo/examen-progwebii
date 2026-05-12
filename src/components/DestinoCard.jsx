export default function DestinoCard({info, onSelect}) {

  return (
    <>
      <div className="w-3xs bg-blue-300 border-2 flex flex-col justify-center max-h-80">
        <img src={info.imagen} alt="" width={200} height={100}/>
        <h2> {info.destino} </h2>
        <p> {info.descripcion} </p>
        <p>Precio: ${info.precioBase} </p>
        <button onClick={() => onSelect(info)}>Seleccionar</button>
      
      </div>
    </>
  )
}