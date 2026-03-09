import { useState } from 'react';

function MasComponent() {
    const [enviado, setEnviado] = useState(false);

    //consulta a la IA para que el mensaje que se ponga en el cuestionario llegue al correo.
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://formspree.io/f/meelyqrl', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(e.target),
        });

        if (res.ok) {
            setEnviado(true);
            e.target.reset();
            setTimeout(() => setEnviado(false), 3000);
        }
    };

    return (
        <>
            <h2>¡Haz alguna propuesta!</h2>
            <main className='seccion'>

                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                <input name="nombre" placeholder="Tu nombre" required />
                <input name="email" type="email" placeholder="Tu email" required />
                <textarea name="message" placeholder="Tu mensaje" rows="5" required />
                <button type="submit">Enviar</button>
                {enviado && <p>¡Mensaje enviado!</p>}
            </form>

        </main >
    </>
  );
}

export default MasComponent;