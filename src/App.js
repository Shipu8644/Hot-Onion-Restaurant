
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

        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <FoodHeader></FoodHeader>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Header></Header>
            <FoodHeader></FoodHeader>
            <Home></Home>
          </Route>
          <Route exact path='/breakfast-items'>
            <FoodHeader></FoodHeader>
            <BreakfastAll></BreakfastAll>
          </Route>
          <Route exact path='/lunch-items'>
            <FoodHeader></FoodHeader>
            <LaunchAll></LaunchAll>
          </Route>
          <Route exact path='/dinner-items'>
            <FoodHeader></FoodHeader>
            <DinnerAll></DinnerAll>
          </Route>
          <Route path='/breakfast-detail/:id'>
            <FoodHeader></FoodHeader>
            <BreakFastDetail></BreakFastDetail>
          </Route>
          <Route path='/lunch-detail/:id'>
            <FoodHeader></FoodHeader>
            <LunchDetail></LunchDetail>
          </Route>
          <Route path='/dinner-detail/:id'>
            <FoodHeader></FoodHeader>
            <DinnerDetail></DinnerDetail>
          </Route>
          <Route exact path='/place-order'>
            <FoodHeader></FoodHeader>
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
