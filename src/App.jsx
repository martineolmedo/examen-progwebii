import { useState } from "react"
import Header from "./components/Header"
import DestinoCard from "./components/DestinoCard"
import Detalle from "./components/Detalle"
import Footer from "./components/Footer"
import destinos from "./data/viajes.json"
import opciones from "./data/opciones.json"

export default function App() {
  const [getViaje, setViaje] = useState(null)
  const [getOpcion, setOpcion] = useState(null)
  return (
    <>
      <Header/>
      {!getViaje ? (
        <div className="flex w-full justify-evenly h-lvh">
          {destinos.viajes.map(destino=>
            <DestinoCard key={destino.id} info={destino} onSelect={setViaje} />
          )}
        </div>
      ):(
        <div>
          {console.log(getViaje)}
          <Detalle opcionElegida = {getOpcion} destinoElegido = {getViaje} deseleccionar={setViaje} opciones={opciones.categorias} onSelect={setOpcion} />
        </div>
      )}
      <Footer/>
    </>
  )
}
