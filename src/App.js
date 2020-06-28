import React from 'react'
import Main from './component/Main/Main'
import Flavors from './component/Flavors/Flavors'
import Events from './component/Events/Events'
import About from './component/About/About'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/book-an-event" component={Events} />
        <Route path="/flavors" component={Flavors} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
