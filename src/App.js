import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import React, { useState } from 'react';

function App() {

  const [selected,setSelected] = useState(true);
  const [click,  setClick] = useState('presiona un boton');

  function selectedButton(activate){

    setSelected(activate);

  }

  console.log(selectedButton);

  // function clickButtons(){
  //   if(props.selected === true){
  //     return setClick('Expandir');
  // }else{
  //     return setClick('Colapsar');
  // };

  // }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Card color="red" height="100px" width="100px" selected={selected} setSelected={setSelected} selectedButton={selectedButton}/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
