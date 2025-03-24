import './css/App.css';
import Topbar from './components/Topbar.jsx';
import Banner from './components/Banner.jsx';
import ServiceNav from './components/ServiceNav.jsx';
import Massage from './components/Massage.jsx';
import Skincare from './components/Skincare.jsx';
import Nails from './components/Nails.jsx';
import BodyTreatments from './components/BodyTreatments.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className="app">
      <Topbar />
      <Banner />
      <ServiceNav />
      <Massage />
      <Skincare />
      <Nails />
      <BodyTreatments />
      {/* <Footer /> */}
    </div>
  )
}

export default App
