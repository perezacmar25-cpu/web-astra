import React from 'react'
import Chansey from '../../assets/Chansey.png';
import Asumelo from'../../assets/asumelo.PNG';
import './MusicaComponent.css';

function MusicaComponent() {
  return (
    <>
      <h2>Discografía</h2>
      <main className="seccion">
        <div className='musica-container'>

          <div className="album-item">

            <a target='blank' href="https://open.spotify.com/intl-es/track/1h2XfNe3EzCQBa92miJGp1?si=5fa90cbe99924761">
              <img id='chansey' src={Chansey} alt="Chansey" /></a>

            <p>Chansey</p>
            <h5 style={{ marginTop: '0px' }}><i>"23/01/2026"</i></h5>
          </div>

          <div className="album-item">
            <a target='blank' href="https://open.spotify.com/intl-es/track/7Kdglc6H0ZGcTJSpbe8dkc?si=d741770a86e4472e"><img id='asumelo' src={Asumelo} alt="ASÚMELO" />
            </a>
            <p>ASÚMELO</p>
            <h5 style={{ marginTop: '0px' }}><i>"06/03/2026"</i></h5>
          </div>

        </div>
      </main></>

  )
}
export default MusicaComponent
