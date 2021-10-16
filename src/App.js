
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './pages/Context/AuthProvider';
import BreakFastDetail from './pages/FoodDetail/BreakFastDetail';
import DinnerDetail from './pages/FoodDetail/DinnerDetail';
import LunchDetail from './pages/FoodDetail/LunchDetail';

import PlaceOrder from './pages/FoodDetail/PlaceOrder/PlaceOrder';
import BreakfastAll from './pages/Home/BreakfastAll/BreakfastAll';
import DinnerAll from './pages/Home/DinnerAll/DinnerAll';
import FoodHeader from './pages/Home/FoodHeader/FoodHeader';
import Home from './pages/Home/Home/Home';
import LaunchAll from './pages/Home/LaunchAll/LaunchAll';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register/Register';
import Header from './pages/Shared/Header/Header';
import MainHeader from './pages/Shared/Header/MainHeader';



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <MainHeader></MainHeader>
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
            <PrivateRoute exact path='/place-order'>
              <FoodHeader></FoodHeader>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );
}

export default App;
