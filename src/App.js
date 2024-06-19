import './App.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import TeamMatches from './components/TeamMatches'

import NotFound from './components/NotFound'

import Home from './components/Home'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
