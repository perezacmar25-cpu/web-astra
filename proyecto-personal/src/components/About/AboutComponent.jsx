import React from 'react'
import Astra1 from '../../assets/Astra1.jpeg';
import Astra2 from '../../assets/Astra2.jpeg';
import Astra3 from '../../assets/Astra3.jpeg';
import Astra4 from '../../assets/Astra4.jpeg';
import Astra5 from '../../assets/Astra5.jpeg';
import Astra6 from '../../assets/Astra6.jpeg';
import Astra7 from '../../assets/Astra7.jpeg';
import Astra9 from '../../assets/Astra9.jpeg';

import './AboutComponent.css';




function AboutComponent() {
    return (

        <>
            <h2>Sobre mí</h2>
            <main className='seccion'>
                <div className='parrrafo'>
                    <p>Astra es un chaval de Sevilla que encontró en la música un sitio donde respirar. Empezó haciendo beats en su cuarto, sin más pretensión que desahogarse, y poco a poco fue descubriendo que ahí había algo más. Ahora, junto a Sosa Music, está dando forma a un sonido propio, mezclando lo que vive, lo que siente y lo que sueña. Cada día trabaja en nuevas ideas, nuevas letras y nuevas bases, intentando crecer sin perder la esencia que lo trajo hasta aquí.</p>

                    <p>El hecho de compaginar los estudios con la música es algo que no ha sido tan complicado. El motivo no ha sido exactamente que empezar en este mundo sea fácil ni mucho menos, sino que gracias a la inspiración que lleva dentro, las ganas y motivación con la que hace las cosas, y lo que le apasiona a lo que se dedica, se le ha hecho mucho más llevadero y conmovedor.</p>

                    <p>Astra es alguien que valora la calma, las conversaciones reales y los pequeños detalles del día a día. Le gusta observar, entender a la gente y aprender de cada experiencia. No le interesa aparentar, sino que prefiere la autenticidad, incluso cuando no es perfecta. Le mueve la curiosidad y la necesidad de crecer sin perder su esencia.</p>

                    <p>Astra es una persona que trabaja con intención. Le gusta tener claro hacia dónde va, aunque el camino no siempre sea perfecto. Es alguien que se toma en serio lo que hace, que escucha más de lo que habla y que prefiere avanzar paso a paso antes que correr sin rumbo. Quienes lo conocen destacan su forma tranquila de afrontar los retos y su capacidad para mantener la cabeza fría incluso cuando las cosas se complican.</p>

                    <p>Le interesa aprender de todo lo que le rodea: de la gente, de las situaciones y de los cambios que trae cada etapa. Tiene una manera muy personal de observar el mundo, buscando siempre el porqué de las cosas y tratando de entenderlas antes de actuar. Esa forma de mirar le ayuda a tomar decisiones con criterio y a mantener una visión clara de lo que quiere construir.</p>

                    <p>A nivel personal, valora la estabilidad, la honestidad y el respeto. No le gustan las prisas ni las apariencias; prefiere la transparencia y la coherencia, tanto en su vida como en su trabajo. Es constante, paciente y consciente de que los resultados reales llegan con tiempo, dedicación y una mentalidad abierta.</p>

                    <p>Astra no pretende ser más de lo que es, pero tampoco menos. Está en un momento de crecimiento, con los pies en el suelo y la mirada puesta en lo que viene. Su forma de trabajar refleja exactamente eso: compromiso, calma y una voluntad firme de seguir evolucionando.</p>

                    <div className='portfolio'>

                        <img src={Astra1} alt="Astra1" />
                        <img src={Astra2} alt="Astra2" />
                        <img src={Astra3} alt="Astra3" />
                        <img src={Astra4} alt="Astra4" />

                    </div>

                    <div className='fila2'>
                        <img src={Astra5} alt="Astra1" />
                        <img src={Astra6} alt="Astra2" />
                        <img src={Astra7} alt="Astra3" />
                        <img src={Astra9} alt="Astra1" />
                    </div>


                </div >
            </main>


        </>
    )
}

export default AboutComponent
