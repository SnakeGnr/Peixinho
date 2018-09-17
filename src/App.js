
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import './App.css';

import Inicio from './container/Inicio'
import Pizzas from './container/Pizzas'
import Pratos from './container/Pratos'
import Porcoes from './container/Porcoes'
import Bebidas from './container/Bebidas'
import Navbarr from './container/navbarr'
import Footer from './container/footer'
import Ambiente from './container/Ambiente'



class App extends React.Component {
   
    
    render() {
        return (
            <Router>
                <div>
                    <header className="margeBot">

                        <Navbarr/>
                      
                        <div>
                            <Switch>
                                <Route exact path='/' component={Inicio} />
                                <Route path='/Pizzas' component={Pizzas} />
                                <Route path='/Porcoes' component={Porcoes} />
                                <Route path='/Pratos' component={Pratos} />
                                <Route path='/Bebidas' component={Bebidas} />
                                <Route path='/Ambiente' component={Ambiente} />
        
                            </Switch>
                        </div>
                    </header>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
