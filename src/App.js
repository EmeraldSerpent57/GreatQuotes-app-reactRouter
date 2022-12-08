import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/quotes' exact>

      </Route>
      <Route path='/quotes/:quoteId'>

      </Route>
      <Route path='/new-quote'>
        
      </Route>
    </Switch>
  );
}

export default App;
