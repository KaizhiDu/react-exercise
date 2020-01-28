import React from 'react';
import HomeWork1 from "./components/homework1/homework1.component";
import { Route, Switch } from 'react-router-dom';
import MainPage from "./components/mainPage/mainPage.component";
import Homework2 from "./components/homework2/homework2.component";

const App = () => {


  return (
    <>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/hm1' component={HomeWork1}/>
        <Route exact path='/hm2' component={Homework2}/>
      </Switch>
    </>
  );
};

export default App;
