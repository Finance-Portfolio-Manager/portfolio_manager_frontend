//TODO: We either need to add the navbar to this page or add it as a separate component

//IMPORTANT: Each of these pulls the component from the .js file with the hyphen naming scheme.
//Everything else in those folders is leftover code from the previous project that should be deleted

//TODO: All of these components are just placeholders for different groups now

import React, {useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/site.scss';
import Home from './components/home';



export default function App() {
  useEffect(async() => {
    await import ('@popperjs/core');
    await import ('bootstrap/dist/js/bootstrap.min');
  }, []);
  return (
    <Switch>
    <Route exact path='/' component={Home} />
</Switch>
  );
}

