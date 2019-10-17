import React from "react"
import '../style/Index.css'
import Homepage from './Homepage'
import About from './About'
import Projects from '../pages/Projects'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export default (props) => 
    <div style={{textAlign:'center'}}>
        <title>Evan Allen</title> 
    <Router >
        <Switch>
            <Route exact path="/" >
                <Homepage background={'#2e364f'}/>
            </Route>
            <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects}></Route>
        </Switch>
    </Router>
    </div>

/* 
    dark blue : #2e364f
    light blue : #2d5d7c
    orange : #ef5939
    white : #f3f0e2

*/
