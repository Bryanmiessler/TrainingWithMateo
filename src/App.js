import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Card color="red" height="100px" width="100px"/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
