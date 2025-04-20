import './App.css';
import Banner from './Components/Banner';
import Service from './Components/Services';
import Anime from './Components/Anime';
import Navbar from './Components/Navbar';

function App() {
  return (

    
    <div className="App">
      <Navbar/>
      <Banner/>
      <div id='body-container'>
        <Service/>
        <Anime/>
      </div>
      
    </div>
  );
}

export default App;
