import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
    <div class="carta">
      <div class="contenido">
        <p>Te invito a celebrar</p>
        <h1>Mi Cumpleaños</h1>
        <p>El día 15 de Noviembre de 2026</p>
        <p>En el salón de fiestas Zapatito blanco Zapatito azul</p>
        <button onClick={() => window.open('https://maps.app.goo.gl/BkTynoaQHk8kfBLf6', '_blank')}>
          Ver Dirección
        </button>
        <p>Hora de llegada: 6:00 PM</p>
        <h1>Rosaura Salto Mendiola</h1>
      </div>
    </div>
    </>
  )
}

export default App
