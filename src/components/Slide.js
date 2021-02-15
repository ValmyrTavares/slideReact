import React from 'react'

function Slide({slides}) {
    return (
        <section>
            <div>
            {slides.map(item => <div>{item.text}</div>)}               
            </div>       
            <nav>
                <button>Anterior</button>
                <button>Seguinte</button>
            </nav>
        </section>
    )
}

export default Slide
