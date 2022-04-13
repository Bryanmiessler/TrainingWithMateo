import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Hola Mundo!
        </p>
      </header>
    </div>
  );
}
console.log("Hola mundo");


export default App;
