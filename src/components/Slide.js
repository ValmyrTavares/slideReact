import React from 'react'

function Slide({slides}) {
    return (
        <section className='container'>
            <div className="content">
            {slides.map(item => <div key={slides.id} className="item">{item.text}</div>)}               
            </div>       
            <nav className="nav">
                <button> Anterior</button>
                <button>Seguinte</button>
            </nav>
        </section>
    )
}

export default Slide
