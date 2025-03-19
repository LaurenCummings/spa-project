import './css/App.css';
import skyImg from './assets/banner-img.webp';

function App() {

  return (
    <div className="app">
      <div className="banner">
        <img src={skyImg} alt="clear sky"/>
        <h1 className="welcome">welcome</h1>
        <h1 className="to">to</h1>
        <h1 className="relaxation">relaxation</h1>
      </div>
    </div>
  )
}

export default App
