import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./components/mainPage/mainPage.component";
import HomeWork1 from "./components/homework1/homework1.component";
import Homework2 from "./components/homework2/homework2.component";
import HomeWork3 from "./components/homework3/homework3.component";
import Homework4 from "./components/homework4/homework4.component";
import Homework5 from "./components/homework5/homework5.component";
import Homework6 from "./components/homework6/homework6.component";

const App = () => {


  return (
    <>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/hm1' component={HomeWork1}/>
        <Route exact path='/hm2' component={Homework2}/>
        <Route exact path='/hm3' component={HomeWork3}/>
        <Route exact path='/hm4' component={Homework4}/>
        <Route exact path='/hm5' component={Homework5}/>
        <Route exact path='/hm6' component={Homework6}/>
      </Switch>
    </>
  );
};

export default App;
