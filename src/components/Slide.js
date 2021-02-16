import React from 'react'

function Slide({slides}) {
    const [active, setActive] = React.useState(0)
    const [position, setPosition] = React.useState(0)
    const contentRef = React.useRef();
    console.log(contentRef)

    function slidePrev(){
      const{width} = contentRef.current.getBoundingClientRect();      
        setPosition(position-width)
    }
    function slideNext(){
        const{width} = contentRef.current.getBoundingClientRect();      
        setPosition(position + width)
    }
    return (
        <section className='container'>
            <div 
            ref={contentRef}
            className="content"
            style={{transform: `translateX(${position}px)`}}
            >
            {slides.map(item => <div key={slides.id} className="item">{item.text}</div>)}               
            </div>       
            <nav className="nav">
                <button onClick={slidePrev}> Anterior</button>
                <button onClick={slideNext}>Seguinte</button>
            </nav>
        </section>
    )
}

export default Slide
