import Header from './Components/Header';
import Home from './Pages/Home'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css'

const App = () => {

  return (
    <>
      <Header />
      <div className="containerWeb">
        <NavBar />
        <Home />
        <NavBar />
      </div>
      <Footer />
    </>
  )
}

export default App;
