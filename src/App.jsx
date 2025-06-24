import './css/App.css';
import Topbar from './components/Topbar.jsx';
import Banner from './components/Banner.jsx';
import ServiceNav from './components/ServiceNav.jsx';
import BookNow from './components/BookNow.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className="app">
      <Topbar />
      <Banner />
      <ServiceNav />
      <BookNow />
      <Footer />
    </div>
  )
}

export default App
