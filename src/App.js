
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BreakFastDetail from './pages/FoodDetail/BreakFastDetail';
import PlaceOrder from './pages/FoodDetail/PlaceOrder/PlaceOrder';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';



function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/breakfast-detail/:id'>
            <BreakFastDetail></BreakFastDetail>
          </Route>
          <Route exact path='/place-order'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>


        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
