
import './HomeComponent.css';
import tiemposdeante from '../../assets/tiemposdeante.png'

function HomeComponent() {
  return (

    <>
  <h2>Novedades</h2>
      <main className='seccion'>
        <div className='envoltura-foto'>
          <i>como pa ´los tiempos de ante´</i>
          <img id='como-pa' src={tiemposdeante} alt="como pa ´los tiempos de ante´" />
          <p>¡Escúchala ya!</p>
        </div>
        </main>

      
      </>


  )
}

export default HomeComponent
