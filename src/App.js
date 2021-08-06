import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Main from './components/MainComponent';
import { useEffect } from 'react';

//TODO: We either need to add the navbar to this page or add it as a separate component

//IMPORTANT: Each of these pulls the component from the .js file with the hyphen naming scheme.
//Everything else in those folders is leftover code from the previous project that should be deleted

//TODO: All of these components are just placeholders for different groups now

import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/site.scss';


export default function App() {
  useEffect(async() => {
    await import ('@popperjs/core');
    await import ('bootstrap/dist/js/bootstrap.min');
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
    );
}

