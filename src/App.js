import Header from './Components/Header';
import Home from './Pages/Home'
import NavBarLeft from './Components/NavBarLeft';
import NavBarRigth from './Components/NavBarRigth'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css'
import { Suspense } from 'react'
import './i18n'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Suspense fallback={null}>
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
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
