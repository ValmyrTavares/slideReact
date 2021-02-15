import React from 'react';
import './App.css';
import Slide from './components/Slide';

const musas = [
  {
    id:'slide1',
    text: 'Slide 1'
  },
  {
    id:'slide2',
    text: 'Slide 2'
  },
  {
    id:'slide3',
    text: 'Slide 3'
  },
  {
    id:'slide4',
    text: 'Slide 4'
  },
]



function App() {
  return (
    < >      
     <h1 className="title"style={{color:'red'}}>Musas sem nome</h1>    
     <Slide slides={musas}/>
    </>
  );
}

export default App;
