
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BreakFastDetail from './pages/FoodDetail/BreakFastDetail';
import DinnerDetail from './pages/FoodDetail/DinnerDetail';
import LunchDetail from './pages/FoodDetail/LunchDetail';

import PlaceOrder from './pages/FoodDetail/PlaceOrder/PlaceOrder';
import BreakfastAll from './pages/Home/BreakfastAll/BreakfastAll';
import DinnerAll from './pages/Home/DinnerAll/DinnerAll';
import FoodHeader from './pages/Home/FoodHeader/FoodHeader';
import Home from './pages/Home/Home/Home';
import LaunchAll from './pages/Home/LaunchAll/LaunchAll';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';



function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <FoodHeader></FoodHeader>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/breakfast-items'>
            <BreakfastAll></BreakfastAll>
          </Route>
          <Route exact path='/lunch-items'>
            <LaunchAll></LaunchAll>
          </Route>
          <Route exact path='/dinner-items'>
            <DinnerAll></DinnerAll>
          </Route>
          <Route path='/breakfast-detail/:id'>
            <BreakFastDetail></BreakFastDetail>
          </Route>
          <Route path='/lunch-detail/:id'>
            <LunchDetail></LunchDetail>
          </Route>
          <Route path='/dinner-detail/:id'>
            <DinnerDetail></DinnerDetail>
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
