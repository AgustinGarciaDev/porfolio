import Header from './Components/Header';
import Home from './Pages/Home'
import Footer from './Components/Footer'
import NavBarLeft from './Components/NavBarLeft';
import NavBarRigth from './Components/NavBarRigth'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <div className="containerWeb">
        <NavBarLeft />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" />
          <Route exact path="/experience" />
          <Route exact path="/work" />
          <Route exact path="/contact" />
        </Switch>
        <NavBarRigth />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
