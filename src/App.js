import Header from './Components/Header';
import Home from './Pages/Home'
import Footer from './Components/Footer'
import NavBarLeft from './Components/NavBarLeft';
import NavBarRigth from './Components/NavBarRigth'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css'

const App = () => {

  return (
    <>
      <Header />
      <div className="containerWeb">
        <NavBarLeft />
        <Home />
        <NavBarRigth />
      </div>
      <Footer />
    </>
  )
}

export default App;
